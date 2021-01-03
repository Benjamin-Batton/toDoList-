import errorNames from "../../const/_const.js";
import createError from "../../utils/createError.js";

export const validateResponse = async (res) => {
  try {
    const response = await res.json();
    return {response,status:res.status}
  
  } catch (error) {
    throw new createError({
      name: errorNames.VALIDATION_ERROR,
      status: 400,
      message: error,
    });
    // throw new Error(error);
  }
};
