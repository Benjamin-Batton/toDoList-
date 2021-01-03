const validController = (route, authControllers) => {
  const oneController = route.oneController;
  const routeController = oneController
    ? authControllers[`${oneController}Controller`]
    : authControllers[`${route.name}Controller`];

  if (!routeController) {
    throw new createError({
      name: errorNames.NOT_ALLOWED,
      status: 400,
      message: "Controller is not found",
    });
  }
  return routeController;
};

module.exports = validController;
