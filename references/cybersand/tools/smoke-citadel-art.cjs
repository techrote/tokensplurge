#!/usr/bin/env node
'use strict';
// Exact-source real Chromium pixel + interaction smoke for candidate #46.
// Never used to assert aesthetic superiority or native Godot material/physics.
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const {execFileSync}=require('node:child_process'),{pathToFileURL}=require('node:url'),{chromium}=require('playwright');
const root=path.resolve(__dirname,'../../..');
const cat=JSON.parse(fs.readFileSync(path.join(__dirname,'..','catalogue.json'),'utf8'));
const item=cat.references.find(x=>x.id==='breathing-citadel');
assert.ok(item&&item.capture.status==='captured','source-pinned new Chromium captures still pending');
const bytes=execFileSync('git',['show',item.ref+':'+item.path],{cwd:root,maxBuffer:8*1024*1024});
const blob=crypto.createHash('sha1').update(Buffer.from('blob '+bytes.length+'\0')).update(bytes).digest('hex');
assert.equal(blob,item.blob_sha,'selected readable source Git blob mismatch');
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'cybersand-curation-vent-')),html=path.join(tmp,'art.html');
fs.writeFileSync(html,bytes);
async function check(browser,width,height,dpr){
 const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:dpr,acceptDownloads:true});
 const errors=[],external=[];
 page.on('pageerror',e=>errors.push(String(e.message||e)));
 await page.route('**/*',route=>{const u=route.request().url();if(/^(file|data|blob):/.test(u))return route.continue();external.push(u);return route.abort()});
 try {
  await page.goto(pathToFileURL(html).href,{waitUntil:'domcontentloaded',timeout:30000});
  await page.waitForFunction(()=>!!window.__artTest && document.getElementById('art')?.width>=300,{timeout:20000});
  await page.waitForTimeout(450);
  const before=await page.evaluate(()=>{
   const c=document.getElementById('art'),g=c.getContext('2d'),colors=new Set();let lo=255,hi=0;
   for(let y=1;y<=9;y++)for(let x=1;x<=14;x++){const p=g.getImageData(Math.floor(c.width*x/15),Math.floor(c.height*y/10),1,1).data;colors.add([...p].slice(0,3).join(','));const l=p[0]*.2126+p[1]*.7152+p[2]*.0722;lo=Math.min(lo,l);hi=Math.max(hi,l)}
   return {dimensions:[c.width,c.height],colors:colors.size,lo:Math.round(lo),hi:Math.round(hi),png:c.toDataURL('image/png').length,settings:window.__artTest.settings,view:window.__artTest.view,overflow:document.documentElement.scrollWidth>innerWidth+1};
  });
  assert.ok(before.colors>=15,'not enough Canvas colour diversity');
  assert.ok(before.hi-before.lo>=45,'insufficient Canvas luminance variation');
  assert.ok(before.png>25000,'not a real nonblank Canvas image');
  assert.equal(before.overflow,false,'horizontal overflow');
  await page.locator('#moisture').evaluate(e=>{e.value='77';e.dispatchEvent(new Event('input',{bubbles:true}))});
  await page.locator('#wind').evaluate(e=>{e.value='23';e.dispatchEvent(new Event('input',{bubbles:true}))});
  assert.deepEqual(await page.evaluate(()=>[window.__artTest.settings.moisture,window.__artTest.settings.wind]),[77,23],'controls did not change model state');
  await page.locator('#light').click();
  assert.equal(await page.evaluate(()=>window.__artTest.settings.night),true,'night control ineffective');
  await page.locator('#pause').click();
  assert.equal(await page.evaluate(()=>window.__artTest.playing),false,'pause control ineffective');
  await page.locator('#fit').click();
  assert.equal(await page.evaluate(()=>window.__artTest.view.z),1,'fit control ineffective');
  const downloadPromise=page.waitForEvent('download',{timeout:15000});await page.locator('#export').click();
  const download=await downloadPromise;const dest=path.join(tmp,'export-'+width+'.png');await download.saveAs(dest);
  const png=fs.readFileSync(dest);assert.ok(png.length>25000&&png.subarray(0,8).equals(Buffer.from('89504e470d0a1a0a','hex')),'real PNG download invalid');
  assert.deepEqual(external,[],'unexpected network assets');assert.deepEqual(errors,[],'browser JavaScript exceptions');
  console.log('CITADEL_CHROMIUM_PIXEL_SMOKE '+JSON.stringify({source:item.ref,blob:item.blob_sha,viewport:width+'x'+height,dpr,...before,exportBytes:png.length,night:true,moisture:77,wind:23,paused:true,errors:0,external:0}));
 }finally{await page.close()}
}
(async()=>{const browser=await chromium.launch({headless:true});try{await check(browser,1440,900,1);await check(browser,390,844,2)}finally{await browser.close()}console.log('PASS: genuine original-source Chromium Canvas frames/interactive controls/PNG exports desktop and mobile')})()
.catch(e=>{console.error(e);process.exitCode=1})
.finally(()=>fs.rmSync(tmp,{recursive:true,force:true}));
