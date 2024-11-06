// const endpoint = require("./endpoints/endpoint");
// function main() {
//   console.log("hello world");
//   console.log(endpoint());
// }
// main();
// endpoint();
// import http from "http";

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World\n");
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });

const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.send('Hello, this is the test server!');
});


app.get('/data', (req, res) => {
    res.json({
        message: 'This is a test endpoint!',
        timestamp: new Date()
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});