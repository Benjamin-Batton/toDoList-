const DotEnv = require("dotenv-webpack");
const path = require("path");
const { rootPath } = require("./paths");
let envParams = null;
const setEnvParams = () => {
  if (!envParams) {
    envParams = new DotEnv({
      path: path.resolve(__dirname, "../../.env"),
      safe: false,
      defaults: false,
      systemvars: false,
    });
  }
};
const getENVParam = (param) => {
  setEnvParams();
  return envParams.definitions[`process.env.${param}`] || false;
};

const getParamAsNumber = (param) => Number(getENVParam(param));
const getParamAsBoolean = (param) => getENVParam(param) === "true";

module.exports = {
  getENVParam,
  getParamAsBoolean,
  getParamAsNumber,
  isProduction: getENVParam("NODE_ENV") === "production",
};
