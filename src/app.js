// app.js

const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { moderationRoutes, filterRoutes, roleRoutes } = require('./routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Middleware
app.use(express.json());

// Routes
app.use('/moderation', moderationRoutes);
app.use('/filter', filterRoutes);
app.use('/role', roleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// End of app.js