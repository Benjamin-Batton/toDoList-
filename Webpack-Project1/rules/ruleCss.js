const {sourcePath} = require('../utils/paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loaderExtractCss = require('../loaders/loaderExtractCss');
const loaderCss = require('../loaders/loaderCss');

module.exports = {
    test: /\.css$/,
    // include: [sourcePath],
    use: [
        "style-loader",
    //    loaderExtractCss,
    //    loaderCss,
    'css-loader'
    ],
};
