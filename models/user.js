const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  email: String,
  age: Number,
});

exports.User = new mongoose.model("User", userSchema);
