const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Giuseppe Brandi');
});

app.get('/Charlie', (req, res) => {
  res.send('Hello, Charlie Brown');
});

const port = 3000;

app.listen(process.env.port || port);
console.log('Web Server listening at port ' + (process.env.port || port));