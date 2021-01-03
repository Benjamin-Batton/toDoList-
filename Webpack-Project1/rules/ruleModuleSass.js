const {sourcePath} = require('../utils/paths.js');
const loaderCss = require('../loaders/loaderCss.js');
const loaderSass = require('../loaders/loaderSass.js');

module.exports = {
    test: /\.module.scss$/,
    include: [sourcePath],
    // exclude: [themePath],
    use: [

      "style-loader",
    // !getParamAsBoolean('CSS_EXTRACT') && loaderStyle,
    // getParamAsBoolean('CSS_EXTRACT') && loaderExtractCss,
    // loaderStyle,


    // loaderExtractCss,
    loaderCss,
    // loaderPostcss,
    loaderSass,
    // 'sass-loader'

    ],
}
