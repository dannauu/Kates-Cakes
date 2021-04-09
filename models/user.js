const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Enter a username between 6 and 32 characters",
    minlength: 6,
    maxlength: 32,
    unique: true
  },
  password: {
    type: String,
    required: "Please enter a password between 6 and 32 characters",
    minlength: 6,
    maxlength: 32,
  },
  dateJoined: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
