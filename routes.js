var Funciones = require('./funcion')

const { Router } = require('express');
const router = Router();


router.get('/usuarios', Funciones.Ejemplio)

module.exports = router;