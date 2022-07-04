// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,a=e.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,l){var c,f,g,m;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=l.value,t.__proto__=c):t[r]=l.value),g="get"in l,m="set"in l,f&&(g||m))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return g&&o&&o.call(t,r,l.get),m&&i&&i.call(t,r,l.set),t};function c(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function f(t){return"number"==typeof t}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return g&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var s="function"==typeof Symbol?Symbol.toStringTag:"";var b=m()?function(t){var r,e,n,o,i;if(null==t)return p.call(t);e=t[s],i=s,r=null!=(o=t)&&v.call(o,i);try{t[s]=void 0}catch(r){return p.call(t)}return n=p.call(t),r?t[s]=e:delete t[s],n}:function(t){return p.call(t)},y=Number,d=y.prototype.toString;var h=m();function _(t){return"object"==typeof t&&(t instanceof y||(h?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===b(t)))}function w(t){return f(t)||_(t)}c(w,"isPrimitive",f),c(w,"isObject",_);var j=Number.POSITIVE_INFINITY,S=y.NEGATIVE_INFINITY,O=Math.floor;function T(t){return t<j&&t>S&&O(r=t)===r;var r}function E(t){return f(t)&&T(t)}function P(t){return _(t)&&T(t.valueOf())}function I(t){return E(t)||P(t)}function V(t){return E(t)&&t>=0}function N(t){return P(t)&&t.valueOf()>=0}function x(t){return V(t)||N(t)}function F(t){return"string"==typeof t}c(I,"isPrimitive",E),c(I,"isObject",P),c(x,"isPrimitive",V),c(x,"isObject",N);var A=String.prototype.valueOf;var G=m();function R(t){return"object"==typeof t&&(t instanceof String||(G?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object String]"===b(t)))}function k(t){return F(t)||R(t)}c(k,"isPrimitive",F),c(k,"isObject",R);function M(t,r){var e,n;if(!F(t))throw new TypeError("invalid argument. First argument must be a string. Value: `"+t+"`.");if(!V(r))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+r+"`.");if(0===t.length||0===r)return"";if(t.length*r>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(e="",n=r;1==(1&n)&&(e+=t),0!==(n>>>=1);)t+=t;return e}var Y=Math.ceil;function C(t){var r;return r=function(t){var r,e,n="";for(r=8;t>0&&r;)n=(e=t/2)===(t=O(e))?"0"+n:"1"+n,r-=1;return n}(t),r=function(t,r,e){var n,o;if(!F(t))throw new TypeError("invalid argument. First argument must be a string. Value: `"+t+"`.");if(!V(r))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+r+"`.");if(arguments.length>2){if(!F(o=e))throw new TypeError("invalid argument. Third argument must be a string. Value: `"+o+"`.");if(0===o.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else o=" ";if(r>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");return(n=(r-t.length)/o.length)<=0?t:M(o,n=Y(n))+t}(r,8,"0"),r}export{C as default};
//# sourceMappingURL=mod.js.map
