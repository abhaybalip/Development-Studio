

// pages/api/hello.js
export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ message: 'Hello from API!' });
    } else if (req.method === 'POST') {
        // Process POST request data
        res.status(200).json({ message: 'POST request received' });
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}

