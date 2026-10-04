# CSCE-477-HW2B

# Secure Login Application

This project is a basic login application created as part of an OWASP Juice Shop security assignment. The purpose of the project is to demonstrate basic secure design practices for a user authentication system.

## Features

- Email and password login form
- Client-side input validation using JavaScript
- Server-side validation using Node.js and Express
- Checks that both fields are completed
- Checks for a valid email format
- Requires passwords to be at least 8 characters long
- Prevents security from relying only on client-side validation

## Technologies Used

- HTML
- JavaScript
- Node.js
- Express

## Project Structure

    juice-shop-secure-login/
    ├── index.html
    ├── script.js
    ├── server.js
    ├── package.json
    ├── package-lock.json
    ├── .gitignore
    └── README.md

## Running the Project

1. Clone or download the repository.
2. Make sure Node.js and npm are installed.
3. Open a terminal in the project directory.
4. Install the required dependencies:

    npm install

5. Start the server:

    npm start

6. Open the following address in a browser:

    http://localhost:3000

## Input Validation

The application validates login information on both the client and server. The email and password fields cannot be empty, the email must contain an `@` symbol, and the password must contain at least eight characters.

Server-side validation is repeated because client-side JavaScript can potentially be modified or bypassed by a user.

## Purpose

This project demonstrates how basic validation can be incorporated into a login system and reinforces the importance of performing security checks on the server rather than relying only on the browser.

<img width="1087" height="716" alt="image" src="https://github.com/user-attachments/assets/d6e4c321-7896-40f6-bdfe-c3a0127bf768" />
