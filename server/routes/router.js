const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');
/*
*@description Root Route
*@method GET/
*/
route.get('/',services.homeRoutes);
/*
*@description add shows Route
*@method GET/add-show
*/
route.get('/add-show', services.add_show);
/*
*@description  update shows Route
*@method GET/update-show
*/
route.get('/update-show', services.update_show);
// API
route.post('/api/shows',controller.create);
route.get('/api/shows',controller.find);
route.put('/api/shows/:id',controller.update);
route.delete('/api/shows/:id',controller.delete);



module.exports = route

