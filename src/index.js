// index.js

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { moderationRoutes, filterRoutes, roleRoutes } = require('./routes');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/moderation', moderationRoutes);
app.use('/filter', filterRoutes);
app.use('/role', roleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});