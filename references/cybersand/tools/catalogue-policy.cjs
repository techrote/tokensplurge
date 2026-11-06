'use strict';
const assert=require('node:assert/strict');
const hash40=/^[0-9a-f]{40}$/;
const curation01=require('./curation-01-pins.json');
const rel=/^(editions|folios|hybrids|nocturnes|tapestries|theatres|salvage|lineage|environments)\/[a-zA-Z0-9._/-]+$/;
function safePath(p){return typeof p==='string'&&rel.test(p)&&!p.split('/').some(x=>x===''||x==='.'||x==='..');}
function assertCatalogue(c,baseline){
 assert.equal(c.schema_version,2,'catalogue schema v2');
 assert.ok(Array.isArray(c.references)&&c.references.length>=baseline.entries.length,'inventory under baseline');
 assert.equal(c.references.filter(x=>x.kind==='benchmark').length,5,'five original primary benchmarks');
 const ids=new Set();
 for(const x of c.references){
  assert.ok(!ids.has(x.id),'duplicate reference ID: '+x.id);ids.add(x.id);
  assert.match(x.ref||'',hash40,'source commit: '+x.id);
  assert.match(x.blob_sha||'',hash40,'source blob: '+x.id);
  for(const p of ['title','design_principle','cybersand_translation','copy_boundary','source_url','path'])assert.ok(x[p],x.id+': missing '+p);
  assert.equal(x.source_url,'https://github.com/'+x.repo+'/blob/'+x.ref+'/'+x.path,'moving/wrong source URL '+x.id);
  if(x.repo==='techrote/tokensplurge'){
   assert.ok(safePath(x.path),'source path not allowed '+x.id);
   assert.ok(x.capture,'missing capture '+x.id);
   assert.ok(['pending','captured'].includes(x.capture.status),'unknown capture state '+x.id);
   assert.equal(x.capture.desktop,'captures/'+x.id+'-desktop.png','desktop path '+x.id);
   assert.equal(x.capture.detail,'captures/'+x.id+'-detail.png','detail path '+x.id);
  }else{
   assert.equal(x.kind,'benchmark','unexpected external source');
   assert.equal(x.repo,'techrote/cybersand','benchmark repo');
  }
 }
 baseline.entries.forEach((b,i)=>{
  const x=c.references[i];assert.equal(x?.id,b.id,'old references must retain original order');
  for(const p of ['repo','kind','ref','path','blob_sha'])assert.equal(x[p],b[p],b.id+' historic '+p+' changed');
  if(b.capture_files)assert.deepEqual([x.capture?.desktop,x.capture?.detail],b.capture_files,b.id+' historic image changed');
  if(b.benchmark_image_url)assert.equal(x.image?.url,b.benchmark_image_url,b.id+' benchmark image changed');
 });
 for(const b of curation01.entries){
  const x=c.references.find(e=>e.id===b.id);
  assert.ok(x,'previous curated reference removed: '+b.id);
  for(const p of ['repo','kind','ref','path','blob_sha'])assert.equal(x[p],b[p],b.id+' prior-curation identity changed');
  assert.deepEqual([x.capture?.desktop,x.capture?.detail],b.capture_files,b.id+' prior-curation PNG filenames changed');
 }
 return {total:c.references.length,capturable:c.references.filter(x=>x.capture).length};
}
function assertCaptureRecord(x,e){
 assert.ok(x&&x.capture&&e,'unregistered capture');
 for(const p of ['id','ref','path','blob_sha'])assert.equal(e[p],x[p],x.id+': capture '+p+' mismatched');
 assert.equal(e.status,'captured','not captured '+x.id);
 assert.equal(e.files?.length,2,'missing images '+x.id);
 assert.deepEqual(e.files.map(f=>f.path),[x.capture.desktop,x.capture.detail],x.id+': image paths wrong');
}
module.exports={assertCatalogue,assertCaptureRecord,safePath};
