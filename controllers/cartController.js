const Cart = require("../models/mongodb/cart");

// Add product to cart
const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(userId);
    const { productId, quantity } = req.body;
    const cartItem = await Cart.findOne({ userId, productId });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      await Cart.create({ userId, productId, quantity });
    }

    res.status(200).json({ message: "Product added to cart" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to add to cart", details: error.message });
  }
};

// Get user cart
const getUserCart = async (req, res) => {
  try {
    const cartItems = await Cart.find({ userId: req.user.id });
    res.status(200).json(cartItems);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to get cart", details: error.message });
  }
};

// Remove product from cart
const removeFromCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product removed from cart" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to remove from cart", details: error.message });
  }
};

module.exports = {
  addToCart,
  getUserCart,
  removeFromCart,
};
