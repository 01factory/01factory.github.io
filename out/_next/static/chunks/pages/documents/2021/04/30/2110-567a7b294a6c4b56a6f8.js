_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[133],{L0Qj:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return u}));var o=e("rePB"),r=e("Ff2n"),s=(e("q1tI"),e("7ljp")),i=e("3wrV");function c(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){Object(o.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var p={};function u(n){var t=n.components,e=Object(r.a)(n,["components"]);return Object(s.a)("wrapper",a(a(a({},p),e),{},{components:t,mdxType:"MDXLayout"}),Object(s.a)("h1",null,"\u767b\u9646\u670d\u52a1"),Object(s.a)(i.a,{lan:"ts",code:"\nimport { createHash } from 'crypto';\nimport nextConnect from 'next-connect';\nimport { NextApiRequest, NextApiResponse, PageConfig } from 'next';\nimport anylogger from 'anylogger';\nimport '@mmstudio/an000042';\nimport an49 from '@mmstudio/an000049';\nimport { sign } from 'jsonwebtoken';\nimport mmconf from '@mmstudio/config';\nimport an47 from '@mmstudio/an000047';\n\nconst logger = anylogger('pages/api/login');\n\nconst session = mmconf.session as {\n\tsecret: string;\n\texpiresIn: string | number;\n};\n\nexport type Result = boolean\n\nexport type Message = {\n\tuser: string;\n\tpsw: string;\n}\n\n/**\n * \u767b\u9646\u670d\u52a1\n */\nconst handler = nextConnect<NextApiRequest, NextApiResponse<Result>>();\n\nhandler.post(async (req, res) => {\n\tlogger.debug('msg body:', req.body);\n\tconst { user, psw } = req.body as Message;\n\tconst db = an49();\n\tconst tb1 = db<ITbuser>('user');\n\tconst val = md5(psw);\n\tconst u = await tb1.first('userid', 'role', 'name', 'phone', 'email').where({\n\t\tuserid: user,\n\t\tpsw: val\n\t});\n\tif (!u) {\n\t\tconst msg = '\u5e10\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef';\n\t\tres.statusMessage = encodeURIComponent(msg);\n\t\tres.status(500).end(msg);\n\t\treturn;\n\t}\n\n\tconst token = sign(u, session.secret, { expiresIn: session.expiresIn, algorithm: 'HS256' });\n\tlogger.debug('userlogin success', u, 'token', token);\n\tan47(res, 'token', token, { sameSite: 'lax', httpOnly: true });\n\t(() => {\n\t\tconst key = '01factory';\n\t\tconst options = {};\n\t\treturn an47(res, key, token, options);\n\t})();\n\tres.status(200).json(true);\n});\n\nexport const config = {} as PageConfig;\n\nexport default handler;\n\nfunction md5(value: string) {\n\treturn createHash('md5').update(value).digest('hex');\n}\n",mdxType:"CodeEditor"}))}u.isMDXComponent=!0},R0hk:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documents/2021/04/30/2110",function(){return e("L0Qj")}])}},[["R0hk",0,1,2,3,4,5]]]);