const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// GET API - Returns a welcome message
app.get('/api/welcome', (req, res) => {
    res.json({ message: 'Welcome to our AWS CICD!', changes: "Master updated" });
});

// POST API - Accepts JSON data and responds with it
app.post('/api/data', (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).json({ error: 'Cred. are required' });
    }
    res.json({ message: 'Data received', data: { name, age } });
});

// Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

module.exports = app;
