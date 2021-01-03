const errorNames = require("../../const/_const.js");
const createError = require("../../utils/createError.js");

export const Request = async ({
  url,
  method = "GET",
  body = null,
  headers = {},
}) => {
  try {
    if (body) {
      body = JSON.stringify(body);
      headers["Content-Type"] = "application/json";
    }
    console.log(url, body, method, headers);
    const response = await fetch(url, {
      method,
      body,
      headers,
    });
    return response;
    //  response = await response;
    //  console.log(response)
  } catch (error) {
    throw new createError({
      name: errorNames.NOT_ALLOWED,
      status: 400,
      message: error,
    });
  }
};
