_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[45],{"2W69":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/codes/2021/05/01/1545",function(){return n("x55M")}])},x55M:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var r=n("rePB"),o=n("Ff2n"),s=(n("q1tI"),n("7ljp")),c=n("3wrV");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={};function p(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(s.a)("wrapper",i(i(i({},u),n),{},{components:e,mdxType:"MDXLayout"}),Object(s.a)("h1",null,"\u53d1\u8d77\u8bf7\u6c42"),Object(s.a)(c.a,{lan:"ts",code:"\nimport { getStorageSync, request, showToast } from '@tarojs/taro';\n\nconst ish5 = process.env.TARO_ENV === 'h5';\t// h5 or weapp\n\nconst server = 'http://127.0.0.1:3000';\nconst baseUrl = `${server}/api/wx`;\n\nfunction gettoken() {\n\ttry {\n\t\treturn getStorageSync('token');\n\t} catch (error) {\n\t\treturn ''\n\t}\n}\n\nexport default function send_msg<T>(service: string, msg: unknown) {\n\tconst data = JSON.stringify(msg);\n\tconst url = `${baseUrl}/${service}`;\n\tconst cookie = ish5 ? {} : { cookie: ('token=' + gettoken()) };\t// h5\u4f1a\u81ea\u52a8\u5e26\u4e0acookie,\u65e0\u987b\u7279\u6b8a\u5904\u7406\n\treturn new Promise<T>((resolve, reject) => {\n\t\trequest({\n\t\t\tmethod: 'POST',\n\t\t\tdata,\n\t\t\tdataType: 'json',\n\t\t\tcredentials: 'include',\n\t\t\turl,\n\t\t\theader: {\n\t\t\t\t...cookie,\n\t\t\t\t'Content-Type': 'application/json;charset=UTF-8'\n\t\t\t},\n\t\t\tsuccess(res) {\n\t\t\t\tif (res.statusCode > 0 && res.statusCode < 400) {\n\t\t\t\t\tresolve(res.data as T);\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\treject();\n\t\t\t\treturn showToast({\n\t\t\t\t\ttitle: '\u5931\u8d25:status' + res.statusCode + ',data' + res.data\n\t\t\t\t});\n\t\t\t},\n\t\t\tfail(err) {\n\t\t\t\tshowToast({\n\t\t\t\t\ttitle: '\u5931\u8d25:' + err.errMsg\n\t\t\t\t});\n\t\t\t\treject(err);\n\t\t\t}\n\t\t})\n\t});\n}\n",mdxType:"CodeEditor"}))}p.isMDXComponent=!0}},[["2W69",0,1,2,4,3,5]]]);