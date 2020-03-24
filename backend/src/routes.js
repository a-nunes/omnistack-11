const express            = require('express');
const OngController      = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController  = require('./controllers/ProfileController');
const SessionController  = require('./controllers/SessionController');
const routes             = express.Router();

/**
 * Rotas para ONGs
 */

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/**
 * Rotas para Incidents
 */

 routes.get('/incidents', IncidentController.index);
 routes.post('/incidents', IncidentController.create);
 routes.delete('/incidents/:id', IncidentController.delete);

/**
 * Rotas para Profiles
 */

routes.get('/profile', ProfileController.index);

/**
 * Rota para Login
 */

routes.post('/sessions', SessionController.create);


module.exports = routes;