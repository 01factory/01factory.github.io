_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{BbAo:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var r=n("rePB"),a=n("Ff2n"),o=(n("q1tI"),n("7ljp")),l=n("3wrV");n("gvk1");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={};function s(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(o.a)("wrapper",i(i(i({},u),n),{},{components:e,mdxType:"MDXLayout"}),Object(o.a)("h1",null,"\u89e3\u6790Excel"),Object(o.a)("p",null,"\u6839\u636e\u4e0a\u4f20\u7684Excel\u6587\u4ef6\u89e3\u6790\u91cc\u9762\u7684\u6570\u636e\u3002"),Object(o.a)("h2",null,"\u5b89\u88c5\u4f9d\u8d56"),Object(o.a)(l.a,{lan:"shell",code:"\nyarn add @mmstudio/an000024 @mmstudio/an000041\n",mdxType:"CodeEditor"}),Object(o.a)("h2",null,"\u4fee\u6539\u9ed8\u8ba4\u914d\u7f6e"),Object(o.a)(l.a,{lan:"ts",code:"\nexport const config = {\n\tapi: {\n\t\tbodyParser: false\n\t}\n} as PageConfig;\n",mdxType:"CodeEditor"}),Object(o.a)("h2",null,"\u5bfc\u5165\u6a21\u5757"),Object(o.a)(l.a,{lan:"ts",code:"\nimport { promises as fs } from 'fs';\nimport an41 from '@mmstudio/an000041';\nimport an24 from '@mmstudio/an000024';\n",mdxType:"CodeEditor"}),Object(o.a)("h2",null,"\u670d\u52a1\u4ee3\u7801"),Object(o.a)(l.a,{lan:"ts",code:"\n\t// \u89e3\u6790\u6587\u4ef6\n\tconst [file] = await an41(req);\n\tconst content = await fs.readFile(file.path);\n\tawait fs.rm(file.path);\n\t/**\n\t * \u6587\u4ef6\u5185\u5bb9json\n\t */\n\tconst data = (() => {\n\t\tinterface IData {\n\t\t}\n\t\tconst p1 = content;\t// \u6587\u4ef6\u5185\u5bb9,Buffer\n\t\treturn an24<IData>(p1);\n\t})();\n\tconsole.log(data);\n",mdxType:"CodeEditor"}),Object(o.a)("h2",null,"\u65b9\u6cd5\u4e8c:"),Object(o.a)(l.a,{lan:"ts",code:"\nimport { Workbook } from 'exceljs';\n\nconst wb = new Workbook();\nawait wb.xlsx.readFile('filepath');\nconst ws = wb.getWorksheet(0);\nfor (let idx = 1; idx <= ws.actualColumnCount; idx++) {\n\tconst column = ws.getColumn(idx);\n}\nfor (let idx = 1; idx <= ws.actualRowCount; idx++) {\n\tconst row = ws.getRow(idx);\n}\n",mdxType:"CodeEditor"}),Object(o.a)("h2",null,"\u83b7\u53d6\u5355\u5143\u683c\u6587\u672c"),Object(o.a)(l.a,{lan:"ts",code:"\nfunction getcellvaluestr(cell: Cell) {\n\tconst value = cell.value;\n\tswitch (cell.type) {\n\t\tcase ValueType.Boolean:\n\t\tcase ValueType.Date:\n\t\tcase ValueType.Number:\n\t\t\treturn value?.toString().trim();\n\t\tcase ValueType.Error:\n\t\t\treturn (value as CellErrorValue).error as string;\n\t\tcase ValueType.Formula:\n\t\t\treturn ((value as CellFormulaValue).result as string).trim();\n\t\tcase ValueType.Hyperlink:\n\t\t\treturn (value as CellHyperlinkValue).text.toString().trim();\n\t\tcase ValueType.Null:\n\t\t\treturn '';\n\t\tcase ValueType.RichText:\n\t\t\treturn (value as CellRichTextValue).richText.map((v) => {\n\t\t\t\treturn v.text.toString();\n\t\t\t}).join('').trim();\n\t\tcase ValueType.Merge:\n\t\tcase ValueType.SharedString:\n\t\tcase ValueType.String:\n\t\tdefault:\n\t\t\treturn value?.toString().trim();\n\t}\n}\n",mdxType:"CodeEditor"}))}s.isMDXComponent=!0},gvk1:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("nKUr");function a(t){var e=t.id,n="//player.bilibili.com/player.html?bvid=".concat(e,"&page=1");return Object(r.jsx)("iframe",{frameBorder:"0",src:n,allowFullScreen:!0,scrolling:"no",height:"375",width:"500"})}},rp0Y:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/codes/2021/04/22/1838",function(){return n("BbAo")}])}},[["rp0Y",0,1,2,4,3,5]]]);