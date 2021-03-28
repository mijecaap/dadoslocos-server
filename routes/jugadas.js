const express = require('express');
const router = express.Router();
const jugadaController = require('../controllers/jugadaController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// crear una jugada
// api/jugadas
router.post('/',
    auth,
    jugadaController.crearTarea
);

router.get('/',
    auth,
    jugadaController.obtenerJugadas
)

module.exports = router;