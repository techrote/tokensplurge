#!/usr/bin/env node
'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),crypto=require('node:crypto');
const {execFileSync}=require('node:child_process');
const {pathToFileURL}=require('node:url');
const {chromium}=require('playwright');
const lib=path.resolve(__dirname,'..'),repo=path.resolve(lib,'../..');
const catalog=JSON.parse(fs.readFileSync(path.join(lib,'catalogue.json'),'utf8'));
const pin=catalog.pinned_sources.find(s=>s.repo==='techrote/tokensplurge')?.revision;
if(!/^[a-f0-9]{40}$/.test(pin||''))throw Error('Invalid source pin');
const items=catalog.references.filter(x=>x.capture);
const out=path.join(lib,'captures'),tmp=fs.mkdtempSync(path.join(os.tmpdir(),'ts-reference-'));
fs.mkdirSync(out,{recursive:true});
const gitBlob=b=>crypto.createHash('sha1').update(Buffer.from('blob '+b.length+'\0')).update(b).digest('hex');
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
function materialize(ref,rel){
 if(!/^[a-f0-9]{40}$/.test(ref)||!/^(editions|folios|hybrids|nocturnes|tapestries|theatres|salvage|lineage)\/[a-zA-Z0-9._/-]+$/.test(rel)||rel.includes('..'))throw Error('Disallowed path');
 const bytes=execFileSync('git',['show',ref+':'+rel],{cwd:repo,maxBuffer:8*1024*1024});
 const target=path.join(tmp,rel);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,bytes);
 return {target,bytes};
}
async function main(){
 const browser=await chromium.launch({headless:true});
 const results=[];
 try{
 for(const item of items){
  const r={id:item.id,ref:item.ref,path:item.path,blob_sha:item.blob_sha,status:'failed',viewport:'1440x900',method:'local Chromium on exact pinned source HTML'};
  let page=null;
  try{
   if(item.repo!=='techrote/tokensplurge'||item.ref!==pin)throw Error('Source ref mismatch');
   const {target,bytes}=materialize(pin,item.path);
   if(gitBlob(bytes)!==item.blob_sha)throw Error('Source Git blob mismatch');
   if(item.path.startsWith('salvage/'))materialize(pin,'salvage/kit.js');
   const errors=[];page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
   page.on('pageerror',e=>errors.push(String(e.message||e)));
   await page.route('**/*',route=>{
    const url=route.request().url();
    if(url.startsWith('file:')||url.startsWith('data:')||url.startsWith('blob:'))return route.continue();
    return route.abort();
   });
   await page.goto(pathToFileURL(target).href,{waitUntil:'domcontentloaded',timeout:20000});
   await page.waitForFunction(()=>[...document.querySelectorAll('canvas')].some(c=>c.width>10&&c.height>10&&c.getBoundingClientRect().width>180),null,{timeout:15000});
   await page.waitForTimeout(1600);
   const box=await page.evaluate(()=>{
    const a=[...document.querySelectorAll('canvas')].map(c=>c.getBoundingClientRect()).filter(r=>r.width>180&&r.height>100).sort((a,b)=>b.width*b.height-a.width*a.height);
    const b=a[0];return {x:b.x,y:b.y,width:b.width,height:b.height};
   });
   if(errors.length)throw Error('Page exceptions: '+errors.slice(0,3).join(' | '));
   const shot=path.join(out,item.id+'-desktop.png'),detail=path.join(out,item.id+'-detail.png');
   await page.screenshot({path:shot,fullPage:false,type:'png'});
   const w=768,h=480,x=Math.max(0,Math.min(1440-w,box.x+box.width*.52-w/2)),y=Math.max(0,Math.min(900-h,box.y+box.height*.53-h/2));
   await page.screenshot({path:detail,clip:{x,y,width:w,height:h},type:'png'});
   r.status='captured';r.canvas=box;r.detail_clip={x,y,width:w,height:h};
   r.files=[shot,detail].map(p=>({path:path.relative(lib,p).replaceAll('\\','/'),bytes:fs.statSync(p).size,sha256:hash(fs.readFileSync(p))}));
  }catch(e){r.error=String(e.stack||e).slice(0,1100)}
  finally{if(page)await page.close();results.push(r);console.log(r.id+': '+r.status+(r.error?' '+r.error.split('\n')[0]:''))}
 }
 const report={schema_version:1,edition:catalog.edition,pin,engine:'Chromium via Playwright',playwright_version:require('playwright/package.json').version,generated_utc:new Date().toISOString(),limitations:'Not Godot/native, not cross-browser and not hosted HTMLPreview evidence.',results};
 fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(report,null,2)+'\n');
 if(results.some(x=>x.status!=='captured'))process.exitCode=1;
 }finally{await browser.close();fs.rmSync(tmp,{recursive:true,force:true})}
}
main().catch(e=>{console.error(e);process.exitCode=1});
