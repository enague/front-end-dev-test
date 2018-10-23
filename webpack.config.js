const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, '/dist'),
		filename: 'bundle.js'
	},

	watch: true,

	devServer: {
		inline: true
	},

	//Add sass-loader
	module: {
		loaders: [
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: "raw-loader"
			},
			{
				test: /\.(css)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
			},
			{	
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use:[{
					loader: 'babel-loader',	
				}]			  
			},
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'url-loader',
				options: {
				  limit: 25000,
				},
			},
			
		]
	}
}
