const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const connectionsRoutes = require('./routes/connections');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3000' // React development server
}));

app.use('/api/connections', connectionsRoutes);

app.get('/', (req, res) => {
  res.send('Community Platform API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
