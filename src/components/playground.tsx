import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { useState } from 'react';
import { Button, Col, Row, useToasts } from '@geist-ui/react';
import copy from '@mmstudio/aw000023';

export default function Playground({ code, scope }: { code: string; scope?: { [key: string]: any }; }) {
	code = code.split('\n').filter(l => !!l).join('\n');
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
					<LiveProvider code={value} scope={scope}>
						<LiveEditor onChange={(code) => {
							setvalue(code);
						}} />
						<LiveError />
						<LivePreview />
					</LiveProvider>
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
