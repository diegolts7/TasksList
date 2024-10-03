const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
});

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;
