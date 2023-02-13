const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Must match an email address!"],
  },
  phone: {
    type: String,
  },
});

const User = model("User", userSchema);

module.exports = User;
