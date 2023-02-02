const express = require("express");
const mongoose = require("mongoose");

const app = express();
constPort = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("debug", true);
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
