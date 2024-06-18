const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors module

const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000; // Use a different port from your React app 

// Middleware
app.use(cors()); // Enables CORS for all requests
app.use(bodyParser.json());

// Database connection
const sequelize = new Sequelize('postgres://postgres:Dillydally@localhost:5432/pokemon_comments', {
  logging: console.log, // Enables SQL query logging
  dialectOptions: {
    connectTimeout: 10000 // sets timeout period for connections in milliseconds
  }
});






sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));


  app.get('/collection/:id', (req, res) => {
    try {
      // If there are any synchronous errors, they will be caught by the try-catch block
      res.json({ 
        message: `Hello! Received ID: ${req.params.id}`,
        status: 200
      });
    } catch (error) {
      res.status(500).json({ 
        error: error.message,
        status: 500
      });
    }
  });

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });