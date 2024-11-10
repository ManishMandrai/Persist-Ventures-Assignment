const mongoose = require('mongoose');

const connectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  offer: { type: String, required: true },
  request: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Connection', connectionSchema);
