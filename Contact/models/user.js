const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const User = model("User", UserSchema);

module.exports = User;
