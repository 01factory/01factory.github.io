import { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import { Button, Col, Row, useToasts } from '@geist-ui/react';
import copy from '@mmstudio/aw000023';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-prolog';
// import 'prismjs/components/prism-tsx.min'; // !!! error here
// import './prism-tsx';

// import 'prismjs/themes/prism.css';
// import 'prismjs/themes/prism-coy.css';
// import 'prismjs/themes/prism-dark.css';
// import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/themes/prism-tomorrow.css';
// import 'prismjs/themes/prism-funky.css';
// import 'prismjs/themes/prism-solarizedlight.css';

// extend,insertBefore,DFS,markup,html,mathml,svg,xml,ssml,atom,rss,css,clike,javascript,js,ruby,rb,haml,sql,typescript,ts,json,webmanifest,bash,shell

export type lanType = 'yaml' | 'yml' | 'html' | 'js' | 'ts' | 'jsx' | 'bash' | 'shell' | 'prolog';

export default function CodeEditor({ code, lan }: { code: string; lan: lanType; }) {
	// code = code.split('\n').filter(l => !!l).join('\n');
	code = code.trim();
	const [value, setvalue] = useState(code);
	const [, toast] = useToasts();
	return <>
		<Row justify='end'>
			<Col span={6}>
				<Button auto type='secondary-light' ghost onClick={() => {
					setvalue(code);
				}}>Reset</Button>
				<Button auto type='secondary' ghost onClick={async () => {
					await copy(value)
					toast({
						text: 'Copied!',
						type: 'secondary'
					});
				}} >Copy</Button>
			</Col>
		</Row>
		<Row>
			<Col span={24}>
				<div>
					<Editor
						value={value}
						onValueChange={(code) => {
							setvalue(code);
						}}
						highlight={(code) => {
							return highlight(code, languages[lan], lan)
						}}
						padding={10}
						style={{
							fontFamily: '"Fira code", "Fira Mono", monospace',
							fontSize: 12,
						}}
					/>
				</div>
			</Col>
		</Row>
		<style jsx>{`
div{
border-width: 0.3rem;
border-color: silver;
border-style: double;
}
`}</style>
	</>;
}
