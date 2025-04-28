// Import required modules
const express = require("express");
const path = require("path");

// Initialize Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Root route - serves the main HTML page with navbar
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
    // Redirect to GitHub repository for Climate Crisis
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Climate Crisis Assignment</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <header>
                <nav class="navbar">
                    <a href="/">Home</a>
                    <a href="/climate-crisis" class="active">Climate Crisis</a>
                    <a href="/typesetting">Typesetting</a>
                    <a href="/four-algorithms">Four Algorithms</a>
                </nav>
            </header>
            <main class="container">
                <h1>Climate Crisis Assignment</h1>
                <p>This is the Climate Crisis assignment page. Click the button below to view the GitHub repository.</p>
                <a href="https://github.com/yoo-hec/Climate-Crisis" class="btn" target="_blank">View GitHub Repository</a>
            </main>
        </body>
        </html>
    `);
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
    // Redirect to GitHub repository for Typesetting
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Typesetting Assignment</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <header>
                <nav class="navbar">
                    <a href="/">Home</a>
                    <a href="/climate-crisis">Climate Crisis</a>
                    <a href="/typesetting" class="active">Typesetting</a>
                    <a href="/four-algorithms">Four Algorithms</a>
                </nav>
            </header>
            <main class="container">
                <h1>Typesetting Assignment</h1>
                <p>This is the Typesetting assignment page. Click the button below to view the GitHub repository.</p>
                <a href="https://github.com/EdwardSnowdensDad/st-huxleys-college" class="btn" target="_blank">View GitHub Repository</a>
            </main>
        </body>
        </html>
    `);
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
    // Redirect to GitHub repository for Four Algorithms
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Four Algorithms Assignment</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <header>
                <nav class="navbar">
                    <a href="/">Home</a>
                    <a href="/climate-crisis">Climate Crisis</a>
                    <a href="/typesetting">Typesetting</a>
                    <a href="/four-algorithms" class="active">Four Algorithms</a>
                </nav>
            </header>
            <main class="container">
                <h1>Four Algorithms Assignment</h1>
                <p>This is the Four Algorithms assignment page. Click the button below to view the GitHub repository.</p>
                <a href="https://github.com/EdwardSnowdensDad/four-sorting" class="btn" target="_blank">View GitHub Repository</a>
            </main>
        </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});