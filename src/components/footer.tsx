import router from 'next/router';
import { useState, useEffect } from 'react';

export default function Footer() {
	const [path, setPath] = useState('/main');
	useEffect(() => {
		void (async () => {
			setPath(router.asPath);
		})();
	}, []);
	const url = `https://github.com/01factory/01factory.github.io/edit/main/src/pages${path}.md`;
	const url2 = `https://gitee.com/dfactory01/dfactory01/edit/main/src/pages${path}.md`;
	return <>
		<div className="outer">
			<footer className="inner">
				<a href={url} target="_blank" rel="noreferrer noopener"><svg fill="currentColor" height="1.2em" width="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 40 40" className="s001"><g><path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"></path></g></svg>Edit this page on Github</a><br />
				<a href={url2} target="_blank" rel="noreferrer noopener"><svg fill="currentColor" height="1.2em" width="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 40 40" className="s001"><g><path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"></path></g></svg>Edit this page on Gitee</a>
			</footer>
		</div>
		<style jsx>{`
a{
font-size: 17px;
color: #5c5cff;
}
.s001 { margin-right:0.3em;vertical-align:sub }
.outer{
margin: 0;
color: #fff;
font-size: 42px;
font-weight: 700;
text-shadow: #111 0px 0px 10px;
background: linear-gradient(to top, #373737, #212121);
}
.inner{
	padding-top: 20;
	max-width: 640px;
	margin: 0 auto;
font-size: 16px;
}
`}</style>
	</>;
}
