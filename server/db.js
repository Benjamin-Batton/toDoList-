const { promisify } = require("util");
const Tasks = require("./models/Task.js");

const db = {
  get(module) {
    return promisify(module).bind(Tasks);
  },
  set(module) {
    return promisify(module);
  },
  delete(module) {
    return promisify(module);
  },
  modify(module) {
    return promisify(module);
  },
  getAllTasks(params, taskTimeValue) {
    return this.get(Tasks.find)(params);
  },
};

module.exports = db;
