const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let currentFavicon = 'red.ico'; // Default favicon

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

wss.on('connection', (ws) => {
    console.log('A user connected');

    // Send the current favicon to the newly connected client
    ws.send(currentFavicon);

    // Listen for messages from clients
    ws.on('message', (message) => {
        currentFavicon = message; // Update the current favicon
        // Broadcast the new favicon to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(currentFavicon);
            }
        });
    });

    ws.on('close', () => {
        console.log('A user disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000; // Use the port provided by Railway
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
