const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TSLintPlugin = require("tslint-webpack-plugin");

module.exports = (env, options) => {
	const devMode = options.mode !== "production";

	return {
		entry: { main: "./src/index.tsx" },
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: devMode ? "[name].js" : "[name].[hash].js",
			chunkFilename: devMode ? "[name].chunk.js" : "[name].chunk.[hash].js",
			publicPath: "/",
		},
		watch: devMode,
		devtool: "cheap-module-source-map",
		resolve: {
			// Add '.ts' and '.tsx' as resolvable extensions.
			extensions: [".ts", ".tsx", ".js", ".json"],
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
					},
				},
				{
					test: /\.(ts|tsx)$/,
					loader: "ts-loader",
					exclude: /node_modules/,
				},
				{
					test: /\.html$/,
					use: [
						{
							loader: "html-loader",
							options: { minimize: true },
						},
					],
				},
				{
					test: /\.css$/,
					// exclude: /node_modules/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: "css-loader",
							options: {
								modules: true,
								importLoaders: 1,
								sourceMap: true,
								minimize: true,
								localIdentName: "[local]___[hash:base64:5]",
							},
						},
					],
				},
				{
					test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
					use: [{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "fonts/",
						},
					}],
				},
			],
		},

		devServer: {
			// contentBase: path.join(__dirname, 'dist'),
			compress: true,
			historyApiFallback: true,
			hot: true,
			// contentBase: 'src/',
			// publicPath: 'public/',
			// inline: true,
			host: "0.0.0.0",
			port: 8555,
		},

		plugins: [
			new HtmlWebPackPlugin({
				template: "./src/index.html",
				filename: "./index.html",
			}),
			new MiniCssExtractPlugin({
				filename: devMode ? "[name].css" : "[name].[hash].css",
				chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
			}),
			new webpack.HotModuleReplacementPlugin(),
			new CleanWebpackPlugin(["dist"]),
			new CopyWebpackPlugin([

				{
					from: "./src/favicon.ico",
					to: "./favicon.ico",
				},
			]),
			new TSLintPlugin({
				files: ["./src/**/*.ts"],
			}),
		],
	};
};
