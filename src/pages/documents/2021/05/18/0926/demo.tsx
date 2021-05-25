import { NextPage, PageConfig } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';

interface IProps {
}

/**
 * 左侧固定菜单示例页面
 */
const page: NextPage<IProps> = () => {
	return (
		<>
			<Head>
				<title>左侧固定菜单示例页面</title>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
				<link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon-32x32.ico" ></link>
				<link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon-16x16.ico"></link>
			</Head>
			<Demo />
		</>
	);
};

export const config: PageConfig = {
	amp: false
};

export default page;

function Demo() {
	return <>
		<Panel><div className='cls001'>主页面</div></Panel>
		<style jsx>{`
.cls001{
margin:0;
padding:0;
height: 30rem;
background-color: burlywood;
}
`}</style>
	</>;
}

function Panel({ children }: { children: ReactNode; }) {
	return <>
		<div className='cls001'>
			<div className='cls002'>
				<LeftMenu />
			</div>
			<div className='cls003'>
				{children}
			</div>
		</div>
		<style jsx>{`
.cls001{
display: flex;
}
.cls002{
position: fixed;
overflow-y: scroll;
left: 0;
top:0;
bottom:0;
height: 100%;
width: 10rem;
margin: 0;
background-color: blue;
}
.cls003{
flex-grow: 1;
margin-left: 9rem;
}
`}</style>
	</>;
}

function LeftMenu() {
	const arr = new Array<number>(100).fill(1);
	return <>
		<ol className="cls001">
			{arr.map((it, key) => {
				return <li className='cls002' key={key}>{(it + key).toString().padStart(6, '0')}</li>
			})}
		</ol>
		<style jsx>{`
.cls001 {
height: 100%;
margin: 0;
}
.cls002{
width: 100%;
display: flex;
justify-content: center;
transition: all 500ms;
}
.cls002:hover{
background-color: aliceblue;
}
`}</style>
	</>;
}
