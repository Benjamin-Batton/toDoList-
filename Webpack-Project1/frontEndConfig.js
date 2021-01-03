const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const path = require("path");
const webpackConfig = require(path.resolve(__dirname, "./webpack.config.js"));
const {
  choosePort,
  createCompiler,
  prepareProxy,
  prepareUrls,
} = require("react-dev-utils/WebpackDevServerUtils");
let serverConfig = { 
    host: "192.173.17.11",
    port: "7711",
    log: console.log("server will be started") };
// let complier = createCompiler({
//   webpackConfig,
//   webpack,
// });
let complier = webpack(webpackConfig);
let start = async () => {
    try{
        let webpackServer = new webpackDevServer(complier, serverConfig);
        webpackServer.listen("0", "0.0.0.0", (err) => {
           if(err){
               return console.log(err)
           }
        });
    } catch(error){
     throw new Error(error.message)
    }
 
}
start();
