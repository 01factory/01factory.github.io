_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[72],{"lDR/":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/codes/2021/07/26/0903",function(){return e("zvPn")}])},zvPn:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return p}));var r=e("rePB"),o=e("Ff2n"),c=(e("q1tI"),e("7ljp")),i=e("3wrV");function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){Object(r.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var a={};function p(n){var t=n.components,e=Object(o.a)(n,["components"]);return Object(c.a)("wrapper",s(s(s({},a),e),{},{components:t,mdxType:"MDXLayout"}),Object(c.a)("h1",null,"\u56fe\u6807\u6309\u94ae\u7ec4\u4ef6"),Object(c.a)("h2",null,"\u7ec4\u4ef6\u4ee3\u7801"),Object(c.a)(i.a,{lan:"ts",code:"\nimport { MouseEventHandler } from 'react';\n\nexport default function IconButton({ img, label, onClick, title }: { img: string; label?: string; onClick?: MouseEventHandler<HTMLSpanElement>; title?: string; }) {\n\treturn <>\n\t\t<span className='gpicon' onClick={onClick}>\n\t\t\t<img className='icon' title={title} src={img} />\n\t\t\t{label && <span>{label}</span>}\n\t\t</span>\n\t\t<style jsx>{`\n.gpicon{\ndisplay: flex;\njustify-content: flex-start;\nflex-direction: row;\nalign-items: center;\ncursor: pointer;\n}\n.icon{\n\twidth: 1rem;\n\theight: 1rem;\n}\nspan{\n\tcolor: #333333;\n\tfont-size: 13px;\n\tpadding: 0 0 0 0.5rem;\n\ttransition: all 600ms;\n}\nspan:hover{\n\tcolor: #1890ff;\n}\n`}</style>\n\t</>;\n}\n",mdxType:"CodeEditor"}))}p.isMDXComponent=!0}},[["lDR/",0,1,2,3,4,5]]]);