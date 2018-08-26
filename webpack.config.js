const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

var copyWebpackPluginInstance = new CopyWebpackPlugin([
	{
		from: './node_modules/font-awesome/',
		to: './node_modules/font-awesome/'
	},
	{
		from: './node_modules/bootstrap/',
		to: './node_modules/bootstrap/'
	}
]);

var htmlWebPackPluginInstance = new HtmlWebPackPlugin({
	filename: "./index.html",
	minify: {
		collapseWhitespace: true,
		html5: true,
		minifyCSS: true,
		removeAttributeQuotes: true,
		removeComments: true,
		removeEmptyAttributes: true,
	},
	template: "./src/index.html"
});

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "less-loader"
					}
				]
			},
			{
				test: /\.(png|jpg|css)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		copyWebpackPluginInstance,
		htmlWebPackPluginInstance
	]
};
