const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

/**
 * arrowFunction: false  // 告诉webpack构建时不使用箭头函数
 *
 *
 * { test: /\.txt$/, use: 'raw-loader' },
 * 	  “嘿，webpack 编译器，当你碰到「在 require()/import 语句中被解析为 ‘.txt’ 的路径」时，在你对它打包之前，先使用 raw-loader 转换一下。
 */
module.exports = {
	// 程序主入口文件
	entry: './src/main.js',
	// 出口文件, 指定打包后的目录
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
		environment: {
			arrowFunction: false,
		},
	},
	module: {
		// 指定加载规则
		rules: [
			{ test: /\.txt$/, use: 'raw-loader' },
			{
				test: /\.js$/,
				exclude: /(node_modules)/, // 排除的文件, 不需要打包
				use: [
					{
						loader: 'babel-loader', // 指定加载器
						options: {
							presets: [
								[
									'@babel/preset-env', // 设置预定义环境
									{
										targets: {
											chrome: '90', // 要兼容的目标浏览器版本
										},
										corejs: 3, // 只当corejs版本（核心cpu）
										useBuiltIns: 'usage', // 按需加载
									},
								],
							],
						},
					},
				],
			},
			// 配置less-loader, 代码转换
			{
				test: /\.less$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									[
										'postcss-preset-env',
										{
											browsers: 'last 2 versions ',
										},
									],
								],
							},
						},
					},
					'less-loader',
				],
			},
			// 配置vue-loader
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
		],
	},
	// 启用插件
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			minify: {
				// 去空格
				collapseWhitespace: true,
				// 去注释
				removeComments: true,
			},
		}),
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
	],
	mode: 'production', // production生产环境  | development开发环境
	devServer: {
		port: 3000, // 指定打开的页面端口
		open: true, // 打包结束之后，自动打开页面
	},
};
