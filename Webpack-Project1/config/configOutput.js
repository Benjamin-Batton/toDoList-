const {outputPath} = require('../utils/paths');
const {getParam,isProduction} = require('../utils/envParams');

// let publicUrl = getParam('PUBLIC_URL');
let publicUrl = false;
publicUrl = publicUrl === false? '/': publicUrl;

module.exports = {
    path: outputPath,
    filename: isProduction? '[name].[contenthash].bundle.js':'[name].[hash].devbundle.js',
    pathinfo: false,
    publicPath: '/',
    // publicPath: `${publicUrl}`,
};
