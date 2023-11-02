const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
  text: String,
  deadline: String,
  assignedTo: {
    type: mongoose.Types.ObjectId,

    ref: "User",
  },
  project: {
    type: mongoose.Types.ObjectId,

    ref: "Project",
  },
  status: Number,
});

const Task = mongoose.model("Task", tasksSchema);
