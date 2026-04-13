"use strict";var u=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var o=u(function(E,m){
var N=require('@stdlib/strided-base-nullary/dist'),l=require('@stdlib/random-base-minstd/dist');function O(a,r,n,i){var e;return arguments.length>3?e=l.factory(i):e=l,N([r],[a],[n],e),r}m.exports=O
});var c=u(function(F,y){
var R=require('@stdlib/strided-base-nullary/dist').ndarray,v=require('@stdlib/random-base-minstd/dist');function b(a,r,n,i,e){var t;return arguments.length>4?t=v.factory(e):t=v,R([r],[a],[n],[i],t),r}y.exports=b
});var g=u(function(G,f){
var j=require('@stdlib/strided-base-nullary/dist'),q=require('@stdlib/random-base-minstd/dist');function k(a,r,n,i){var e;return arguments.length>3?e=q.factory(i):e=q,j([r],[a],[n],e.normalized),r}f.exports=k
});var z=u(function(H,x){
var w=require('@stdlib/strided-base-nullary/dist').ndarray,p=require('@stdlib/random-base-minstd/dist');function A(a,r,n,i,e){var t;return arguments.length>4?t=p.factory(e):t=p,w([r],[a],[n],[i],t.normalized),r}x.exports=A
});var s=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=o(),B=c(),h=g(),C=z();s(d,"ndarray",B);s(d,"normalized",h);s(h,"ndarray",C);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
