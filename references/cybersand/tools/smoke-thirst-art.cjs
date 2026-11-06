#!/usr/bin/env node
'use strict';
// Independent browser pixel/interaction *smoke* on source-pinned fog-catchment art.
// This is NOT aesthetic ranking or Godot/native fluid-material qualification.
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const {execFileSync}=require('node:child_process'),{pathToFileURL}=require('node:url'),{chromium}=require('playwright');
const root=path.resolve(__dirname,'../../..');
const cat=JSON.parse(fs.readFileSync(path.join(__dirname,'..','catalogue.json'),'utf8'));
const item=cat.references.find(x=>x.id==='thirst-of-the-sky');
assert.ok(item&&item.capture.status==='captured','registered and captured source missing');
const bytes=execFileSync('git',['show',item.ref+':'+item.path],{cwd:root,maxBuffer:8*1024*1024});
const blob=crypto.createHash('sha1').update(Buffer.from('blob '+bytes.length+'\0')).update(bytes).digest('hex');
assert.equal(blob,item.blob_sha,'new art source is not the pinned Git blob');
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'cybersand-curation-thirst-'));
const html=path.join(tmp,'art.html');fs.writeFileSync(html,bytes);
async function one(browser,width,height,dpr){
 const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:dpr});
 const errors=[];const external=[];
 page.on('pageerror',e=>errors.push(String(e.message||e)));
 await page.route('**/*',route=>{
  const url=route.request().url();
  if(/^(file|data|blob):/.test(url))return route.continue();
  external.push(url);return route.abort();
 });
 try{
  await page.goto(pathToFileURL(html).href,{waitUntil:'domcontentloaded',timeout:30000});
  await page.waitForFunction(()=>[...document.querySelectorAll('canvas')].some(c=>c.width>=300&&c.height>=200),null,{timeout:20000});
  await page.waitForTimeout(400);
  const state=await page.evaluate(()=>{
   const canvas=[...document.querySelectorAll('canvas')].sort((a,b)=>b.width*b.height-a.width*a.height)[0];
   const g=canvas.getContext('2d');if(!g)throw Error('Canvas 2D unavailable');
   let low=Infinity,high=-Infinity,bright=0,dark=0;const colors=new Set();
   for(let iy=1;iy<=10;iy++)for(let ix=1;ix<=16;ix++){
    const xx=Math.floor(canvas.width*ix/17),yy=Math.floor(canvas.height*iy/11),p=g.getImageData(xx,yy,1,1).data;
    colors.add(p.slice(0,3).join(','));
    const lum=Math.round((p[0]*.2126)+(p[1]*.7152)+(p[2]*.0722));
    low=Math.min(low,lum);high=Math.max(high,lum);if(lum>150)bright++;if(lum<75)dark++;
   }
   return {canvas:[canvas.width,canvas.height],colors:colors.size,low,high,bright,dark,
    buttons:document.querySelectorAll('button').length,sliders:document.querySelectorAll('input[type="range"]').length,
    overflow:document.documentElement.scrollWidth>innerWidth+1,
    pngLength:canvas.toDataURL('image/png').length};
  });
  assert.ok(state.colors>=15,'render has too few independent sampled colours');
  assert.ok(state.high-state.low>=50,'render has insufficient value separation');
  assert.ok(state.bright>=1&&state.dark>=1,'no sampled foreground/background hierarchy');
  assert.ok(state.pngLength>30000,'actual canvas export is likely blank');
  assert.ok(state.buttons>=2&&state.sliders>=1,'expected interactive controls not present');
  assert.equal(state.overflow,false,'horizontal overflow');
  assert.deepEqual(external,[],'unexpected nonlocal dependencies');
  assert.deepEqual(errors,[],'JavaScript runtime errors');
  console.log('THIRST_CHROMIUM_PIXEL_SMOKE '+JSON.stringify({source:item.ref,blob:item.blob_sha,viewport:width+'x'+height,dpr,...state,errors:errors.length,external:external.length}));
 }finally{await page.close();}
}
(async()=>{const browser=await chromium.launch({headless:true});try{await one(browser,1440,900,1);await one(browser,390,844,2)}finally{await browser.close()}console.log('PASS: new exact-source fog artwork rendered nonblank multi-value Canvas pixels in real desktop/mobile Chromium with live controls and no JS errors');})()
.catch(e=>{console.error(e);process.exitCode=1})
.finally(()=>fs.rmSync(tmp,{recursive:true,force:true}));
