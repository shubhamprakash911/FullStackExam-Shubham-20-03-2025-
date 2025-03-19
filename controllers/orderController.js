const Order = require("../models/sql/order");
const OrderItem = require("../models/sql/orderItem");

// Place an order
const placeOrder = async (req, res) => {
  try {
    const { orderItems } = req.body;
    const totalAmount = orderItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const order = await Order.create({
      userId: req.user.id,
      totalAmount: totalAmount,
    });
    const orderItemsWithOrderId = orderItems.map((item) => ({
      ...item,
      orderId: order.id,
    }));
    await OrderItem.bulkCreate(orderItemsWithOrderId);
    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to place order", details: error.message });
  }
};

// Get user orders
const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { userId: req.user.id } });
    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch orders", details: error.message });
  }
};

module.exports = {
  placeOrder,
  getUserOrders,
};
