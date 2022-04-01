// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";var s=t;var e=r,n=function(r){var t,e,n="";for(t=8;r>0&&t;)n=(e=r/2)===(r=s(e))?"0"+n:"1"+n,t-=1;return n};var i=function(r){var t;return t=n(r),t=e(t,8,"0")};export{i as default};
//# sourceMappingURL=index.mjs.map
