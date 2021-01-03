const {imagePath} = require('../utils/paths');
const loaderStaticFiles = require('../loaders/loaderStaticFiles');
module.exports = {
    test: /\.(png|jpg|gif)$/,
    // include: [imagePath],
    use:[loaderStaticFiles],
};