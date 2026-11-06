#!/usr/bin/env node
'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const {execFileSync}=require('node:child_process'),{assertCatalogue,assertCaptureRecord}=require('./catalogue-policy.cjs');
const lib=path.resolve(__dirname,'..'),repo=path.resolve(lib,'../..');
const c=JSON.parse(fs.readFileSync(path.join(lib,'catalogue.json'),'utf8'));
const baseline=JSON.parse(fs.readFileSync(path.join(__dirname,'initial-pins.json'),'utf8'));
const {total,capturable}=assertCatalogue(c,baseline);
const html=fs.readFileSync(path.join(lib,'index.html'),'utf8');
const m=html.match(/<script id="catalogue-data" type="application\/json">([\s\S]*?)<\/script>/);
assert.ok(m,'HTML catalogue missing');
assert.deepEqual(JSON.parse(m[1]),c,'embedded catalogue diverges');
for(const x of c.references.filter(x=>x.repo==='techrote/tokensplurge')){
 const b=execFileSync('git',['show',x.ref+':'+x.path],{cwd:repo,maxBuffer:12*1024*1024});
 const got=crypto.createHash('sha1').update(Buffer.from('blob '+b.length+'\0')).update(b).digest('hex');
 assert.equal(got,x.blob_sha,x.id+' pinned Git blob mismatch');
}
const rp=path.join(lib,'captures/report.json');
const report=fs.existsSync(rp)?JSON.parse(fs.readFileSync(rp,'utf8')):{results:[]};
const recorded=new Map();
for(const e of report.results||[]){
 assert.ok(!recorded.has(e.id),'duplicate capture '+e.id);
 assertCaptureRecord(c.references.find(x=>x.id===e.id),e);
 recorded.set(e.id,e);
}
let ok=0,pending=0;
for(const x of c.references.filter(x=>x.capture)){
 const e=recorded.get(x.id);
 if(!e){assert.equal(x.capture.status,'pending','claimed without PNG: '+x.id);pending++;continue;}
 assert.equal(x.capture.status,'captured','pending despite published PNG: '+x.id);
 for(const img of e.files){
  assert.ok(/^captures\/[a-z0-9-]+-(desktop|detail)\.png$/.test(img.path),'invalid image path');
  const buf=fs.readFileSync(path.join(lib,img.path));
  assert.ok(buf.subarray(0,8).equals(Buffer.from('89504e470d0a1a0a','hex')),'bad PNG '+img.path);
  assert.equal(buf.length,img.bytes,'PNG length '+img.path);
  assert.equal(crypto.createHash('sha256').update(buf).digest('hex'),img.sha256,'PNG SHA-256 '+img.path);
  assert.ok(buf.readUInt32BE(16)>=600&&buf.readUInt32BE(20)>=400,'dimensions '+img.path);
 }
 ok++;
}
if(process.argv.includes('--require-captures'))assert.equal(pending,0,'pending new captures');
console.log('PASS: '+total+' source-pinned refs, '+capturable+' browser items, '+ok+' verified, '+pending+' pending; five benchmark cards unchanged');
