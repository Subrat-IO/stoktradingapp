const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const User = require("./models/UserModel.js"); // <-- Correct user model path
const bcrypt = require("bcryptjs");

const HoldingModel = require("./models/HoldingModel.js");
const PositionModel = require("./models/PositionModel.js");
const OrderModel = require("./models/OrderModel.js");
const auth = require("./MiddleWare/auth.js");



require("dotenv").config();

const app = express();

// Parse JSON
app.use(express.json());

// CORS

app.use(
  cors({
    origin: "*", // Allow all domains
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);


// ====== ROUTES ======

// Get Holdings
app.get("/allholdings", async (req, res) => {
  const allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

// Get Positions
app.get("/allpositions", async (req, res) => {
  try {
    const allPosition = await PositionModel.find({});
    res.json(allPosition);
  } catch (error) {
    res.status(500).json({ message: "Error fetching positions", error });
  }
});

// Save New Order
app.post("/neworder", async (req, res) => {
  try {
    const newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.json({ message: "Order saved successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Error saving order", error });
  }
});
app.post("/register", async (req, res) => {
  try {
    console.log("📩 Register API hit:", req.body); // <--- DEBUG LOG

    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newUser = new User({ email, username, password });
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        email: newUser.email,
        username: newUser.username,
      },
    });
  } catch (error) {
    console.error("❌ Register error:", error); // <--- DEBUG LOG
    res.status(500).json({ message: "Registration failed", error });
  }
});




app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Check password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid)
      return res.status(400).json({ message: "Incorrect password" });

    // Create token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login Successful",
      token,
      user: {
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error("❌ Login Error:", error); // <--- debug
    res.status(500).json({ message: "Login Error", error });
  }
});


app.get("/profile", auth, async (req, res) => {
  res.json({
    message: "Welcome to your profile",
    user: req.user,
  });
});


// ===== START SERVER =====
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("DB Connection Failed:", error.message);
  }
};

startServer();
