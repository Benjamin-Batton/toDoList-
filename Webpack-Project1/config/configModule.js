const ruleJs_x = require('../rules/ruleJs_x');
const ruleJsx = require('../rules/ruleJsx');
const ruleSass = require('../rules/ruleSass');
const ruleTs = require('../rules/ruleTs');
const ruleModuleSass = require('../rules/ruleModuleSass');
const ruleImage = require('../rules/ruleImages');
const ruleSvgInline = require('../rules/ruleSvgInline');
const ruleSassTheme = require('../rules/ruleSassTheme');
const ruleFonts = require('../rules/ruleFonts');
const ruleHtml = require('../rules/ruleHtml');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ruleCss = require('../rules/ruleCss');

let isDev = process.env.NODE_ENV === 'development';
let isProd = !isDev;

module.exports = {
    rules: [ruleImage,ruleSvgInline,ruleTs,ruleJs_x,ruleHtml,ruleSass,ruleModuleSass,ruleSassTheme,ruleCss,ruleFonts],
};
