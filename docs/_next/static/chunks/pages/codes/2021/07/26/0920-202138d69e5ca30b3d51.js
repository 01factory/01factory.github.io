_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[74],{"R0k+":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/codes/2021/07/26/0920",function(){return e("c790")}])},c790:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return d}));var r=e("rePB"),o=e("Ff2n"),s=(e("q1tI"),e("7ljp")),a=e("3wrV");function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){Object(r.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var p={};function d(t){var n=t.components,e=Object(o.a)(t,["components"]);return Object(s.a)("wrapper",i(i(i({},p),e),{},{components:n,mdxType:"MDXLayout"}),Object(s.a)("h1",null,"\u6570\u636e\u7f16\u8f91\u670d\u52a1"),Object(s.a)(a.a,{lan:"ts",code:"\nimport { PageConfig } from 'next';\nimport an48 from '@mmstudio/an000048';\nimport anylogger from 'anylogger';\nimport '@mmstudio/an000042';\nimport an49 from '@mmstudio/an000049';\n\nconst logger = anylogger('pages/api/xxx/edit.api');\n\nexport type Result = {\n\tok: boolean;\n\tmessage?: string;\n};\n\nexport type Message = ITbxxx;\n\n/**\n * \u4fee\u6539xxx\n */\nconst handler = an48<Result>();\n\nhandler.put(async (req, res) => {\n\ttry {\n\t\tlogger.debug('msg body:', req.body);\n\t\tconst {id, ...d} = req.body as Message;\n\t\tif (!d.id || d.id === undefined) {\n\t\t\tres.status(200).json({\n\t\t\t\tok: false,\n\t\t\t\tmessage: '\u53c2\u6570\u4e0d\u5b8c\u6574'\n\t\t\t});\n\t\t\treturn;\n\t\t}\n\t\tconst db = an49();\n\t\tconst tb1 = db<ITbxxx>('xxx');\n\t\tconst data = await tb1.first('xxx').where({\n\t\t\txxx: d.xxx\n\t\t}).andWhereNot({\n\t\t\tid\n\t\t});\n\t\tif (data) {\n\t\t\tres.status(200).json({\n\t\t\t\tok: false,\n\t\t\t\tmessage: '\u6570\u636e\u91cd\u590d'\n\t\t\t});\n\t\t\treturn;\n\t\t}\n\t\tconst tb2 = db<ITbxxx>('xxx');\n\t\tawait tb2.update(d).where({\n\t\t\tid\n\t\t});\n\t\tres.status(200).json({ ok: true });\n\t} catch (error) {\n\t\tlogger.error(error);\n\t\tres.status(200).json({ ok: false, message: (error as Error).message });\n\t}\n});\n\nexport const config = {} as PageConfig;\n\nexport default handler;\n",mdxType:"CodeEditor"}))}d.isMDXComponent=!0}},[["R0k+",0,1,2,4,3,5]]]);