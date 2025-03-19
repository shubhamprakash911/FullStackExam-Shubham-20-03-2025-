const bcrypt = require("bcrypt");
const User = require("../models/sql/user");
const generateToken = require("../utils/generateToken");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // if user already exists with the email
    const userPresent = await User.findOne({ where: { email } });
    if (userPresent) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.json({ token: generateToken(user.id) });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({ token: generateToken(user.id) });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { register, login };
