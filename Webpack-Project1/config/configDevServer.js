const {getParamAsNumber,getParamAsBoolean} = require('../utils/envParams');
const paths = require('../utils/paths');
const path = require('path');

module.exports = {
    // hot: getParamAsBoolean('HOT_RELOAD'),
    // port: getParamAsNumber('DEV_SERVER_PORT'),
    contentBase: path.resolve(paths.rootPath,'/frontEnd/src/'),
    compress:true,
    hot: true,
    // host:'0.0.0.0',
    port: 8083,
    open: true,
    historyApiFallback: true,
    // contentBase: path.resolve(paths.rootPath,'dist'),
    // contentBase: "dist",
    // stats: 'errors-only',
    // overlay: true,
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Acces-Control-Allow-Credentials': 'true',
    // },
    // compress: true,
    // watchOptions: {
    //     aggregateTimeout: getParamAsNumber('AGREGATION_TIMEOUT'),
    //     aggregateTimeout: 0,
    // },
    // clientLogLevel: 'none',
    // historyApiFallback: true,
};