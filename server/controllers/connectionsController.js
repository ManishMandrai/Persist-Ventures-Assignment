const Connection = require('../models/Connection');

// Create a new connection entry
exports.createConnection = async (req, res) => {
  try {
    const { name, offer, request } = req.body;
    const newConnection = new Connection({ name, offer, request });
    await newConnection.save();
    res.status(201).json(newConnection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all connections and find matches based on offers and requests
exports.getConnections = async (req, res) => {
  try {
    const connections = await Connection.find();
    res.status(200).json(connections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Find matches based on offer/request criteria
exports.findMatches = async (req, res) => {
  try {
    const { offer, request } = req.query;
    const matches = await Connection.find({
      offer: request,  // Match request to another user's offer
      request: offer   // Match offer to another user's request
    });
    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
