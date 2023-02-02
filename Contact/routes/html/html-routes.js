const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/addUser", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/addUser.html"));
});

router.get("/user", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/user.html"));
});

module.exports = router;
