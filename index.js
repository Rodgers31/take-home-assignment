require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(cors());

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
  res.send(`<h1>Welcome to my project<h1/>`);
});

server.get('/api', (req, res) => {
  res.json({ message: 'My prject rocks' });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
