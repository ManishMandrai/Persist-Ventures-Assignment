// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
const connectionsRoutes = require('./routes/connections');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/connections', connectionsRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
