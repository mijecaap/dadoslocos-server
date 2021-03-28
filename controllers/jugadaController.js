const Jugada = require('../models/Jugada');
const { validationResult } = require('express-validator');

// Crea una nueva jugada
exports.crearTarea = async (req , res) => {

    // Revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ){
        return res.status(400).json({ errores: errores.array() })
    }

    try {

        // Crear nueva jugada
        const jugada = new Jugada(req.body);

        
        // Guardar el usuario via JWT
        jugada.usuario = req.usuario.id;

        // Guardamos el proyecto
        jugada.save();
        res.json(jugada);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    } 
}

// Obtiene todos los proyectos del usuario actual
exports.obtenerJugadas = async (req, res) => {
    try {
        const jugadas = await Jugada.find({ usuario: req.usuario.id });
        res.json({ jugadas });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}