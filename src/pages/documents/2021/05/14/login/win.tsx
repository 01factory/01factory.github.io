import { ReactNode } from 'react';

export default function win({ children }: { children: ReactNode; }) {
	return <>
		<div className='cls001'>
			{children}
		</div>
		<style jsx>{`
.cls001{
margin: 0;
padding: 0;
width: 100%;
height: 50rem;
background-image: linear-gradient(to bottom right,#ac64e6, #9198e5, #0084ff);
}
`}</style>
	</>;
}
