_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"5R6I":function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return i}));var t=n("rePB"),l=n("Ff2n"),c=(n("q1tI"),n("7ljp")),o=n("3wrV");function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){Object(t.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}var r={};function i(e){var a=e.components,n=Object(l.a)(e,["components"]);return Object(c.a)("wrapper",d(d(d({},r),n),{},{components:a,mdxType:"MDXLayout"}),Object(c.a)("h1",null,"Linux \u5e38\u7528\u547d\u4ee4\u53ca\u64cd\u4f5c"),Object(c.a)("h2",null,"1. \u6587\u4ef6\u64cd\u4f5c"),Object(c.a)("h3",null,"1.1. pwd \u67e5\u770b\u5f53\u524d\u5de5\u4f5c\u8def\u5f84"),Object(c.a)("p",null,"\u5f88\u591a\u547d\u4ee4\u4e0e\u5f53\u524d\u6267\u884c\u8def\u5f84\u6709\u5173\uff0c\u6240\u4ee5\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u77e5\u9053\u6211\u4eec\u5c06\u8981\u6267\u884c\u547d\u4ee4\u7684\u5f53\u524d\u5de5\u4f5c\u8def\u5f84"),Object(c.a)(o.a,{lan:"shell",code:"\npwd\n",mdxType:"CodeEditor"}),Object(c.a)("h3",null,"1.2. \u67e5\u770b\u76ee\u5f55"),Object(c.a)(o.a,{lan:"shell",code:"\nls\n# or\nls ./01factory\n",mdxType:"CodeEditor"}),Object(c.a)("h3",null,"1.3. cd(chdir) \u5207\u6362\u5230\u76ee\u5f55"),Object(c.a)("p",null,"\u5207\u6362\u5230\u5de5\u4f5c\u76ee\u5f55"),Object(c.a)(o.a,{lan:"shell",code:"\ncd\n",mdxType:"CodeEditor"}),Object(c.a)("p",null,"\u5207\u6362\u5230\u4e0a\u4e00\u7ea7\u76ee\u5f55"),Object(c.a)(o.a,{lan:"shell",code:"\ncd ..\n",mdxType:"CodeEditor"}),Object(c.a)("h3",null,"1.4. md(mkdir)\u521b\u5efa\u76ee\u5f55"),Object(c.a)("p",null,"\u5728\u5f53\u524d\u5de5\u4f5c\u8def\u5f84\u521b\u5efa\u540d\u4e3a",Object(c.a)("inlineCode",{parentName:"p"},"01factory"),"\u7684\u6587\u4ef6\u5939"),Object(c.a)(o.a,{lan:"shell",code:"\nmd 01factory\n",mdxType:"CodeEditor"}),Object(c.a)("h3",null,"1.5. mv\u79fb\u52a8\u6587\u4ef6\u6216\u76ee\u5f55/\u91cd\u547d\u540d"),Object(c.a)("p",null,"\u5982\u679c\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u79fb\u52a8\u6587\u4ef6\uff08\u5939\uff09\uff0c\u76f8\u5f53\u4e8e\u91cd\u547d\u540d\u3002"),Object(c.a)(o.a,{lan:"shell",code:"\nmv a b\n",mdxType:"CodeEditor"}),Object(c.a)("h3",null,"1.6. rm\u5220\u9664\u6587\u4ef6\uff08\u5939\uff09"),Object(c.a)("p",null,"\u6211\u4eec\u5728\u91cd\u65b0\u5b89\u88c5\u9879\u76ee\u4f9d\u8d56\u65f6\u7ecf\u5e38\u4f7f\u7528\u5b83\u5220\u9664\u5168\u90e8\u7684\u4f9d\u8d56\u5e93\u3002\u53c2\u6570",Object(c.a)("inlineCode",{parentName:"p"},"r"),"\u8868\u793a\u9012\u5f52\u5220\u9664\uff0c\u5373\u5220\u9664\u6240\u6709\u5b50\u76ee\u5f55\uff0c",Object(c.a)("inlineCode",{parentName:"p"},"f"),"\u8868\u793a\u5f3a\u5236\u5220\u9664\uff0c\u4e0d\u63d0\u793a\u7528\u6237\u786e\u8ba4\u3002"),Object(c.a)(o.a,{lan:"shell",code:"\nrm -rf ./node_modules\n",mdxType:"CodeEditor"}),Object(c.a)("h3",null,"1.7. \u67e5\u770b\u6587\u672c\u6587\u4ef6"),Object(c.a)(o.a,{lan:"shell",code:"\ncat file/path\n",mdxType:"CodeEditor"}),Object(c.a)("h3",null,"1.8. \u590d\u5236\u6587\u4ef6\uff08\u5939\uff09"),Object(c.a)(o.a,{lan:"shell",code:"\ncp file/path new/file/path\n# or\ncp -r folder/path new/folder/path\n",mdxType:"CodeEditor"}),Object(c.a)("h2",null,"2. \u5e38\u7528\u547d\u4ee4"),Object(c.a)("h3",null,"2.1. \u4f7f\u7528\u7ba1\u7406\u5458\u6743\u9650\u6267\u884c\u4e00\u6761\u547d\u4ee4"),Object(c.a)("p",null,"\u53ef\u4ee5\u7406\u89e3",Object(c.a)("inlineCode",{parentName:"p"},"sudo"),"\u4e3a",Object(c.a)("inlineCode",{parentName:"p"},"super user do"),"\u7684\u7f29\u5199"),Object(c.a)(o.a,{lan:"shell",code:"\nsudo vi\n",mdxType:"CodeEditor"}),Object(c.a)("h3",null,"2.2. \u8f6f\u4ef6\u5305\u5b89\u88c5\u5de5\u5177",Object(c.a)("inlineCode",{parentName:"h3"},"apt")),Object(c.a)("p",null,Object(c.a)("inlineCode",{parentName:"p"},"apt"),"\u6307",Object(c.a)("inlineCode",{parentName:"p"},"advanced package tool")),Object(c.a)("h4",null,"2.2.1. \u67e5\u627e\u5e94\u7528"),Object(c.a)("p",null,"\u6839\u636e\u5e94\u7528\u540d\u79f0\u6216\u90e8\u5206\u540d\u79f0\u641c\u7d22\u8f6f\u4ef6\u5305"),Object(c.a)(o.a,{lan:"shell",code:"\napt list python\n# or\napt list python?\n# or\napt list python3*\n",mdxType:"CodeEditor"}),Object(c.a)("p",null,"\u6839\u636e\u529f\u80fd\u641c\u7d22\u8f6f\u4ef6\u5305"),Object(c.a)(o.a,{lan:"shell",code:"\napt search 'web browser'\n",mdxType:"CodeEditor"}),Object(c.a)("h3",null,"2.3. \u5b89\u88c5\u8f6f\u4ef6\u5305"),Object(c.a)(o.a,{lan:"shell",code:"\nsudo apt install opera -y\n",mdxType:"CodeEditor"}),Object(c.a)("h3",null,"2.4. \u5378\u8f7d\u8f6f\u4ef6\u5305"),Object(c.a)(o.a,{lan:"shell",code:"\nsudo apt remove chromium -y\n",mdxType:"CodeEditor"}),Object(c.a)("h3",null,"2.5. \u66f4\u65b0\u8f6f\u4ef6"),Object(c.a)(o.a,{lan:"shell",code:"\nsudo apt update -y && sudo apt upgrade -y\n",mdxType:"CodeEditor"}),Object(c.a)("h2",null,"3. \u5176\u5b83"),Object(c.a)("h3",null,"3.1. \u67e5\u770b\u672c\u673aip\u5730\u5740"),Object(c.a)(o.a,{lan:"shell",code:"\nip a\n",mdxType:"CodeEditor"}),Object(c.a)("h3",null,"3.2. \u4f7f\u7528vscode\u6253\u5f00\u6587\u4ef6\uff08\u5939\uff09"),Object(c.a)(o.a,{lan:"shell",code:"\ncode file/path\n# or\ncode path\n",mdxType:"CodeEditor"}),Object(c.a)("h2",null,"4. Tilda"),Object(c.a)("p",null,"Tilda\u662f\u4e00\u4e2a\u7ec8\u7aef\u6a21\u62df\u5668\uff0c\u5b83\u80fd\u591f\u6bd4\u8f83\u65b9\u4fbf\u5730\u901a\u8fc7\u67d0\u4e2a\u5feb\u6377\u952e\uff08\u9ed8\u8ba4\u4e3aF1\uff09\u663e\u793a\u548c\u9690\u85cf\uff0c\u4e0d\u5360\u7528\u684c\u9762\u7a97\u53e3\u6570\u91cf\uff0c\u4e14\u53ef\u65b9\u4fbf\u5730\u968f\u65f6\u663e\u793a/\u9690\u85cf\uff0c\u662fLinux\u684c\u9762\u5fc5\u5907\u7684\u5de5\u5177\u4e4b\u4e00\u3002"),Object(c.a)("p",null,"\u521d\u6b21\u4f7f\u7528\u4f1a\u81ea\u52a8\u5f39\u51fa\u8bbe\u7f6e\u5bf9\u8bdd\u6846\uff0c\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u7b80\u5355\u7684\u8bbe\u7f6e\uff0c\u4f7f\u5f97\u4f7f\u7528\u8d77\u6765\u66f4\u5f97\u5fc3\u5e94\u624b\u3002"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)("p",{parentName:"li"},"General"),Object(c.a)("p",{parentName:"li"},Object(c.a)("inlineCode",{parentName:"p"},"Start in fullscreen")," \u9ed8\u8ba4\u542f\u52a8\u5168\u5c4f\u663e\u793a"),Object(c.a)("p",{parentName:"li"},Object(c.a)("inlineCode",{parentName:"p"},"When Last terminal is closed: Open a new terminal and hide")," \u8fd9\u6837\u5c31\u4e0d\u7528\u5f53\u6211\u4eec\u5173\u95ed\u7ec8\u7aef\u7a97\u53e3\u540e\u591a\u6b21\u542f\u52a8tilda\u4e86")),Object(c.a)("li",{parentName:"ul"},Object(c.a)("p",{parentName:"li"},"Appearance"),Object(c.a)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u4e60\u60ef\u5168\u5c4f\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4ee5\u4e0b\u9009\u9879\uff08\u4ee5\u767e\u5206\u6bd4\u65b9\u5f0f\u6216\u8005\u4ee5\u50cf\u7d20\u65b9\u5f0f\uff09"),Object(c.a)("p",{parentName:"li"},Object(c.a)("inlineCode",{parentName:"p"},"Height")),Object(c.a)("p",{parentName:"li"},Object(c.a)("inlineCode",{parentName:"p"},"Width")))))}i.isMDXComponent=!0},aOP1:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documents/2021/03/081557",function(){return n("5R6I")}])}},[["aOP1",0,1,2,3,4,5]]]);