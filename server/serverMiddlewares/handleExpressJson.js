const express = require("express");

const handleExpressJson = (app) => {
  app.use(express.json({ extended: true }));
};

module.exports = handleExpressJson;
