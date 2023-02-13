const router = require("express").Router();

const {
  createUser,
  // getUserbyFirstName,
  // getUserbyLastName,
  // getUserbyEmail,
  // getUserByPhone,
} = require("../../controllers/user-controller.js");

//api/users

router.route("/").post(createUser);
// .get(getUserbyFirstName)
// .get(getUserbyLastName)
// .get(getUserbyEmail)
// .get(getUserByPhone);

module.exports = router;
