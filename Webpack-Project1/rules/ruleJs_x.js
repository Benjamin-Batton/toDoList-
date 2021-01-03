
const { sourcePath } = require('../utils/paths');

const loaderBabel = require('../loaders/loaderBabel');
const loaderThreadParallel = require('../loaders/loaderThreadParallel');

module.exports = {
    test: /\.(js|jsx)?$/,
    exclude: /node_modules/,
    // include: [sourcePath],
    // use: [loaderThreadParallel, loaderBabel],
    use: [loaderBabel],
} ;