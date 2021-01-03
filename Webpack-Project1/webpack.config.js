const pluginHot = require("./plugins/pluginHot");
const pluginHtml = require("./plugins/pluginHtml");
const pluginClean = require("./plugins/pluginClean");
const pluginDefine = require("./plugins/pluginDefine");
const pluginForkTs = require("./plugins/pluginForkTs");
const pluginForkTsNotifier = require("./plugins/pluginForkTsNotifier");
const pluginExtract = require("./plugins/pluginExtract");
const pluginAnalyzer = require("./plugins/pluginAnalyzer");
const pluginSpeedMeasure = require("./plugins/pluginSpeedMeasure");
const pluginCircularDependency = require("./plugins/pluginCircularDependency");
const webpack = require("webpack");
const paths = require("./utils/paths");
const { getENVParam, isProduction } = require("./utils/envParams");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ruleSass = require("./rules/ruleSass");
const ruleImage = require("./rules/ruleImages");
const ruleTs = require("./rules/ruleTs");
const loaderSvgInline = require("./loaders/loaderSvgInline");
const loaderCss = require("./loaders/loaderCss");
const loaderStyle = require("./loaders/loaderStyle");
const loaderPostcss = require("./loaders/loaderPostcss");
const loaderExtractCss = require("./loaders/loaderExtractCss");
const loaderSass = require("./loaders/loaderSass");
const { sourcePath, themePath } = require("./utils/paths");

module.exports = {
	mode: isProduction ? "production" : "development",
	// node: require('./config/configNode'),
	// stats: require('./config/configStats'),
	node: { fs: "empty" },
	entry: require("./config/configEntry"),
	output: require("./config/configOutput"),
	resolve: require("./config/configResolve"),
	devServer: require("./config/configDevServer"),
	devtool: "inline-source-map",
	performance: require("./config/configPerfomance"),
	optimization: require("./config/configOptimization"),
	module: require("./config/configModule"),
	//  {
	//       rules: [
	//         ruleImage,
	//         loaderSvgInline,
	//           ruleTs,
	// {
	//   test: /\.(js|jsx)$/,
	//   exclude: /node_modules/,
	//   use: {
	//     loader: "babel-loader",
	//     options: {
	//         "presets": ["@babel/preset-env", "@babel/preset-react"]
	//     },
	//   }
	// },
	// {
	//   test: /\.html$/,
	//   use: [
	//     {
	//       loader: "html-loader"
	//     }
	//   ]
	// },
	// Разобраться с форматом module.scss и просто scss т.к у меня два обработчика
	//     {
	//     test: /\.scss$/,
	//       // include: /node_modules/,
	//       include: [sourcePath],
	//     exclude: [themePath,/\.module\.scss$/],
	//     use: [
	//         "style-loader",
	//         // !getParamAsBoolean('CSS_EXTRACT') && loaderStyle,
	//         // getParamAsBoolean('CSS_EXTRACT') && loaderExtractCss,
	//         // loaderStyle,

	//         // loaderCss,
	//         // loaderExtractCss,
	//         // loaderPostcss,

	//         'css-loader',
	//         loaderSass
	//     ],

	// },
	// {
	//         test: /\.module.scss$/,
	//         // include: /node_modules/,
	//         // include: [sourcePath],
	//         // exclude: [themePath],
	//         use: [

	//           "style-loader",
	//         // !getParamAsBoolean('CSS_EXTRACT') && loaderStyle,
	//         // getParamAsBoolean('CSS_EXTRACT') && loaderExtractCss,
	//         // loaderStyle,

	//         // loaderExtractCss,
	//         loaderCss,
	//         // loaderPostcss,
	//         loaderSass,
	//         // 'sass-loader'

	//         ],
	//         // exclude: /\.module\.s[ac]ss$/,
	//     },
	//         {
	//             test: /\.css$/,
	//             use: [
	//                 "style-loader",

	//                 'css-loader'
	//             ],
	//         },
	//     ],
	// },
	plugins: [
		pluginClean,
		pluginHtml,
		pluginDefine,
		pluginHot,
		pluginExtract,
		pluginForkTs,
		pluginForkTsNotifier,
		// pluginAnalyzer,
		pluginCircularDependency,
		// new webpack.optimize.OccurrenceOrderPlugin(),
		// new webpack.HotModuleReplacementPlugin(),
		//
		// new webpack.NoEmitOnErrorsPlugin(),
		// Use NoErrorsPlugin for webpack 1.x
		// getParamAsBoolean('HOT_RELOAD') && pluginHot,
		// getParamAsBoolean('CSS_EXTRACT') && pluginExtract,
		// getParamAsBoolean('BUNDLE_ANALYZER') && pluginAnalyzer,
		// getParamAsBoolean('CIRCULAR_CHECK') && pluginCircularDependency,
	],
	// module: require('./config/configModule'),
};
