const dotenv = require("dotenv");
dotenv.config();
const webpack = require("webpack");
const graphQlHTTP = require("express-graphql");
const schema = require("./schema/schemaGql");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackDevMiddleware = require("webpack-dev-middleware");
const WbpConfig = require("../Webpack-Project1/webpack.config");
const { dist, rootPath } = require("../Webpack-Project1/utils/paths");
const compiler = webpack(WbpConfig);
const { Router } = require("express");
const router = Router();
const instance = webpackDevMiddleware(compiler, dist);
// const staticMiddleware = express.static(dist);

const handleCors = require("./serverMiddlewares/handleCors.js");
const handleAppRoutes = require("./serverMiddlewares/handleAppRoutes.js");
const handleAuthRoutes = require("./serverMiddlewares/handleAuthRoutes.js");
const handleExpressJson = require("./serverMiddlewares/handleExpressJson.js");
const handleJsonRequests = require("./serverMiddlewares/handleJsonRequests.js");
const handlePassport = require("./serverMiddlewares/handlePassport.js");
const handleProtectionHeaders = require("./serverMiddlewares/handleProtectionHeaders.js");
const handleUrlEncodedRequests = require("./serverMiddlewares/handleUrlEncodedRequests.js");
const createServer = require("./serverUtils/createServer.js");
const createError = require("../frontEnd/src/utils/createError");
const { errorNames } = require("../frontEnd/src/const/_const");
// app.use(instance);
// app.use(webpackHotMiddleware(compiler, {
//     log: console.log('server started'),
// }));
// app.use(staticMiddleware);

Promise.resolve()
  .then(() => createServer())
  .then((server) =>
    server.useMiddlewares([
      /**
       * The order is meaningful.
       *
       * 1. look for the assets (if req.originalUrl has '.') and send 404 when not found
       * 2. Handle routes from "const/apiRoutes" (POST/GET/PUT etc.)
       * 3. Handle all GET requests (send template.html with rendered markup and window.INITIAL_DATA
       * included for store hydration on client).
       * When route is not found just send rendered markup of 404 page (no default redirects).
       * When error occurred send rendered markup of 500 page (also no default redirects).
       * 4. For all missing POST/PUT etc. requests send 404 with JSON
       * {"errorName":"NOT_FOUND","errorMessage":"Route [method] [url] was not found"}
       *
       */
      handleCors,
      handlePassport,
      handleProtectionHeaders,
      handleExpressJson,
      handleJsonRequests,
      handleUrlEncodedRequests,
      handleAppRoutes,
      handleAuthRoutes,
    ])
  )
  .then((server) => server.start())
  .catch((error) => {
    console.error(error);
    process.exit(1);
    throw new createError({
      name: errorNames.NOT_ALLOWED,
      status: 500,
      message: error,
    });
  });

// app.use('/toDoList',require('./routes/toDoList.route.js'));
// app.use('/graphql',graphQlHTTP({
//     schema,
//     graphiql: true,
// }));
//test
//testPul
//ripply
