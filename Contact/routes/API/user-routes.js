const router = require("express").Router();

const {
  createUser,
  getUserbyFirstName,
  getUserbyLastName,
  getUserbyEmail,
  getUserByPhone,
} = require("../controllers/userController");

//api/users

router
  .route("/")
  .get(getUserbyID)
  .get(getUserbyFirstName)
  .get(getUserbyLastName)
  .get(getUserbyEmail)
  .get(getUserByPhone)
  .post(createUser);

module.exports = router;
