_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"5SxS":function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var r=e("rePB"),o=e("Ff2n"),s=(e("q1tI"),e("7ljp")),c=e("3wrV");function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){Object(r.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var p={};function u(t){var n=t.components,e=Object(o.a)(t,["components"]);return Object(s.a)("wrapper",i(i(i({},p),e),{},{components:n,mdxType:"MDXLayout"}),Object(s.a)("h1",null,"fetch\u8bf7\u6c42\u5c01\u88c5"),Object(s.a)(c.a,{lan:"ts",code:"\nexport default async function smartfetch<R, M = unknown>(service: string, method: 'get' | 'put' | 'post' | 'delete', msg?: M) {\n\tconst { url, body } = (() => {\n\t\tif (method === 'get') {\n\t\t\tconst [base, search] = service.split('?');\n\t\t\tconst sp = new URLSearchParams(search);\n\t\t\tif (msg && typeof msg === 'object') {\n\t\t\t\tObject.keys(msg).forEach((key) => {\n\t\t\t\t\tsp.append(key, (msg as unknown as Record<string, string>)[key]);\n\t\t\t\t});\n\t\t\t}\n\t\t\tconst s = sp.toString();\n\t\t\tif (s.length > 0) {\n\t\t\t\treturn {\n\t\t\t\t\turl: base + '?' + s\n\t\t\t\t};\n\t\t\t}\n\t\t\treturn {\n\t\t\t\turl: service\n\t\t\t};\n\t\t} else {\n\t\t\treturn {\n\t\t\t\turl: service,\n\t\t\t\tbody: JSON.stringify(msg)\n\t\t\t};\n\t\t}\n\t})();\n\tconst res = await fetch(url, {\n\t\tmethod,\n\t\tbody,\n\t\theaders: {\n\t\t\t'Content-Type': 'application/json; charset=utf-8'\n\t\t}\n\t});\n\tif (res.ok) {\n\t\tconst data = await res.json() as R;\n\t\treturn data;\n\t}\n\tthrow new Error(decodeURIComponent(res.statusText));\n}\n",mdxType:"CodeEditor"}))}u.isMDXComponent=!0},Oq7Q:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/codes/2021/04/30/1507",function(){return e("5SxS")}])}},[["Oq7Q",0,1,2,4,3,5]]]);