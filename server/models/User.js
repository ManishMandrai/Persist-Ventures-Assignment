const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  offer: { type: String, required: true },
  request: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
