const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = new CircularDependencyPlugin({
    exclude: /node_modules/,
    failOnError: true,
    allowAsyncCycles: false,
    cwd: process.cwd(),
});

