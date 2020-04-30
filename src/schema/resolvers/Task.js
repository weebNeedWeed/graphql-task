const taskModel = require("../../models/task");
const { allowedStatuses } = require("./../../constants/task");

exports.getAllTasks = async function () {
  return await taskModel.find({});
};

exports.addTask = async function (root, args) {
  const { description, status, title } = args;

  if (!allowedStatuses.includes(status)) {
    throw new Error(`${status} is an invalid status`);
  }

  const newTask = new taskModel({
    description,
    status,
    title,
  });
  await newTask.save();

  return newTask;
};
