const express = require("express");
const { getUser, createUser, updateUserCart } = require("../controllers/users");

const router = express.Router();

router.post("/:username", (req, res) => {
  const { username } = req.params;
  const { password } = req.body;

  getUser(username,password).then((user) => {
    user?
      res.json(user):
      res.status(400).json({ message: "Invalid password" });
  }
  ).catch((err) => {
    res.status(404).json({ message: err.message });
  });
});

router.put("/:username/cart", (req, res) => {
  const { username } = req.params;
  const { newCart } = req.body;
  updateUserCart(username,newCart).then((user) => {
    user?
      res.json(user):
      res.status(400).json({ message: "Error updating cart" });
  }
  ).catch((err) => {
    res.status(404).json({ message: err.message });
  }
  );
});


router.post("/", (req, res) => {
  const user = req.body;
  createUser(user).then((user) => { res.status(200).json(user);})
    .catch((err) => { res.status(400).json({ message: err.message }); });
});



module.exports = router;