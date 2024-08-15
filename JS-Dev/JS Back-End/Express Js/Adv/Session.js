const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session); // Create a session file store

const app = express();

// Configure session middleware
app.use(session({
    store: new FileStore({
        // Optional: Configuration options for the file store
        path: './sessions', // Directory where session files will be stored
        secret: 'your_secret_key', // Replace with a strong secret key
        ttl: 86400, // Time-to-live in seconds (optional)
        retries: 0, // Number of retries when accessing files (optional)
        useAsync: true, // Use async file operations (optional)
    }),
    secret: 'your_secret_key', // Replace with a strong secret key
    resave: false,             // Whether to save the session even if unmodified
    saveUninitialized: false,  // Whether to save a session that is new but not modified
    cookie: { secure: false }  // Set to true if using HTTPS
}));

app.get('/', (req, res) => {
    if (req.session.views) {
        req.session.views++;
        res.send(`Views: ${req.session.views}`);
    } else {
        req.session.views = 1;
        res.send('Welcome! Refresh the page!');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
