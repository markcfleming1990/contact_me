const { User } = require("../models");

const userController = {
  createUser({ Body }, res) {
    User.create(Body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
};

module.exports = userController;
