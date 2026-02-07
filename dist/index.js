"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=a(function(y,v){
var o=require('@stdlib/math-base-special-floor/dist'),c=8;function f(e){var r="",i,t;for(i=c;e>0&&i;)t=e/2,e=o(t),t===e?r="0"+r:r="1"+r,i-=1;return r}v.exports=f
});var n=a(function(I,u){
var l=require('@stdlib/string-left-pad/dist'),p=s(),q=8;function d(e){var r;return r=p(e),r=l(r,q,"0"),r}u.exports=d
});var B=n();module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
