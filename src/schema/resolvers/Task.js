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
};

exports.deleteTask = async function (root, { id }) {
  const deletion = await taskModel.deleteOne({ _id: id });

  if (deletion.deletedCount === 0) {
    throw new Error("can not find task with id " + id);
  }
};

exports.updateTask = async function (root, args) {
  const updation = await taskModel.updateOne({ _id: args.id }, { ...args });

  if (updation.nModified === 0) {
    throw new Error("can not find task with id " + args.id);
  }
};
