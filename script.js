const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async function (event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Client-side validation
    if (email === "" || password === "") {
        message.textContent = "Email and password are required.";
        return;
    }

    if (!email.includes("@")) {
        message.textContent = "Please enter a valid email address.";
        return;
    }

    if (password.length < 8) {
        message.textContent =
            "Password must be at least 8 characters long.";
        return;
    }

    // Send the information to the server
    try {
        const response = await fetch("/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();

        message.textContent = data.message;

    } catch (error) {
        message.textContent = "Unable to connect to the server.";
    }
});