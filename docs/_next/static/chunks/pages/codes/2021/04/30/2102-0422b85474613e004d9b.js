_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{mem1:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return u}));var r=t("rePB"),o=t("Ff2n"),i=(t("q1tI"),t("7ljp")),s=t("3wrV");function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){Object(r.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var c={};function u(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(i.a)("wrapper",a(a(a({},c),t),{},{components:e,mdxType:"MDXLayout"}),Object(i.a)("h1",null,"\u4e0a\u4f20\u6587\u4ef6"),Object(i.a)(s.a,{lan:"ts",code:"\nimport nextConnect from 'next-connect';\nimport { NextApiRequest, NextApiResponse, PageConfig } from 'next';\nimport anylogger from 'anylogger';\nimport '@mmstudio/an000042';\nimport an45 from '@mmstudio/an000045';\n\nconst logger = anylogger('pages/api/upload');\n\nexport type Result = {\n\tok: true;\n\tfileid: string;\n} | {\n\tok: false;\n\tmessage: string;\n};\n\n/**\n * \u4e0a\u4f20\u6587\u4ef6\n */\nconst handler = nextConnect<NextApiRequest, NextApiResponse<Result>>();\n\nhandler.put(async (req, res) => {\n\tlogger.debug('upload file');\n\t// \u89e3\u6790\u5e76\u4fdd\u5b58\u6587\u4ef6\n\tconst [file] = await an45(req);\n\tres.status(200).json({ ok: true, fileid: file.id });\n});\n\nexport const config = {\n\tapi: {\n\t\tbodyParser: false\n\t}\n} as PageConfig;\n\nexport default handler;\n",mdxType:"CodeEditor"}))}u.isMDXComponent=!0},sQmi:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/codes/2021/04/30/2102",function(){return t("mem1")}])}},[["sQmi",0,1,2,3,4,5]]]);