import Link from 'next/link';
import Header from 'next/head';
import { Col, Row, Text } from '@geist-ui/react';

export default function MyHeader() {
	return <>
		<Header>
			<title>01factory|01微工厂</title>
			<meta name="keywords" content="01factory,dfactory,01" />
			<meta name="description" content="微工厂,从零到壹，数字之道" />
			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
			<link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon-32x32.ico" ></link>
			<link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon-16x16.ico"></link>
		</Header>
		<Row>
			<Col span={24} className='s002'>
				<div className="outer">
					<header className="inner">
						<Link href="/">
							<a>
								<img height={150} width={217} src="/images/logo.png" className="s001" />
							</a>
						</Link>
					</header>
				</div>
			</Col>
		</Row>
		<Row>
			<Col span={6}>
				<Link href='/home_design'>
					<a>
						<Text h2 blockquote type="success">方案文档</Text>
					</a>
				</Link>
			</Col>
			<Col span={6}>
				<Link href='/'>
					<a>
						<Text h2 blockquote type="success">开发文档</Text>
					</a>
				</Link>
			</Col>
			<Col span={6}>
				<Link href='/home_ops'>
					<a>
						<Text h2 blockquote type="success">运维文档</Text>
					</a>
				</Link>
			</Col>
		</Row>
		<style jsx>{`
.s001 {
border: none;
box-shadow: none;
-webkit-box-shadow:none;
}
.s002{
	border:none;
	margin: 0 0 0 0;
}
.inner{
	padding-top: 20;
	max-width: 640px;
	margin: 0 auto;
}
.outer{
margin: 0;
color: #fff;
font-size: 42px;
font-weight: 700;
text-shadow: #111 0px 0px 10px;
background: linear-gradient(to top, #373737, #212121);
}
`}</style>
	</>;
}
