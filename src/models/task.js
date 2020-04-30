const mongoose = require("mongoose");

const TaskShema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    status: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: false,
    },
  },
  {
    id: true,
    _id: true,
  },
);

const TaskModel = mongoose.model("task", TaskShema);

module.exports = TaskModel;
