const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log("Incoming Register Data:", req.body);

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password
    });

    const token = require('jsonwebtoken').sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      token,
      name: user.name,
      email: user.email
    });

  } catch (error) {
    console.log("REGISTER ERROR:", error);   // 🔥 THIS IS IMPORTANT
    res.status(500).json({ message: "Server error during registration" });
  }
});


// Login
router.post('/login', async (req,res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await user.matchPassword(password);
        if(!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ token, name: user.name, email: user.email });
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
