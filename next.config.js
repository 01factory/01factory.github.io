const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		rehypePlugins: [
			// require("@jsdevtools/rehype-toc"),
			require('@mapbox/rehype-prism'),
			// require('rehype-autolink-headings'),
		],
	}
});

module.exports = withMDX({
	dir: './docs',
	target: 'serverless',

	pageExtensions: ['mdx', 'md', 'ts', 'tsx'],

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
	// async redirects() {
	// 	return [
	// 		{
	// 			source: '/',
	// 			destination: '/index',
	// 			permanent: true,
	// 		},
	// 	]
	// },
});
