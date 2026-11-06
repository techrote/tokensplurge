#!/usr/bin/env node
'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const {execFileSync}=require('node:child_process');
const lib=path.resolve(__dirname,'..'),repo=path.resolve(lib,'../..');
const catalog=JSON.parse(fs.readFileSync(path.join(lib,'catalogue.json'),'utf8'));
const html=fs.readFileSync(path.join(lib,'index.html'),'utf8');
const m=html.match(/<script id="catalogue-data" type="application\/json">([\s\S]*?)<\/script>/);
if(!m)throw Error('Embedded moodboard catalogue missing');
const embedded=JSON.parse(m[1]);
if(JSON.stringify(embedded)!==JSON.stringify(catalog))throw Error('HTML embedded catalogue is stale');
const refs=catalog.references;
if(refs.length!==19||refs.filter(x=>x.kind==='benchmark').length!==5||refs.filter(x=>x.capture).length!==14)throw Error('Initial inventory count drift');
const pins=new Map(catalog.pinned_sources.map(x=>[x.repo,x.revision]));
const ids=new Set();
for(const x of refs){
 if(ids.has(x.id))throw Error('Duplicate ID '+x.id);ids.add(x.id);
 if(x.ref!==pins.get(x.repo)||!(/^[a-f0-9]{40}$/.test(x.ref)&&/^[a-f0-9]{40}$/.test(x.blob_sha)))throw Error('Unpinned source '+x.id);
 for(const p of ['title','design_principle','cybersand_translation','copy_boundary','source_url','path'])if(!x[p])throw Error('Missing '+p+' for '+x.id);
 if(x.repo==='techrote/tokensplurge'){
  const b=execFileSync('git',['show',x.ref+':'+x.path],{cwd:repo,maxBuffer:8*1024*1024});
  const got=crypto.createHash('sha1').update(Buffer.from('blob '+b.length+'\0')).update(b).digest('hex');
  if(got!==x.blob_sha)throw Error('Source blob mismatch '+x.id);
 }
}
const need=process.argv.includes('--require-captures'),reportPath=path.join(lib,'captures/report.json');
if(!fs.existsSync(reportPath)){
 if(need)throw Error('Browser captures not present');
 console.log('PASS: 19 exact source definitions / embedded HTML; 14 captures still pending');process.exit(0);
}
const report=JSON.parse(fs.readFileSync(reportPath,'utf8'));
if(report.pin!==pins.get('techrote/tokensplurge')||report.results?.length!==14)throw Error('Incomplete/mismatched report');
for(const e of report.results){
 const x=refs.find(x=>x.id===e.id);if(!x||!x.capture||e.status!=='captured'||e.blob_sha!==x.blob_sha||e.files?.length!==2)throw Error('Unqualified capture '+e.id);
 for(const img of e.files){
  if(!/^captures\/[a-z0-9-]+-(desktop|detail)\.png$/.test(img.path))throw Error('Invalid capture path');
  const buf=fs.readFileSync(path.join(lib,img.path));
  if(!buf.subarray(0,8).equals(Buffer.from('89504e470d0a1a0a','hex')))throw Error('Invalid PNG '+img.path);
  if(buf.length!==img.bytes||crypto.createHash('sha256').update(buf).digest('hex')!==img.sha256)throw Error('Capture hash mismatch '+img.path);
  const w=buf.readUInt32BE(16),h=buf.readUInt32BE(20);
  if(w<600||h<400)throw Error('Capture dimensions too small '+img.path);
 }
}
console.log('PASS: 19 pinned catalogue entries and 14 source-bound Chromium captures / 28 PNGs');
