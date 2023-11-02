const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  description: String,
  admin: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  tasks: [
    {
      type: mongoose.Types.ObjectId,

      ref: "Task",
    },
  ],
  collaborators: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Project = mongoose.model("Project", projectsSchema);
