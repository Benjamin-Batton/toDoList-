const loaderSassTheme = require('../loaders/loaderSassTheme');
const {themePath,stylePath} = require('../utils/paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    test: /\.scss$/,
    include: [themePath],
    use: [loaderSassTheme],
};
