const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');

app.get('/', lesson1Controller.giuseppeRoute);

app.get('/Charlie', lesson1Controller.charlieRoute);

const port = 3000;

app.listen(process.env.port || port);
console.log('Web Server listening at port ' + (process.env.port || port));