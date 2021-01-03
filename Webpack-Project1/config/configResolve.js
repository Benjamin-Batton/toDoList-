const path = require('path');
const {rootPath,sourcePath} = require('../utils/paths');

module.exports = {
  modules: [sourcePath,path.resolve(rootPath,'node_modules')],
  extensions: ['.tsx', '.ts', '.js'],
  alias: {
      'react-dom': '@hot-loader/react-dom',
  }
};