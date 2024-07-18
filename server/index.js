import express from 'express';
import axios from 'axios';

const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get('/api', async (req, res) => {
    try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/comments');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
