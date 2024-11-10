const express = require('express');
const {
  createConnection,
  getConnections,
  findMatches
} = require('../controllers/connectionsController');

const router = express.Router();

// Route to create a new connection
router.post('/', createConnection);

// Route to get all connections
router.get('/', getConnections);

// Route to find matches based on offer/request criteria
router.get('/matches', findMatches);

module.exports = router;
