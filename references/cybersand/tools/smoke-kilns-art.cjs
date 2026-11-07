#!/usr/bin/env node
'use strict';
// New reference #48: exact-Git-source real Chromium Canvas/controls/export smoke.
// An artwork study only; this never qualifies CyberSand native materials or moving world physics.
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const {execFileSync}=require('node:child_process'),{pathToFileURL}=require('node:url'),{chromium}=require('playwright');
const root=path.resolve(__dirname,'../../..');
const cat=JSON.parse(fs.readFileSync(path.join(__dirname,'..','catalogue.json'),'utf8'));
const item=cat.references.find(x=>x.id==='ambulant-kilns');
assert.ok(item&&item.capture.status==='captured','source-pinned kiln PNGs pending');
const bytes=execFileSync('git',['show',item.ref+':'+item.path],{cwd:root,maxBuffer:8*1024*1024});
assert.equal(crypto.createHash('sha1').update(Buffer.from('blob '+bytes.length+'\0')).update(bytes).digest('hex'),item.blob_sha,'Git source blob mismatch');
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'ts-kilns-test-')),html=path.join(tmp,'art.html');
fs.writeFileSync(html,bytes);
async function run(browser,width,height,dpr){
 const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:dpr,acceptDownloads:true});
 const errors=[],external=[];page.on('pageerror',e=>errors.push(String(e.message||e)));
 await page.route('**/*',r=>{const u=r.request().url();if(/^(file|data|blob):/.test(u))return r.continue();external.push(u);return r.abort()});
 try{
  await page.goto(pathToFileURL(html).href,{waitUntil:'domcontentloaded',timeout:30000});
  await page.waitForFunction(()=>window.__artDiagnostics&&document.querySelector('#scene')?.width>250,{timeout:15000});
  await page.waitForTimeout(450);
  const pixels=await page.evaluate(()=>{
   const c=document.querySelector('#scene'),g=c.getContext('2d'),colors=new Set();let lo=255,hi=0;
   for(let y=1;y<=10;y++)for(let x=1;x<=14;x++){
    const p=g.getImageData(Math.floor(c.width*x/15),Math.floor(c.height*y/11),1,1).data;
    colors.add([p[0],p[1],p[2]].join(','));const v=p[0]*.2126+p[1]*.7152+p[2]*.0722;lo=Math.min(lo,v);hi=Math.max(hi,v);
   }
   return {width:c.width,height:c.height,colors:colors.size,luminance:[Math.round(lo),Math.round(hi)],overflow:document.documentElement.scrollWidth>innerWidth+1};
  });
  assert.ok(pixels.colors>=18,'insufficient distinct Canvas colors');
  assert.ok(pixels.luminance[1]-pixels.luminance[0]>=40,'Canvas lacks value hierarchy');
  assert.equal(pixels.overflow,false,'horizontal overflow');
  for(const [id,n] of [['draft',81],['march',64]]){
   await page.locator('#'+id).evaluate((el,value)=>{el.value=String(value);el.dispatchEvent(new Event('input',{bubbles:true}))},n);
  }
  const controls=await page.evaluate(()=>window.__artDiagnostics());assert.equal(controls.draft,81);assert.equal(controls.march,64);
  await page.locator('#light').click();assert.equal((await page.evaluate(()=>window.__artDiagnostics())).night,true);
  await page.locator('#pause').click();assert.equal((await page.evaluate(()=>window.__artDiagnostics())).paused,true);
  const downloadPromise=page.waitForEvent('download',{timeout:15000});await page.locator('#save').click();
  const download=await downloadPromise,output=path.join(tmp,'kilns-export-'+width+'.png');await download.saveAs(output);
  const png=fs.readFileSync(output);
  assert.ok(png.length>30000&&png.subarray(0,8).equals(Buffer.from('89504e470d0a1a0a','hex')),'invalid real PNG download');
  assert.ok(png.readUInt32BE(16)>250&&png.readUInt32BE(20)>300,'PNG dimensions invalid');
  await page.locator('#reset').click();
  assert.equal((await page.evaluate(()=>window.__artDiagnostics())).pan,0,'reframe failed');
  assert.deepEqual(errors,[],'JS errors');assert.deepEqual(external,[],'unexpected network assets');
  console.log('KILNS_SOURCE_BOUND_CHROMIUM '+JSON.stringify({source:item.ref,blob:item.blob_sha,viewport:width+'x'+height,dpr,pixels,exportBytes:png.length,night:true,paused:true,draft:81,march:64,errors:0,external:0}));
 }finally{await page.close()}
}
(async()=>{const browser=await chromium.launch({headless:true});try{await run(browser,1440,900,1);await run(browser,390,844,2)}finally{await browser.close()}console.log('PASS: source-pinned genuine Chromium kiln artwork pixels, controls and PNG download')})()
.catch(e=>{console.error(e);process.exitCode=1})
.finally(()=>fs.rmSync(tmp,{recursive:true,force:true}));
