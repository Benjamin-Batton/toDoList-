const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {isProduction} = require('../utils/envParams');

module.exports = new MiniCssExtractPlugin({
    filename: isProduction? '[name].[contenthash].bundle.css' : '[name].bundle.css',
});
