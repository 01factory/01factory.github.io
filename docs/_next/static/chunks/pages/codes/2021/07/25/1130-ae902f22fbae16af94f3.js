_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[62],{"3fSo":function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return l}));var a=e("rePB"),r=e("Ff2n"),i=(e("q1tI"),e("7ljp")),o=e("3wrV");function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){Object(a.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var c={};function l(t){var n=t.components,e=Object(r.a)(t,["components"]);return Object(i.a)("wrapper",p(p(p({},c),e),{},{components:n,mdxType:"MDXLayout"}),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("ol",{parentName:"li"},Object(i.a)("li",{parentName:"ol"},Object(i.a)("a",p({parentName:"li"},{href:"#"})," \u9875\u9762\u7ec4\u4ef6")))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("ol",p({parentName:"li"},{start:2}),Object(i.a)("li",{parentName:"ol"},Object(i.a)("a",p({parentName:"li"},{href:"#Content"}),"Content\u7ec4\u4ef6")))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("ol",p({parentName:"li"},{start:3}),Object(i.a)("li",{parentName:"ol"},Object(i.a)("a",p({parentName:"li"},{href:"#Row"}),"Row\u7ec4\u4ef6"))))),Object(i.a)("h1",null,"\u5217\u8868\u9875\u9762"),Object(i.a)("h2",null,"1. ",Object(i.a)("a",{name:""})," \u9875\u9762\u7ec4\u4ef6"),Object(i.a)(o.a,{lan:"ts",code:'\nimport { GetServerSideProps, NextPage, PageConfig } from \'next\';\nimport Head from \'next/head\';\nimport Content from \'./content\';\nimport an49 from \'@mmstudio/an000049\';\n\ninterface IProps {\n\tdata: ITbxxx[];\n\tquery: Record<string, string>;\n}\n\n/**\n * xxx\u7ba1\u7406\n */\nconst Page: NextPage<IProps> = ({ data, query }) => {\n\treturn (\n\t\t<>\n\t\t\t<Head>\n\t\t\t\t<title>xxxx\u7ba1\u7406</title>\n\t\t\t\t<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>\n\t\t\t\t<link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon-32x32.ico" ></link>\n\t\t\t\t<link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon-16x16.ico"></link>\n\t\t\t</Head>\n\t\t\t<Content data={data} id={query.id} />\n\t\t</>\n\t);\n};\n\nexport const config: PageConfig = {\n\tamp: false\n};\n\nexport default Page;\n\n// pre-render this page on each request\nexport const getServerSideProps: GetServerSideProps<IProps> = async (context) => {\n\tconst db = an49();\n\tconst tb = db<ITbxxx>(\'xxx\');\n\tconst d = await tb.select(\'*\').orderBy(\'xxx\', \'asc\');\n\tconst data = d.map((it) => {\n\t\treturn { ...it };\n\t});\n\tconst query = context.query as Record<string, string>;\n\treturn {\n\t\tprops: {\n\t\t\tdata,\n\t\t\tquery\n\t\t}\n\t};\n};\n',mdxType:"CodeEditor"}),Object(i.a)("h2",null,"2. ",Object(i.a)("a",{name:"Content"}),"Content\u7ec4\u4ef6"),Object(i.a)(o.a,{lan:"ts",code:"\nimport { useEffect, useState } from 'react';\nimport smartfetch from '@mmstudio/an000058';\nimport Search from './search';\nimport List from './list';\nimport api from '../../../atoms/api';\nimport Add from './add';\nimport Title from './title';\nimport RightContainer from './rightcontainer';\nimport { Pagination } from 'antd';\nimport { useUrlSearchParams } from \"use-url-search-params\";\nimport { Query as Q1, Result as R1, IData } from '../../api/xxx/query.api';\n\nexport default function Content(props: { query: Record<string, string>; data: Itbxxx[]; }) {\n\tconst [data, setdata] = useState<R1>({\n\t\tcount: 0,\n\t\tdata: []\n\t});\n\tconst [query, setquery] = useState<Q1>(props.query);\n\tconst [, setParams] = useUrlSearchParams({}, { page: Number });\n\tasync function reload(q: Q1) {\n\t\tsetquery(q);\n\t\tsetParams(q);\n\t\tconst data = await smartfetch<R1, Q1>(api.admin.projects.search, 'get', q);\n\t\tsetdata(data);\n\t}\n\tuseEffect(() => {\n\t\tvoid reload(query);\n\t}, []);\n\treturn <>\n\t\t<Title />\n\t\t<RightContainer>\n\t\t\t<Search<IData>\n\t\t\t\tpagesize={Number(query.pagesize)}\n\t\t\t\tservice={api.xxx.search}\n\t\t\t\tinitq={query.q}\n\t\t\t\tonChange={(v) => {\n\t\t\t\t\tsetdata(v);\n\t\t\t\t}} />\n\t\t\t<Add data={props.data} />\n\t\t</RightContainer>\n\t\t<List data={data} initData={props.data} />\n\t\t<RightContainer>\n\t\t\t<Pagination\n\t\t\t\tcurrent={Number(query.page || '1')}\n\t\t\t\tpageSize={Number(query.pagesize || '10')}\n\t\t\t\tshowTitle\n\t\t\t\ttotal={data.count}\n\t\t\t\tonChange={(p, s) => {\n\t\t\t\t\tconst q = {\n\t\t\t\t\t\tq: query.q,\n\t\t\t\t\t\tpage: p.toString(),\n\t\t\t\t\t\tpagesize: s.toString()\n\t\t\t\t\t} as Q1;\n\t\t\t\t\tsetquery(q);\n\t\t\t\t\treload(q);\n\t\t\t\t}}\n\t\t\t/>\n\t\t</RightContainer>\n\t\t<style jsx>{`\n.c{\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n.ops{\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n`}</style>\n\t</>;\n}\n",mdxType:"CodeEditor"}),Object(i.a)("h2",null,Object(i.a)("a",p({parentName:"h2"},{href:"../../05/18/1524"}),"Search\u67e5\u8be2\u7ec4\u4ef6")),Object(i.a)("h2",null,Object(i.a)("a",p({parentName:"h2"},{href:"./1320"}),"Row\u7ec4\u4ef6")),Object(i.a)("h2",null,"Add\u65b0\u589e\u7ec4\u4ef6"),Object(i.a)(o.a,{lan:"ts",code:"\nimport { Form, Input, InputNumber, Select } from 'antd';\nimport { useState } from 'react';\nimport smartfetch from '@mmstudio/an000058';\nimport AddButton from './addbutton';\n\nexport default function Add({ data }: { data: ITbxxx[]; }) {\n\tconst [d, setd] = useState({ dataids: [] } as { dataids: string[]; });\n\tconst mapdata = data.reduce((map, it) => {\n\t\treturn map.set(it.xxx, it);\n\t}, new Map<string, XXX>());\n\treturn <AddButton\n\t\tdlgtitle='xxx'\n\t\tonSave={async () => {\n\t\t\tif (!d.xxx === undefined || !d.yyy) {\n\t\t\t\treturn '\u8bf7\u586b\u5199\u5b8c\u6574';\n\t\t\t}\n\t\t\tconst data = await smartfetch<xxx, xxx>('/api/xxx', 'put', {\n\t\t\t\t...d\n\t\t\t});\n\t\t\treturn data.ok || data.message;\n\t\t}}\n\t>\n\t\t<Form.Item required label=\"xxx:\">\n\t\t\t<InputNumber min={'1'} placeholder='xxx' value={d.xxx} onChange={(e) => {\n\t\t\t\tsetd({\n\t\t\t\t\t...d,\n\t\t\t\t\txxx: e\n\t\t\t\t})\n\t\t\t}} />\n\t\t</Form.Item>\n\t\t<Form.Item required label=\"xxx:\">\n\t\t\t<Input placeholder='xxx' value={d.xxx} onChange={(e) => {\n\t\t\t\tsetd({\n\t\t\t\t\t...d,\n\t\t\t\t\txxx: e.target.value\n\t\t\t\t});\n\t\t\t}} />\n\t\t</Form.Item>\n\t\t<Form.Item label=\"xxx\">\n\t\t\t<Select\n\t\t\t\tmode=\"multiple\"\n\t\t\t\toptionFilterProp=\"children\"\n\t\t\t\tfilterOption={(input, option) => {\n\t\t\t\t\treturn option.children.indexOf(input) >= 0\n\t\t\t\t}}\n\t\t\t\tplaceholder='xxx'\n\t\t\t\tvalue={d.dataids}\n\t\t\t\tonChange={(e) => {\n\t\t\t\t\tconst dataids = e.map((it) => {\n\t\t\t\t\t\treturn mapdata.get(it);\n\t\t\t\t\t});\n\t\t\t\t\tsetd({\n\t\t\t\t\t\t...d,\n\t\t\t\t\t\tdataids\n\t\t\t\t\t});\n\t\t\t\t}} >\n\t\t\t\t{data.map((it) => {\n\t\t\t\t\treturn <Select.Option key={it.id} value={it.id} >{it.name}</Select.Option>\n\t\t\t\t})}\n\t\t\t</Select>\n\t\t</Form.Item>\n\t</AddButton>;\n}\n",mdxType:"CodeEditor"}),Object(i.a)("h2",null,Object(i.a)("a",p({parentName:"h2"},{href:"../26/0743"}),"AddButton\u901a\u7528\u65b0\u589e\u6309\u94ae")),Object(i.a)("h2",null,Object(i.a)("a",p({parentName:"h2"},{href:"./1304"}),"Button\u7ec4\u4ef6")),Object(i.a)("h2",null,Object(i.a)("a",p({parentName:"h2"},{href:"../26/0747"}),"Title\u9762\u5305\u5c51\u7ec4\u4ef6")),Object(i.a)("h2",null,"List\u5217\u8868\u7ec4\u4ef6"),Object(i.a)(o.a,{lan:"ts",code:"\nimport { Table } from 'antd';\nimport Edit from './edit';\nimport DelButton from './delbutton';\nimport Shadow from './shadow';\n\nexport default function List({ data, initData }: { data: IData[]; initData: ITbxxx[]; }) {\n\treturn <>\n\t\t<Shadow>\n\t\t\t<Table columns={[\n\t\t\t\t{\n\t\t\t\t\ttitle: 'xxx',\n\t\t\t\t\tdataIndex: 'xxx',\n\t\t\t\t\tkey: 'xxx',\n\t\t\t\t\twidth: '6rem',\n\t\t\t\t\talign: 'center'\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\ttitle: '\u64cd\u4f5c',\n\t\t\t\t\tkey: 'action',\n\t\t\t\t\twidth: '15rem',\n\t\t\t\t\talign: 'center',\n\t\t\t\t\trender(_text, record) {\n\t\t\t\t\t\tconst id = record.id;\n\t\t\t\t\t\treturn <div className='op'>\n\t\t\t\t\t\t\t<Edit data={record} users={initData} />\n\t\t\t\t\t\t\t<DelButton query={{\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t}} dlgtitle='\u786e\u8ba4\u5220\u9664' api={'/api/xxx'} />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t]}\n\t\t\t\tbordered\n\t\t\t\tdataSource={data}\n\t\t\t\tpagination={false}\n\t\t\t/>\n\t\t</Shadow>\n\t\t<style jsx>{`\n.op{\n\tmargin: 0;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\twidth: 14rem;\n\theight: 1rem;\n\tflex-wrap: nowrap;\n}\n`}</style>\n\t</>;\n}\n",mdxType:"CodeEditor"}),Object(i.a)("h2",null,"Edit\u7f16\u8f91\u7ec4\u4ef6"),Object(i.a)(o.a,{lan:"ts",code:"\nimport { Form, Input, InputNumber, Select } from 'antd';\nimport { useState } from 'react';\nimport api from '../../../atoms/api';\nimport smartfetch from '@mmstudio/an000058';\nimport { Message as M1, Result as R1 } from '../../api/xxx/edit.api';\nimport { IData } from '../../api/xxx/query.api';\nimport EditButton from '../../../components/editbutton';\n\nexport default function Edit({ data, initData }: { data: IData; initData: ITbxxx[]; }) {\n\tconst mapinitdata = initData.reduce((map, it) => {\n\t\treturn map.set(it.id, it);\n\t}, new Map<string, xxx>());\n\tconst [d, setd] = useState(data);\n\tconst dataids = d.users.map((it) => {\n\t\treturn it.id;\n\t});\n\treturn <>\n\t\t<EditButton dlgtitle='xxx' onSave={async () => {\n\t\t\tif (!d.type_no === undefined || !d.type || !d.type_explain) {\n\t\t\t\treturn '\u8bf7\u586b\u5199\u5b8c\u6574';\n\t\t\t}\n\t\t\tconst data = await smartfetch<R1, M1>(api.admin.types.edit, 'put', d);\n\t\t\treturn data.ok || data.message;\n\t\t}} >\n\t\t\t<Form.Item required label=\"xxx:\">\n\t\t\t\t<InputNumber placeholder='xxx' readOnly defaultValue={d.id} />\n\t\t\t</Form.Item>\n\t\t\t<Form.Item required label=\"xxx:\" hasFeedback>\n\t\t\t\t<Input type='text' placeholder='xxx' value={d.xxx} onChange={(e) => {\n\t\t\t\t\tsetd({\n\t\t\t\t\t\t...d,\n\t\t\t\t\t\txxx: e.target.value\n\t\t\t\t\t});\n\t\t\t\t}} />\n\t\t\t</Form.Item>\n\t\t\t<Form.Item label=\"xxx\">\n\t\t\t\t<Select\n\t\t\t\t\tmode=\"multiple\"\n\t\t\t\t\toptionFilterProp=\"children\"\n\t\t\t\t\tfilterOption={(input, option) => {\n\t\t\t\t\t\treturn option.children.indexOf(input) >= 0\n\t\t\t\t\t}}\n\t\t\t\t\tplaceholder='xxx'\n\t\t\t\t\tvalue={dataids}\n\t\t\t\t\tonChange={(e) => {\n\t\t\t\t\t\tconst xxx = e.map((it) => {\n\t\t\t\t\t\t\treturn mapinitdata.get(it);\n\t\t\t\t\t\t});\n\t\t\t\t\t\tsetd({\n\t\t\t\t\t\t\t...d,\n\t\t\t\t\t\t\txxx\n\t\t\t\t\t\t});\n\t\t\t\t\t}} >\n\t\t\t\t\t{initData.map((it) => {\n\t\t\t\t\t\treturn <Select.Option key={it.id} value={it.id} >{it.name}</Select.Option>\n\t\t\t\t\t})}\n\t\t\t\t</Select>\n\t\t\t</Form.Item>\n\t\t</EditButton>\n\t</>;\n}\n",mdxType:"CodeEditor"}),Object(i.a)("h2",null,Object(i.a)("a",p({parentName:"h2"},{href:"../26/0853"}),"\u901a\u7528\u7f16\u8f91\u6309\u94ae\u7ec4\u4ef6")),Object(i.a)("h2",null,Object(i.a)("a",p({parentName:"h2"},{href:"../26/0901"}),"\u901a\u7528\u5220\u9664\u6309\u94ae\u7ec4\u4ef6")),Object(i.a)("h2",null,"\u670d\u52a1"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",p({parentName:"li"},{href:"../26/0914"}),"\u65b0\u589e\u670d\u52a1")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",p({parentName:"li"},{href:"../26/0920"}),"\u7f16\u8f91\u670d\u52a1")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",p({parentName:"li"},{href:"../26/0923"}),"\u5220\u9664\u670d\u52a1")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",p({parentName:"li"},{href:"../26/0930"}),"\u67e5\u8be2\u670d\u52a1"))))}l.isMDXComponent=!0},QEUX:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/codes/2021/07/25/1130",function(){return e("3fSo")}])}},[["QEUX",0,1,2,4,3,5]]]);