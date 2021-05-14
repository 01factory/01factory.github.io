import { ReactNode } from 'react';

/**
 * 内容居中容器
 */
export default function Container({ children }: { children: ReactNode; }) {
	return <>
		<div className='cls001'>
			<div className='cls002'>
				{children}
			</div>
		</div>
		<style jsx>{`
.cls002{
display: flex;
flex-direction: column;
justify-content: center;
}
.cls001{
display: flex;
justify-content: center;
width: 100%;
height: 100%;
}
`}</style>
	</>;
}
