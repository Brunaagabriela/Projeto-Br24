const express = require("express");
const app = express();
const port = 8080;

// Middleware to parse POST data
app.use(express.urlencoded({extended: true}));

// POST route
app.post("/", (req, res) => {
	// Redirect to a GET route
	console.log("Received");
	res.redirect("https://brunagabriela-front.sa.ngrok.io");
});
 app.post("/install", (req, res) => {
 	console.log("Installing");
 	res.redirect("https://brunagabriela-front.sa.ngrok.io/install");
 });

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
