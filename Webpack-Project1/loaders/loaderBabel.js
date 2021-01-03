// const {getParamAsBoolean} = require('../utils/envParams');

module.exports = {
    loader: 'babel-loader',
    options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        // plugins: [getParamAsBoolean('HOT_RELOAD') && 'react-hot-loader/babel',
        plugins: [
            'react-hot-loader/babel',
            ['@babel/plugin-proposal-decorators', {legacy: true}],
            ['@babel/plugin-proposal-class-properties', {loose: true}],
            'lodash',
        ]
    },
};