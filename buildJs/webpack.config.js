const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


let Env = "local";

let settings = {
	entry: {
		app: ["babel-polyfill", "./src/app.ts"],
	},
	output: {
		path: path.resolve(__dirname, '../dist/'),
		publicPath: '/',
		filename: 'js/[name].js?v=[hash]'
		//library: 'componentProyect',
		//libraryTarget: "umd"
	},
	module: {
		rules: [
			{ 
				test: /\.ts$/, 
				loader: 'ts-loader',   
				exclude: /node_modules\/(?!@pictoric\/fb-components)|vue\/src/, 
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					//useRelativePath:true,
					emitFile:false,
				}
			},
			{
				test: /\.styl(us)?$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'stylus-loader',
				],
			},
			{
				test: /\.s(c|a)ss$/,
				use: [
					// 'vue-style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
							fiber: require('fibers'),
							indentedSyntax: true // optional
						}
					}
				]
			  },
			{
				test: /\.css$/,
				use: [
					// 'vue-style-loader',
					'css-loader'
				]
			},
		]
	},
	externals: {
			"lodash": {
					commonjs: "lodash",
					commonjs2: "lodash",
					amd: "lodash",
					root: "_"
			},
			"jquery": "jQuery",
			// "vue": "Vue",
			// "vue-router": "VueRouter",
			// "vuex": "Vuex",
	},
	resolve: {
		enforceExtension: false,
		//unsafeCache: true,
		extensions: [".ts", ".js"],
		alias: {
			'vue$': 'vue/dist/vue.common.js',
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	plugins: [
		new FriendlyErrorsPlugin(),
		new webpack.DefinePlugin({
			ENV: JSON.stringify(Env)
		}),
		new MiniCssExtractPlugin({
			filename: 'css/dist/[name]-[hash].css',
		}),
	],
	optimization: {
		noEmitOnErrors: true,
				concatenateModules: false,
				namedModules: true,
				minimizer: [
			new UglifyJSPlugin({
				cache: true,
						parallel: true,
				sourceMap: true,
			}),
			new OptimizeCSSAssetsPlugin({}),
		],
	}
}

module.exports = (env, argv) => {
	if(argv.mode === 'development'){
		// console.log(path.resolve(__dirname, '../wwwroot/css/dist/'))
		// return
	}

	if(argv.mode === 'production'){
		settings.devtool = 'source-map';
	}

	if(env){
		//
	}

	return settings;
}