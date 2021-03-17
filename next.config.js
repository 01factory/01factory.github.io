const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		rehypePlugins: [require('@mapbox/rehype-prism')],
	}
});

module.exports = withMDX({
	target: 'serverless',

	pageExtensions: ['jsx', 'js', 'mdx', 'md', 'ts', 'tsx'],

	cssModules: true,

	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: '[local]___[hash:base64:5]',
	},

	env: {
		VERSION: require('./package.json').version,
	},

	trailingSlash: false,

	experimental: {
		reactStrictMode: true,
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true,
			},
		]
	},
});
