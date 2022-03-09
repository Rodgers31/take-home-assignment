const express = require('express');
const path = require('path');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(cors());

const cultureRouter = require('./culture/cultute-router');

server.use('/api/cultures', cultureRouter);

// server.get('/api', (req, res) => {
//   res.json({ message: 'My prject rocks' });
// });

//Used when deploying, for serving the data from the front end
server.use(express.static(path.join(__dirname, '../frontend/build')));

// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
// });

// server.use((err, req, res, next) => {
//   res.status(err.status || 500).json({
//     message: err.message,
//     stack: err.stack,
//   });
// });

module.exports = server;
