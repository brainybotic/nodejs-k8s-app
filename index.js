const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the root route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CET93 in Kubernetes</title>
      <style>
        body {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
          background-color: #f4f4f4;
        }
        h1 {
          font-family: Arial, sans-serif;
          color: #333;
        }
        img {
          max-height: 50vh; /* Set image height to 50% of viewport height */
          width: auto; /* Maintain aspect ratio */
        }
      </style>
    </head>
    <body>
      <h1>Hello from CET93 in Kubernetes!</h1>
      <img src="/cet93.png" alt="CET93 Logo">
    </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});