const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');

module.exports = new ForkTsCheckerNotifierWebpackPlugin({
    title: 'TypeScript', 
    excludeWarnings: false,
});
