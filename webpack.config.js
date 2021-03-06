var path = require('path'),
	webpack = require('webpack');

module.exports = {
	// Entry point for the bundle.
	entry: [
		'./src/index.js'
	],

	output: {
		// Output directory.
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],

	module: {
		loaders: [{
			test: /\.css$/,
			loaders: [ 'style', 'css' ]
		}, {
			test: /\.(js|jsx)$/i,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel'
		}]
	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	devServer: {
		historyApiFallback: true,
		contentBase: './',
		inline: true,
		hot: true,
		port: 8081
	}
};