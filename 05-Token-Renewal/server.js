const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const staticFile = require('connect-static-file');

app.use(cors());

app.use('/', express.static(__dirname +  '/'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const hostname = '0.0.0.0';
const port = 3000;

const server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/.`);  
});
