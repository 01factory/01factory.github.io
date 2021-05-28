import { AppContext, AppInitialProps } from 'next/app';
import { CssBaseline, GeistProvider } from '@geist-ui/react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../../styles/global.css';

function App({ Component, pageProps }: AppInitialProps & AppContext) {
	return (
		<GeistProvider>
			<CssBaseline />
			<Header />
			<div>
				<Component {...pageProps} />
			</div>
			<Footer />
			<style jsx>{`
div{
	padding-left: 20px;
}
			`}</style>
		</GeistProvider>
	);
}

export default App;
