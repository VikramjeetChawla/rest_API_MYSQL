const express = require('express');
const bodyParser = require('body-parser');
const mediaRoutes = require('./routes/mediaRoutes.js');

const app = express(); 

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', mediaRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});