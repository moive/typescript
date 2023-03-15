const path = require("path");
const ProgressPlugin = require("progress-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let Env = "local";

let settings = {
	entry: {
		app: ["babel-polyfill", "./src/ts-herrera/scripts/index.ts"],
	},
	output: {
		path: path.resolve(__dirname, "../wwwroot/"),
		publicPath: "/",
		filename: "js/dist/js/[name].js?v=[hash]",
		//library: 'componentProyect',
		//libraryTarget: "umd"
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
				exclude: /node_modules\/(?!@pictoric\/fb-components)|vue\/src/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.css$/,
				use: ["css-loader"],
			},
		],
	},
	mode: "development",
	devServer: {
		static: {
			directory: path.join(__dirname, "../wwwroot"),
		},
		historyApiFallback: true,
		// noInfo: true,
		port: 3000,
		compress: true,
	},
	resolve: {
		enforceExtension: false,
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	plugins: [
		new ProgressPlugin({
			activeModules: false,
			entries: true,
			handler(percentage, message, ...args) {
				// custom logic
			},
			modules: true,
			modulesCount: 5000,
			profile: false,
			dependencies: true,
			dependenciesCount: 10000,
			percentBy: null,
		}),
		new MiniCssExtractPlugin({
			filename: "css/dist/[name]-[hash].css",
		}),
		new HtmlWebpackPlugin({
			chunks: ["app"],
			template: "./src/ts-herrera/scripts/app.html",
			//filename:"index.html"
		}),
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
					name: "vendor",
					chunks: "all",
				},
			},
		},
	},
};

module.exports = (env, argv) => {
	if (argv.env.NODE_ENV == "production")
		settings.module.rules[2].use[0] = MiniCssExtractPlugin.loader;

	if (argv.mode === "production") settings.devtool = "source-map";

	return settings;
};
