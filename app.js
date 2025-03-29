const express = require('express');
const app = express();
const something = require("express").Router()
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// GET API - Returns a welcome message
app.get('/api/welcome', (req, res) => {
    res.json({ message: 'Welcome to our AWS CICD!', changes: "With AMAN AGAin" });
});

// POST API - Accepts JSON data and responds with it
app.post('/api/data', (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).json({ error: 'Cred. are required' });
    }
    res.json({ message: 'Data received', data: { name, age } });
});

app.get("/check", (req, res) => {
    let value = req.query.value;
    
    if (value) {
      if (value > 0) {
        if (value < 100) {
          if (value % 2 === 0) {
            if (value % 5 === 0) {
              if (value % 3 === 0) {
                if (value.toString().length === 2) {
                  if (value > 10) {
                    if (value < 90) {
                      if (value !== 50) {
                        if (value % 4 === 0) {
                          if (value % 6 !== 0) {
                            if (value % 7 !== 0) {
                              if (value % 9 !== 0) {
                                if (value % 11 !== 0) {
                                  if (value % 13 !== 0) {
                                    if (value % 17 !== 0) {
                                      if (value % 19 !== 0) {
                                        if (value !== 88) {
                                          return res.json({ message: "Valid Value!" });
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return res.json({ message: "Invalid Value!" });
  });

app.post('/api/aman', (req, res) => {

    const api_keys = "hello+aman+this_is_api+keys"
    
    res.json({ message: 'Yess!!, its working!' });
});

// Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

module.exports = app;
