const express = require("express");
const router = express.Router();
const { authenticate } = require("../middleware/authMiddleware");
const productController = require("../controllers/productController");
const cartController = require("../controllers/cartController");
const orderController = require("../controllers/orderController");
const reportController = require("../controllers/reportController");
const authController = require("../controllers/authController");

// auth Routes
router.post("/register", authController.register);
router.post("/login", authController.login);

// Product Routes
router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);
router.post("/products", authenticate, productController.addProduct);
router.put("/products/:id", authenticate, productController.updateProduct);
router.delete("/products/:id", authenticate, productController.deleteProduct);

// Cart Routes
router.post("/cart", authenticate, cartController.addToCart);
router.get("/cart", authenticate, cartController.getUserCart);
router.delete("/cart/:id", authenticate, cartController.removeFromCart);

// Order Routes
router.post("/orders", authenticate, orderController.placeOrder);
router.get("/orders", authenticate, orderController.getUserOrders);

// Report Routes
router.get(
  "/reports/daily-revenue",
  authenticate,
  reportController.dailyRevenue
);
router.get(
  "/reports/sales-by-category",
  authenticate,
  reportController.salesByCategory
);

module.exports = router;
