_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[90],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("q1tI"),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),f=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=f(n),b=r,y=s["".concat(a,".").concat(b)]||s[b]||l[b]||c;return n?o.a.createElement(y,i(i({ref:t},p),{},{components:n})):o.a.createElement(y,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var c=n.length,a=new Array(c);a[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"===typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,c,a){try{var i=e[c](a),u=i.value}catch(p){return void n(p)}i.done?t(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,c){var a=e.apply(t,n);function i(e){r(a,o,c,i,u,"next",e)}function u(e){r(a,o,c,i,u,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return o}))},VpYW:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("rePB"),o=n("Ff2n"),c=n("q1tI"),a=n("7ljp"),i=n("XLUx");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",p(p(p({},f),n),{},{components:t,mdxType:"MDXLayout"}),Object(a.a)("h1",null,"web\u9875\u9762\u521d\u59cb\u5316\u4e8b\u4ef6"),Object(a.a)("h2",null,"\u6dfb\u52a0\u521d\u59cb\u5316\u4e8b\u4ef6"),Object(a.a)("p",null,"\u4f7f\u7528react\u94a9\u5b50\u51fd\u6570",Object(a.a)("inlineCode",{parentName:"p"},"useEffect"),"\uff0c\u6ce8\u610f\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e0d\u80fd\u4e0d\u4f20\uff0c\u5426\u5219\u4f1a\u5faa\u73af\u4e0d\u65ad\u6267\u884c\u3002"),Object(a.a)(i.a,{scope:{useState:c.useState,useEffect:c.useEffect},code:"\n()=>{\n\tconst [text, setText] = useState('loading...');\n\tuseEffect(() => {\n\t\tsetTimeout(()=>{\n\t\t\tsetText('loaded successfully!!!');\n\t\t}, 3000);\n\t}, []);\n\treturn <>{text}</>;\n}\n",mdxType:"CodeEditor"}))}l.isMDXComponent=!0},nHmF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return new Promise(((t,n)=>{const r=document.createElement("textarea");r.setAttribute("style",JSON.stringify({background:"transparent",border:"none",boxShadow:"none",height:"2em",left:0,outline:"none",padding:0,position:"fixed",top:0,width:"2em"})),r.value=e,document.body.appendChild(r),r.select();try{document.execCommand("copy")?t():n(new Error("copy command unavailable"))}finally{document.body.removeChild(r)}}))}},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"===typeof window&&(t=window)}e.exports=t}},n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={exports:{}},c=!0;try{e[t](o,o.exports,r),c=!1}finally{c&&delete n[t]}return o.exports}return r.ab=t+"/",r(149)}()}).call(this,"/")},ozpM:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documents/2021/03/041315",function(){return n("VpYW")}])},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["ozpM",0,1,8,2,4,3,6,7]]]);