const path = require("path");
const webpack = require("webpack");
const ProgressPlugin = require("progress-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodemonPlugin = require("nodemon-webpack-plugin");
const { spawn } = require("child_process");

let Env = "local";

function OnFirstBuildDonePlugin() {
	let isInitialBuild = true;
	return {
		apply: (compiler) => {
			compiler.hooks.done.tap("OnFirstBuildDonePlugin", (compilation) => {
				if (isInitialBuild) {
					isInitialBuild = false;
					spawn("nodemon dist/js/index.js --watch dist", {
						stdio: "inherit",
						shell: true,
					});
				}
			});
		},
	};
}

let settings = {
	entry: {
		index: ["babel-polyfill", "./src/ts-basic/index.ts"],
	},
	output: {
		path: path.resolve(__dirname, "../dist/"),
		publicPath: "/",
		filename: "js/[name].js",
		//library: 'componentProyect',
		//libraryTarget: "umd"
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules\/(?!@pictoric\/fb-components)|vue\/src/,
				use: [
					{
						loader: "ts-loader",
						options: {
							transpileOnly: true,
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
					//useRelativePath:true,
					emitFile: false,
				},
			},
			{
				test: /\.styl(us)?$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"stylus-loader",
				],
			},
			{
				test: /\.s(c|a)ss$/,
				use: [
					// 'vue-style-loader',
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					// 'vue-style-loader',
					"css-loader",
				],
			},
		],
	},
	externals: {
		lodash: {
			commonjs: "lodash",
			commonjs2: "lodash",
			amd: "lodash",
			root: "_",
		},
		jquery: "jQuery",
		// "vue": "Vue",
		// "vue-router": "VueRouter",
		// "vuex": "Vuex",
	},
	resolve: {
		enforceExtension: false,
		//unsafeCache: true,
		extensions: [".ts", ".tsx", ".js", ".jsx"],
		alias: {
			// 'vue$': 'vue/dist/vue.common.js',
			vue: "@vue/runtime-dom",
		},
	},
	mode: "development",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		historyApiFallback: true,
		// noInfo: true,
		port: 3000,
		compress: true,

		// static:{
		// 	directory: resolve(__dirname,'')
		// }
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
		new webpack.DefinePlugin({
			ENV: JSON.stringify(Env),
		}),
		new MiniCssExtractPlugin({
			filename: "css/dist/[name]-[hash].css",
		}),
		OnFirstBuildDonePlugin(),
	],
	optimization: {
		//
	},
};

module.exports = (env, argv) => {
	if (argv.mode === "development") {
		// console.log(path.resolve(__dirname, '../wwwroot/css/dist/'))
		// return
	}

	if (argv.mode === "production") {
		settings.devtool = "source-map";
	}

	if (env) {
		//
	}

	return settings;
};
