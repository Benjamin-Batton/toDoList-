module.exports = {
    loader: 'css-loader',
    options: { 
        importLoaders: 1,
        modules: true,
        sourceMap: true 
    },
    include: /\.module\.css$/,
    // options: {
    //     importLoaders: 1,
    //     modules: true,
    //     localIdentName: '[folder]__[local]',
    // },
};