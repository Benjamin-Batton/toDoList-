 const {styleCssPath} = require('../utils/paths');
 module.exports = {
     loader: 'postcss-loader',
     options: {
         parser: 'postcss-scss',
         plugins: () => [
             // https://github.com/postcss/postcss-import
             require('postcss-import')({
                 path: [styleCssPath],
             }),

             // https://github.com/mummybot/postcss-strip-inline-comments
             require('postcss-strip-inline-comments')(),

             // https://github.com/jonathantneal/postcss-advanced-variables
             require('postcss-advanced-variables')(),

             // https://github.com/MadLittleMods/postcss-css-variables
             require('postcss-custom-properties')({
                 // preserve: true,
             }),

             require('postcss-nested')(),
             require('postcss-automath')(),
             require('autoprefixer')(),
         ],
     },
 };