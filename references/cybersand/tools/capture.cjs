#!/usr/bin/env node
'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const {execFileSync}=require('node:child_process'),{pathToFileURL}=require('node:url'),{chromium}=require('playwright');
const {assertCatalogue,assertCaptureRecord,safePath}=require('./catalogue-policy.cjs');
const lib=path.resolve(__dirname,'..'),repo=path.resolve(lib,'../..');
const catalogPath=path.join(lib,'catalogue.json'),htmlPath=path.join(lib,'index.html');
const c=JSON.parse(fs.readFileSync(catalogPath,'utf8'));
const b=JSON.parse(fs.readFileSync(path.join(__dirname,'initial-pins.json'),'utf8'));
assertCatalogue(c,b);
const items=c.references.filter(x=>x.capture),out=path.join(lib,'captures'),tmp=fs.mkdtempSync(path.join(os.tmpdir(),'ts-reference-'));
fs.mkdirSync(out,{recursive:true});
const gitBlob=b=>crypto.createHash('sha1').update(Buffer.from('blob '+b.length+'\0')).update(b).digest('hex');
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
function materialize(ref,rel){
 if(!/^[a-f0-9]{40}$/.test(ref)||!safePath(rel))throw Error('Disallowed source path '+rel);
 let bytes;
 try{bytes=execFileSync('git',['show',ref+':'+rel],{cwd:repo,maxBuffer:12*1024*1024});}
 catch(e){throw Error('Missing immutable Git object: '+ref+':'+rel+'; fetch creative branch before retrying: '+e.message);}
 const target=path.join(tmp,rel);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,bytes);
 return {target,bytes};
}
function verifyFiles(e,x){
 assertCaptureRecord(x,e);
 for(const f of e.files){
  const buf=fs.readFileSync(path.join(lib,f.path));
  assert.ok(buf.subarray(0,8).equals(Buffer.from('89504e470d0a1a0a','hex')),'bad existing PNG '+f.path);
  assert.equal(buf.length,f.bytes,'historic PNG length changed '+f.path);
  assert.equal(hash(buf),f.sha256,'historic PNG changed '+f.path);
 }
}
async function main(){
 const reportPath=path.join(out,'report.json');
 const old=fs.existsSync(reportPath)?JSON.parse(fs.readFileSync(reportPath,'utf8')):{results:[]};
 const existing=new Map();
 for(const e of old.results||[]){
  if(existing.has(e.id))throw Error('Duplicate existing capture '+e.id);
  verifyFiles(e,items.find(x=>x.id===e.id));existing.set(e.id,e);
 }
 const missing=items.filter(x=>!existing.has(x.id));
 if(!missing.length){console.log('No missing captures; original bytes unchanged');return;}
 const browser=await chromium.launch({headless:true});
 const results=[...existing.values()],failures=[];
 try{
  for(const item of missing){
   let page=null;const shots=[];
   try{
    const {target,bytes}=materialize(item.ref,item.path);
    assert.equal(gitBlob(bytes),item.blob_sha,'source Git blob differs '+item.id);
    if(item.path.startsWith('salvage/'))materialize(item.ref,'salvage/kit.js');
    const errors=[];
    page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
    page.on('pageerror',e=>errors.push(String(e.message||e)));
    await page.route('**/*',route=>{
     const url=route.request().url();
     if(url.startsWith('file:')||url.startsWith('data:')||url.startsWith('blob:'))return route.continue();
     return route.abort();
    });
    await page.goto(pathToFileURL(target).href,{waitUntil:'domcontentloaded',timeout:30000});
    await page.waitForFunction(()=>[...document.querySelectorAll('canvas')].some(c=>c.width>10&&c.height>10&&c.getBoundingClientRect().width>180),null,{timeout:20000});
    await page.waitForTimeout(2000);
    const box=await page.evaluate(()=>{
     const a=[...document.querySelectorAll('canvas')].map(c=>c.getBoundingClientRect()).filter(r=>r.width>180&&r.height>100).sort((a,b)=>b.width*b.height-a.width*a.height);
     const r=a[0];return {x:r.x,y:r.y,width:r.width,height:r.height};
    });
    assert.equal(errors.length,0,'browser exceptions: '+errors.join(' | '));
    const shot=path.join(out,item.id+'-desktop.png'),detail=path.join(out,item.id+'-detail.png');
    shots.push(shot,detail);
    await page.screenshot({path:shot,fullPage:false,type:'png'});
    const w=768,h=480,x=Math.max(0,Math.min(1440-w,box.x+box.width*.52-w/2)),y=Math.max(0,Math.min(900-h,box.y+box.height*.53-h/2));
    await page.screenshot({path:detail,clip:{x,y,width:w,height:h},type:'png'});
    const e={id:item.id,ref:item.ref,path:item.path,blob_sha:item.blob_sha,status:'captured',viewport:'1440x900',method:'local Chromium exact per-entry Git source',canvas:box,detail_clip:{x,y,width:w,height:h},files:shots.map(p=>({path:path.relative(lib,p).replaceAll('\\','/'),bytes:fs.statSync(p).size,sha256:hash(fs.readFileSync(p))}))};
    verifyFiles(e,item);results.push(e);console.log(item.id+': captured and hashes verified');
   }catch(err){
    failures.push({id:item.id,error:String(err.stack||err).slice(0,1800)});
    for(const f of shots)try{fs.rmSync(f,{force:true});}catch(_){}
    console.error(item.id+': FAILED '+String(err));
   }finally{if(page)await page.close();}
  }
  const report={schema_version:2,edition:c.edition,source_revision_policy:'per-entry',historical_pin:old.pin||old.historical_pin||null,engine:'Chromium via Playwright',playwright_version:require('playwright/package.json').version,generated_utc:new Date().toISOString(),limitations:'Not native Godot/material/physics, cross-browser, hosted preview or human visual acceptance evidence.',results,failures};
  fs.writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');
  if(failures.length){process.exitCode=1;return;}
  for(const x of items)if(results.some(e=>e.id===x.id)){
   x.capture.status='captured';
   if(x.id==='aeolian-palimpsest')x.capture.evidence='Actual pinned Chromium source/PNG hashes in captures/report.json; human and native Godot comparison outstanding.';
  }
  c.status='source-curated-browser-evidence-not-human-or-native-accepted';
  fs.writeFileSync(catalogPath,JSON.stringify(c,null,2)+'\n');
  const h=fs.readFileSync(htmlPath,'utf8'),re=/(<script id="catalogue-data" type="application\/json">)([\s\S]*?)(<\/script>)/;
  if(!re.test(h))throw Error('Embedded catalogue script missing');
  fs.writeFileSync(htmlPath,h.replace(re,(_,a,b,z)=>a+JSON.stringify(c)+z));
 }finally{await browser.close();}
}
main().catch(e=>{console.error(e);process.exitCode=1}).finally(()=>fs.rmSync(tmp,{recursive:true,force:true}));
