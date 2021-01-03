const pluginHot = require('./plugins/pluginHot');
const pluginHtml = require('./plugins/pluginHtml');
const pluginClean = require('./plugins/pluginClean');
const pluginDefine = require('./plugins/pluginDefine');
const pluginExtract = require('./plugins/pluginExtract');
const pluginAnalyzer = require('./plugins/pluginAnalyzer');
const pluginSpeedMeasure = require('./plugins/pluginSpeedMeasure');
const pluginCircularDependency = require('./plugins/pluginCircularDependency');
const webpack = require('webpack');
const paths = require('./utils/paths');
const {getParam, getParamAsBoolean, isProduction} = require('./utils/envParams');

module.exports = {
    // mode: getParam('NODE_ENV'),
    mode: "development",
    // node: require('./config/configNode'),
    // stats: require('./config/configStats'),
    node: {fs: 'empty'},
    entry: require('./config/configEntry'),
    output: require('./config/configOutput'),
    resolve: require('./config/configResolve'),
    devServer: require('./config/configDevServer'),
    devtool: 'source-map',
    performance: require('./config/configPerfomance'),
    optimization: require('./config/configOptimization'),
    plugins: [
        pluginClean,
        pluginHtml,
        pluginDefine,
        pluginHot,
        pluginExtract,
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
    ].filter(Boolean),
    module: require('./config/configModule'),

};