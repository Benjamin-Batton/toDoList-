const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const paths = require("../../Webpack-Project1/utils/paths.js");
const http = require("http");
const https = require("https");
const ws = require("ws");
const watch = require("node-watch");

const sslOptions = {
	//REFACTORING
	key: fs.readFileSync(path.resolve(paths.rootPath, "ssl-local/cert.key")),
	cert: fs.readFileSync(path.resolve(paths.rootPath, "ssl-local/cert.pem")),
};

function createServer() {
	const server = {};
	const port = 51984;
	// REFACTORING GETTER FOR PORTß
	// const port = env.HTTPS_BY_NODE ? 51984 : 51984;

	server.app = express();
	server.useMiddlewares = (middlewares) => {
		middlewares.forEach((fn) => fn(server.app));

		return server;
	};
	server.start = function startServer() {
		return new Promise((resolve) => {
			mongoose.connect(
				"mongodb+srv://Archi:anton_1995450241@cluster0-h0liu.mongodb.net/todoapp?retryWrites=true&w=majority",
				{
					useNewUrlParser: true,
					useUnifiedTopology: true,
					useCreateIndex: true,
				}
			);
			server.app.listen(port, () => {
				console.log(
					//REFACTORING
					// `Server started
					// ${ env.HOT_RELOAD ? "with" : "without"}
					// hot reload on port ${port} .`
					`Server started with hot reload on port ${port} .`
				);

				resolve(server);
			});
		});
	};

	return server;
}

module.exports = createServer;
