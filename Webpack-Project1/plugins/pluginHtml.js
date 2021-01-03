const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {templatePath} = require('../utils/paths');

module.exports = new HtmlWebPackPlugin({
    template: path.resolve(templatePath,'index.html'),
    inject: 'body',
});