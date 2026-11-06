#!/usr/bin/env node
'use strict';
// Source-pinned, genuine Chromium interaction qualification for the newly curated
// Lantern Ossuary. This is concept-art/browser evidence, NOT CyberSand Godot proof.
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const {execFileSync}=require('node:child_process');
const {pathToFileURL}=require('node:url');
const {chromium}=require('playwright');
const lib=path.resolve(__dirname,'..'),repo=path.resolve(lib,'../..');
const c=JSON.parse(fs.readFileSync(path.join(lib,'catalogue.json'),'utf8'));
const item=c.references.find(x=>x.id==='lantern-ossuary');
assert.ok(item,'Lantern Ossuary card missing');
const content=execFileSync('git',['show',item.ref+':'+item.path],{cwd:repo,maxBuffer:4*1024*1024});
assert.equal(crypto.createHash('sha1').update(Buffer.from('blob '+content.length+'\0')).update(content).digest('hex'),item.blob_sha,'exact source blob');
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'ts-curated-art-smoke-'));
const source=path.join(temp,'lantern-ossuary.html');
fs.writeFileSync(source,content);
const hex=b=>b.subarray(0,8).toString('hex');
async function one(browser,width,height,dpr){
 const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:dpr,acceptDownloads:true});
 const errors=[];page.on('pageerror',e=>errors.push(String(e.message||e)));
 try{
  await page.route('**/*',r=>{const u=r.request().url();return /^(file|data|blob):/.test(u)?r.continue():r.abort()});
  await page.goto(pathToFileURL(source).href,{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>{const c=document.querySelector('#view');return c?.width>0&&c?.height>0&&c.getContext('2d')});
  await page.waitForTimeout(220);
  const measure=()=>page.evaluate(()=>{
   const canvas=document.querySelector('#view'),g=canvas.getContext('2d');
   const colors=new Set();let bright=0;
   for(let j=1;j<=8;j++)for(let i=1;i<=12;i++){
    const x=Math.floor(canvas.width*i/13),y=Math.floor(canvas.height*j/9);
    const p=g.getImageData(x,y,1,1).data;
    colors.add(p[0]+','+p[1]+','+p[2]);
    if(p[0]+p[1]+p[2]>150)bright++;
   }
   return {colors:colors.size,bright,bytes:canvas.toDataURL('image/png').length};
  });
  const first=await measure();
  assert.ok(first.colors>=10,'rendered canvas lacks compositional colour variation');
  assert.ok(first.bright>=2,'rendered frame lacks light/dark hierarchy');
  const input=page.locator('#tide');await input.fill('87');
  assert.equal(await page.locator('#level').textContent(),'87%','memory tide control');
  await page.locator('#light').click();
  assert.equal(await page.locator('#light').textContent(),'SNOW / STORM');
  await page.locator('#pause').click();
  assert.equal(await page.locator('#pause').textContent(),'STILL / RESUME');
  await page.waitForTimeout(100); // permit any already-queued animation callback to finish
  const frozen=await page.locator('#view').evaluate(x=>x.toDataURL('image/png'));
  await page.waitForTimeout(180);
  assert.equal(await page.locator('#view').evaluate(x=>x.toDataURL('image/png')),frozen,'pause freezes actual canvas frame');
  await page.locator('#pause').click();await page.waitForTimeout(170);
  assert.notEqual(await page.locator('#view').evaluate(x=>x.toDataURL('image/png')),frozen,'resumed canvas has actual motion');
  await page.locator('#view').click({position:{x:Math.floor(width/2),y:Math.floor(height/2)}});
  const downloadPromise=page.waitForEvent('download');
  await page.locator('#export').click();
  const dl=await downloadPromise;
  const file=path.join(temp,'export-'+width+'x'+height+'.png');
  await dl.saveAs(file);
  const bytes=fs.readFileSync(file);
  assert.equal(hex(bytes),'89504e470d0a1a0a','actual Canvas PNG download');
  assert.ok(bytes.length>50000,'export likely blank');
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);
  assert.equal(overflow,false,'horizontal overflow');
  assert.deepEqual(errors,[],'browser JavaScript exceptions');
  console.log(JSON.stringify({size:width+'x'+height,dpr,source_sha:item.ref,blob_sha:item.blob_sha,diverse_colors:first.colors,bright_samples:first.bright,export_bytes:bytes.length,export_width:bytes.readUInt32BE(16),export_height:bytes.readUInt32BE(20),controls:'pass',paused_frame:'stable',resumed_frame:'changed',overflow:false,page_errors:0}));
 }finally{await page.close()}
}
(async()=>{
 const browser=await chromium.launch({headless:true});
 try{await one(browser,1440,900,1);await one(browser,390,844,2)}
 finally{await browser.close()}
 console.log('PASS: exact-blob source, real desktop/mobile canvas pixels, controls, pause/resume, download and no JS exceptions');
})().catch(e=>{console.error(e);process.exitCode=1}).finally(()=>fs.rmSync(temp,{recursive:true,force:true}));
