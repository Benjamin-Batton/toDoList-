const Tasks = require("../../models/Task.js");
const isLoggedIn = require("../../serverUtils/isLoggedIn.js");
const db = require("../../db.js");
const TaskModel = require("../../models/Task.js");
const errorNames = require("../../../frontEnd/src/const/_const.js");
const bcrypt = require("bcryptjs");
const DateVariables = require("../../serverUtils/tasksDateVariables.js");
const createError = require("../../../frontEnd/src/utils/createError.js");
const User = require("../../models/User.js");
const { resolve } = require("path");
const { reject } = require("core-js/fn/promise");
// in future add router and on main route "app" create routers and return them;

class tasksControllers {
  async getTask(req, res) {
    try {
      const tasksSelectedByDate = new DateVariables()[
        req.route.path.split("/")[1]
      ]();

      const tasks = await TaskModel.find({
        userId: `${req.user.id}`,
        time: tasksSelectedByDate,
      }).exec();
      if (!tasks) {
        throw new createError({
          name: errorNames.NOT_ALLOWED,
          status: 400,
          message: "Tasks is not will be finded",
        });
      }
      return tasks;
    } catch (error) {
      throw new createError({
        name: errorNames.NOT_ALLOWED,
        status: 400,
        message: error,
      });
    }
  }
  async updateTask(req, res) {
    try {
      const { task } = req.body;
      const id = req.params.id;
      const updatedTask = await TaskModel.findById(id).exec();
      if (!updatedTask) {
        if (error) {
          throw new createError({
            name: errorNames.NOT_FOUND,
            status: 400,
            message: "Task is not will be updated",
          });
        }
      }
      updatedTask.task = task;
      updatedTask.save();
      // return updatedTask;
      return {
        text: "task is updated",
      };
    } catch (error) {
      throw new createError({
        name: errorNames.NOT_ALLOWED,
        status: 400,
        message: error,
      });
    }
  }
  async deleteTask(req, res) {
    try {
      const id = req.params.id;
      const task = await TaskModel.findById(id).exec();
      if (!task) {
        throw new createError({
          name: errorNames.NOT_FOUND,
          status: 400,
          message: "Task with this id is not will be find",
        });
      }
      await task.remove();
      return {
        text: "Task is deleted",
      };
    } catch (error) {
      throw new createError({
        name: errorNames.NOT_ALLOWED,
        status: 400,
        message: error,
      });
    }
  }
  async createTask(req, res) {
    try {
      const { task } = req.body;
      const createdTask = await TaskModel.create({ userId: req.user.id, task });
      if (!createdTask) {
        throw new createError({
          name: errorNames.NOT_ALLOWED,
          status: 400,
          message: "Task is not created",
        });
      }
      return {
        text: "Task is created",
      };
    } catch (error) {
      throw new createError({
        name: errorNames.NOT_ALLOWED,
        status: 400,
        message: error,
      });
    }
  }
}

module.exports = new tasksControllers();
