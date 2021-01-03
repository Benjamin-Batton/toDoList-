const path = require("path");
const { sourcePath, rootPath } = require("../utils/paths");

module.exports = {
  app: [
    "webpack-hot-middleware/client?reload=true",
    "@babel/polyfill",
    "@babel/core",
    path.resolve(sourcePath, "index.jsx"),
  ],
  // app: ['webpack-hot-middleware/client?reload=true',path.resolve(sourcePath,'index.tsx')],
};
