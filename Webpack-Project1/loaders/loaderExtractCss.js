const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const {getParamAsBoolean} = require('../utils/envParams');

module.exports = {
    loader: MiniCssExtractPlugin.loader,
    options: {
        hmr: true,
        reloadAll: true,
        // hmr: getParamAsBoolean('HOT_RELOAD'),
    },
};
