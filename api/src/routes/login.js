const express = require("express");
const { logIn } = require("../controllers/login");

const router = express.Router();


router.post("/:username", (req, res) => {
  const { username } = req.params;
  const { password } = req.body;

  logIn(username, password)
    .then((user) => {
      user
        ? res.json(user)
        : res.status(400).json({ message: "Invalid password" });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
});

module.exports = router;