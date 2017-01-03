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
