#!/usr/bin/env node
'use strict';
const path=require('node:path'),fs=require('node:fs'),assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url'),{chromium}=require('playwright');
const lib=path.resolve(__dirname,'..');
async function check(){
 const browser=await chromium.launch({headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1365,height:900},deviceScaleFactor:1});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.route('**/*',route=>{
   const url=route.request().url();
   if(url.startsWith('file:')||url.startsWith('data:')||url.startsWith('blob:'))return route.continue();
   return route.abort();
  });
  await page.goto(pathToFileURL(path.join(lib,'index.html')).href,{waitUntil:'domcontentloaded'});
  const number=()=>page.locator('#cards article.card').count();
  assert.equal(await number(),19,'initial 19 cards');
  await page.locator('.tab[data-kind="benchmark"]').click();assert.equal(await number(),5,'five primary benchmarks');
  await page.locator('.tab[data-kind="inspiration"]').click();assert.equal(await number(),11,'eleven artworks');
  await page.locator('.tab[data-kind="study"]').click();assert.equal(await number(),3,'three studies');
  await page.locator('#reset').click();assert.equal(await number(),19,'reset filters');
  await page.locator('#tag').selectOption('geology');
  assert.ok(await number()>0&&await number()<19,'discipline filter narrows results');
  await page.locator('#reset').click();
  await page.locator('#collection').selectOption('Tectonic Archive');
  assert.ok(await number()>0&&await number()<19,'collection filter narrows results');
  await page.locator('#reset').click();
  await page.locator('#search').fill('railway');assert.ok(await number()>0&&await number()<19,'search narrows results');
  await page.locator('#reset').click();
  await page.locator('.tab[data-kind="inspiration"]').click();
  await page.locator('#cards').scrollIntoViewIfNeeded();
  await page.waitForTimeout(250);
  const preview=path.join(lib,'captures/moodboard-preview.png');fs.mkdirSync(path.dirname(preview),{recursive:true});
  await page.screenshot({path:preview,type:'png',fullPage:false});
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);
  assert.equal(overflow,false,'no desktop horizontal overflow');
  await page.setViewportSize({width:390,height:844});
  await page.waitForTimeout(150);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,'no mobile horizontal overflow');
  assert.deepEqual(errors,[],'no client JS page errors');
  console.log('PASS: filter groups 19/5/11/3, text, discipline, collection, reset, responsive viewport and desktop preview');
 }finally{await browser.close()}
}
check().catch(e=>{console.error(e);process.exitCode=1});
