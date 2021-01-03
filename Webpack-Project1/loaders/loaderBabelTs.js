module.exports = {
    loader: 'babel-loader',
    options: {
        cacheDirectory: true,
        presets: [
            // "react",
            // [
            //     "es2015",
            //     {
            //         "modules": false
            //     }
            // ],
            // "es2016",
            "@babel/env",
            "@babel/react"
        ]
    }
};