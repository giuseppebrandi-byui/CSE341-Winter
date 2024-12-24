const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.giuseppeRoute);
routes.get('/Charlie', lesson1Controller.charlieRoute);
routes.get('/Jill', lesson1Controller.JillRoute);

module.exports = routes;