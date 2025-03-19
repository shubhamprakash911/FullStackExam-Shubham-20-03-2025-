const Product = require("../models/mongodb/product");

// Get daily revenue for the last 7 days
const dailyRevenue = async (req, res) => {
  try {
    const revenue = await Product.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(new Date().setDate(new Date().getDate() - 7)),
          },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          totalSales: { $sum: "$price" },
        },
      },
    ]);
    res.status(200).json({ revenue });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch revenue data", details: error.message });
  }
};

// MongoDB report: sales by category
const salesByCategory = async (req, res) => {
  try {
    const sales = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          totalSales: { $sum: "$price" },
        },
      },
    ]);
    res.status(200).json({ sales });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch sales data", details: error.message });
  }
};

module.exports = {
  dailyRevenue,
  salesByCategory,
};
