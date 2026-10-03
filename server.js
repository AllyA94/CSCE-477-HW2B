const express = require("express");

const app = express();
const PORT = 3000;

// Allow the server to read JSON
app.use(express.json());

// Serve index.html and script.js
app.use(express.static(__dirname));

// Login endpoint
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    // Server-side validation

    // Check for empty fields
    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required."
        });
    }

    // Check email
    if (!email.includes("@")) {
        return res.status(400).json({
            message: "Invalid email address."
        });
    }

    // Check password length
    if (password.length < 8) {
        return res.status(400).json({
            message: "Password must be at least 8 characters long."
        });
    }

    // Input passed server-side validation
    return res.status(200).json({
        message: "Login information passed validation."
    });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});