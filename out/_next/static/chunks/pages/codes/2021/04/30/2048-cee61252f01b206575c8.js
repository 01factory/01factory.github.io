_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{QO2k:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var r=n("rePB"),o=n("Ff2n"),i=(n("q1tI"),n("7ljp")),l=n("3wrV");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={};function u(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(i.a)("wrapper",s(s(s({},c),n),{},{components:e,mdxType:"MDXLayout"}),Object(i.a)("h1",null,"RichEditor"),Object(i.a)(l.a,{lan:"ts",code:"\nimport dynamic from 'next/dynamic';\nimport 'react-quill/dist/quill.snow.css';\nimport * as Quill from 'quill';\nimport { ReactNode } from 'react';\n\nconst ReactQuill = dynamic(\n\timport('react-quill'),\n\t{ ssr: false }\n);\n\nexport interface UnprivilegedEditor {\n\tgetLength(): number;\n\tgetText(index?: number, length?: number): string;\n\tgetHTML(): string;\n\tgetBounds(index: number, length?: number): Quill.BoundsStatic;\n\tgetSelection(focus?: boolean): Quill.RangeStatic;\n\tgetContents(index?: number, length?: number): Quill.DeltaStatic;\n}\n\nexport interface ComponentProps {\n\tid?: string;\n\tclassName?: string;\n\tstyle?: React.CSSProperties;\n\treadOnly?: boolean;\n\tvalue?: string | Quill.Delta;\n\tdefaultValue?: string | Quill.Delta;\n\tplaceholder?: string;\n\ttabIndex?: number;\n\tbounds?: string | HTMLElement;\n\tscrollingContainer?: string | HTMLElement;\n\tonChange?: (\n\t\tcontent: string,\n\t\tdelta: Quill.Delta,\n\t\tsource: Quill.Sources,\n\t\teditor: UnprivilegedEditor\n\t) => void;\n\tonChangeSelection?: (\n\t\trange: Quill.RangeStatic,\n\t\tsource: Quill.Sources,\n\t\teditor: UnprivilegedEditor\n\t) => void;\n\tonFocus?: (\n\t\trange: Quill.RangeStatic,\n\t\tsource: Quill.Sources,\n\t\teditor: UnprivilegedEditor\n\t) => void;\n\tonBlur?: (\n\t\tpreviousRange: Quill.RangeStatic,\n\t\tsource: Quill.Sources,\n\t\teditor: UnprivilegedEditor\n\t) => void;\n\tonKeyPress?: React.EventHandler<React.KeyboardEvent>;\n\tonKeyDown?: React.EventHandler<React.KeyboardEvent>;\n\tonKeyUp?: React.EventHandler<React.KeyboardEvent>;\n\tformats?: string[];\n\tchildren?: ReactNode;\n\tpreserveWhitespace?: boolean;\n\n\t/** @deprecated\n\t * The `toolbar` prop has been deprecated. Use `modules.toolbar` instead.\n\t * See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100.\n\t * */\n\n\ttoolbar?: never;\n\t/** @deprecated\n\t * The `styles` prop has been deprecated. Use custom stylesheets instead.\n\t * See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100\n\t */\n\n\tstyles?: never;\n\t/**\n\t * @deprecated\n\t * The `pollInterval` property does not have any effect anymore.\n\t * You can safely remove it from your props.\n\t * See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100.\n\t */\n\tpollInterval?: never;\n}\n\nexport default function RichEditor({ value, onChange, defaultValue }: ComponentProps) {\n\tconst toolbarOptions = [\n\t\t['bold', 'italic', 'underline', 'strike'], // toggled buttons\n\t\t['blockquote', 'code-block'],\n\n\t\t[{ 'header': 1 }, { 'header': 2 }], // custom button values\n\t\t[{ 'list': 'ordered' }, { 'list': 'bullet' }],\n\t\t[{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript\n\t\t[{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent\n\t\t[{ 'direction': 'rtl' }], // text direction\n\n\t\t[{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown\n\t\t[{ 'header': [1, 2, 3, 4, 5, 6, false] }],\n\n\t\t[{ 'color': [] as string[] }, { 'background': [] as string[] }], // dropdown with defaults from theme\n\t\t[{ 'font': [] as string[] }],\n\t\t[{ 'align': [] as string[] }],\n\n\t\t['clean'], // remove formatting button\n\t\t['image', 'code-block']\n\t];\n\treturn <div className='cls001'>\n\t\t<ReactQuill defaultValue={defaultValue} value={value} theme=\"snow\" modules={{ toolbar: toolbarOptions }} onChange={onChange}></ReactQuill>\n\t\t<style jsx>{`\n.cls001{\n\tmargin: 50px;\n}\n`}</style>\n\t</div>;\n}\n",mdxType:"CodeEditor"}))}u.isMDXComponent=!0},vbHh:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/codes/2021/04/30/2048",function(){return n("QO2k")}])}},[["vbHh",0,1,2,4,3,5]]]);