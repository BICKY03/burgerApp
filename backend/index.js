const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

