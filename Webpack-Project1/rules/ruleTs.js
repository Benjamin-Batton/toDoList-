const loaderBabelTs = require('../loaders/loaderBabelTs');

module.exports = {
    test: /\.ts(x)?$/,
    exclude: /node_modules/,
    use: [
        loaderBabelTs,
        {
        loader: 'ts-loader',
        options: {
            transpileOnly: true,
        },
    }]
};