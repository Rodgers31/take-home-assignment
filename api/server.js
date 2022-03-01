const express = require('express');
const path = require('path');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(cors());

//Used when deploying, for serving the data from the front end
server.use(express.static(path.join(__dirname, 'frontend/build')));

server.get('/api', (req, res) => {
  res.json({ message: 'My prject rocks' });
});
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

server.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = server;
