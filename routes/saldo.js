const express = require('express');
const router = express.Router();
const saldoController = require('../controllers/saldoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// crear una tarea
// api/tareas
router.post('/', 
    auth,
    saldoController.crearSaldo
);

// Obtener las tareas por proyecto
router.get('/',
    auth,
    saldoController.obtenerSaldo
);

// Actualizar tarea
router.put('/:id', 
    auth,
    saldoController.actualizarSaldo
);

module.exports = router;