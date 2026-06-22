const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const { login, signup } = require("./models/user"); // path to user.js

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.post("/api/login", login);
app.post("/api/signup", signup);

// Fallback: any unknown route goes to login.html
// Fallback route for unknown paths
app.get(/^\/.*$/, (req, res) => {
  res.sendFile(path.join(__dirname, "public/login.html"));
});



const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
