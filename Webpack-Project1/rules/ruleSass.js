const loaderCss = require('../loaders/loaderCss');
const loaderStyle = require('../loaders/loaderStyle');
const loaderPostcss = require('../loaders/loaderPostcss');
const loaderExtractCss = require('../loaders/loaderExtractCss');
const loaderSass = require('../loaders/loaderSass');
const {sourcePath,themePath} = require('../utils/paths');
const {getParamAsBoolean} = require('../utils/envParams');

module.exports = {
    test: /\.scss$/,
    include: [sourcePath],
    exclude: [themePath,/\.module\.scss$/],
    use: [
        // !getParamAsBoolean('CSS_EXTRACT') && loaderStyle,
        // getParamAsBoolean('CSS_EXTRACT') && loaderExtractCss,
        // loaderStyle,
         // loaderPostcss,
        // loaderExtractCss,
        // loaderCss,
        "style-loader",
        'css-loader',
        loaderSass,
    ],
};
