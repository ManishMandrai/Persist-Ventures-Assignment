const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Endpoint to add user data and find matches
router.post('/match', async (req, res) => {
  try {
    const { name, offer, request } = req.body;

    // Save the user's input in the database
    const newUser = new User({ name, offer, request });
    await newUser.save();

    // Find potential matches based on request and offer
    const matches = await User.find({
      offer: request,
      _id: { $ne: newUser._id } // Exclude the current user
    });

    res.status(200).json({ matches });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
