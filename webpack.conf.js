/* eslint-env node */

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isTest = true;

module.exports =
{
	entry: './src/index.js',
	output:
	{
		path: '.',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},
	//devtool: 'source-map',
	module:
	{
		loaders:
		[
			{
				// Load jQuery and expose it as global variable before loading other libraries, so that they find it.
				// Reference: https://github.com/webpack/expose-loader
				// and http://stackoverflow.com/questions/36065931/webpack-how-to-make-angular-auto-detect-jquery-and-use-it-as-angular-element-in
				test: require.resolve('jquery'), // Full path in node_modules
				loader: 'expose?$!expose?jQuery'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				// CSS LOADER
				// For CSS files from modules.
				test: /\.css$/,
				loader:
					isTest ?
						'style-loader!css-loader' :
						// Use the 'style' loader after treatment by the CSS loader (minification with source map)
						ExtractTextPlugin.extract('style', 'css?sourceMap'),
			},
		]
	},
	devServer:
	{
		contentBase: './',
		port: 8080,
		noInfo: false,
		hot: true,
		inline: true,
		proxy:
		{
			'/':
			{
				bypass: function (req, res, proxyOptions)
				{
					return '/public/index.html';
				}
			}
		}
	},
	plugins:
	[
		new webpack.HotModuleReplacementPlugin()
	]
};
