const express = require("express");
const {
  createUser,
  updateUserCart,
  getCart,
  addFavorite,
  removeFavorite,
  getFavorites
} = require("../controllers/users");

const router = express.Router();


router.put("/:username/cart", (req, res) => {
  const { username } = req.params;
  const { newCart } = req.body;
  updateUserCart(username, newCart)
    .then((user) => {
      user
        ? res.json(user)
        : res.status(400).json({ message: "Error updating cart" });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
});

router.get("/:username/cart", (req, res) => {
  const { username } = req.params;
  getCart(username)
    .then((cart) => {
      cart
        ? res.json(cart)
        : res.status(400).json({ message: "Error updating cart" });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
});


router.post("/", (req, res) => {
  const user = req.body;

  createUser(user)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });

});


router.get("/:username/favorites",(req,res) => {
  const { username } = req.params;

  getFavorites(username)
    .then((favorites) => {
      res.status(200).json(favorites);

    })
    .catch((err) => {res.status(404).json({ message: err.message });});

});

router.put("/:username/favorites",(req,res) => {
  const { username } = req.params;

  const { bookId } = req.body;

  addFavorite(username, bookId)
    .then((favorites) => {
      res.status(200).json(favorites);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
}
);

router.put("/:username/favorites/remove",(req,res) => {
  const { username } = req.params;

  const { bookId } = req.body;

  removeFavorite(username, bookId)
    .then((favorites) => {
      res.status(200).json(favorites);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    }
    );
});



module.exports = router;
