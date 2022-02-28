require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(cors());

//Used when deploying, for serving the data from the front end
server.use(express.static(path.join(__dirname, 'frontend/build')));

const PORT = process.env.PORT || 5000;

server.get('/api', (req, res) => {
  res.json({ message: 'My prject rocks' });
});
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
