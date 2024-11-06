const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse POST data
app.use(express.urlencoded({ extended: true }));

// POST route
app.post('/', (req, res) => {
    // Process the request data if needed
    const data = req.body; // assume you receive some data
    // Redirect to a GET route
    res.redirect('https://brunagabriela-front.sa.ngrok.io');
});
app.post('/install', (req, res) => {
    res.redirect('https://brunagabriela-front.sa.ngrok.io/install.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
