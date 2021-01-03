const TerserPlugin = require('terser-webpack-plugin');
const OptimizecssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    runtimeChunk: {
        name: 'runtime',
    },
    chunkIds: 'named',
    moduleIds: 'hashed',
    mergeDuplicateChunks: true,
    splitChunks: {
        chunks: 'all',
    },
    minimizer: [
        new TerserPlugin(),
        new OptimizecssAssetsWebpackPlugin(),
    ],
};