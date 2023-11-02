const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pwd: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  imgURL: String,
  tasks: [
    {
      // ObjectId of the specific comment
      type: mongoose.Types.ObjectId,

      // refering to the Comments Model
      ref: "Task",
    },
  ],
});

const User = mongoose.model("User", usersSchema);

module.exports = { User };
