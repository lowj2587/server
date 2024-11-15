<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Favicon Color Switcher with Alarm</title>
    <link id="favicon" rel="icon" href="red.ico" type="image/x-icon">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <button id="toggleButton" onclick="toggleFavicon()">Switch Favicon</button>
    <audio id="alarmSound" src="alarm.mp3" loop></audio>

    <script>
        const alarmSound = document.getElementById('alarmSound');
        const socket = new WebSocket('wss://web-production-81c7.up.railway.app/'); // Replace with your Railway app URL
        let isRed = true; // Track the current state

        socket.onmessage = (event) => {
            const newFavicon = event.data;
            document.getElementById('favicon').href = newFavicon;

            // Play or stop the alarm sound based on the received favicon color
            if (newFavicon === 'red.ico') {
                alarmSound.play();
            } else {
                alarmSound.pause();
                alarmSound.currentTime = 0; // Reset the sound to the beginning
            }
        };

        function toggleFavicon() {
            const favicon = document.getElementById('favicon');
            const currentFavicon = favicon.href.includes('red.ico') ? 'red.ico' : 'green.ico';
            const newFavicon = currentFavicon === 'red.ico' ? 'green.ico' : 'red.ico';

            // Update the favicon for the current user
            favicon.href = newFavicon;

            // Send the new favicon to the server
            socket.send(newFavicon);

            // Play or stop the alarm sound based on the favicon color
            if (newFavicon === 'red.ico') {
                alarmSound.play();
            } else {
                alarmSound.pause();
                alarmSound.currentTime = 0; // Reset the sound to the beginning
            }
        }
    </script>
</body>
</html>
