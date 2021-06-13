const express = require('express')
const router = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')

router.get('/', services.homeRoutes);

router.get('/add-user', services.add_user);

router.get('/update-user', services.updarte_user);

router.post('/api/users', controller.create);

router.get('/api/users', controller.find);

router.put('/api/users/:id', controller.update);

router.delete('/api/users/:id', controller.delete);

module.exports = router
