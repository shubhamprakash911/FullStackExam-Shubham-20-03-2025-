require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/db");
const connectMongoDB = require("./config/mongo");
const routes = require("./routes/index");

const app = express();
app.use(express.json());

//health check api
app.get("/", (req, res) => {
  res.send("API is running");
});

// Routes
app.use("/api", routes);

connectDB();
connectMongoDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
