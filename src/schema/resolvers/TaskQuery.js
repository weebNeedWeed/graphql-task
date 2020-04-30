const taskModel = require("./../../models/task");

exports.getAllTasks = async function () {
  return await taskModel.find({});
};
