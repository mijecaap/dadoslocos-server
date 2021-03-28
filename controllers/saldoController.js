const { validationResult } = require('express-validator');
const Saldo = require('../models/Saldo');

exports.crearSaldo = async (req, res) => {
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({ errores: errores.array() })
    }

    try {

        // Crear nueva jugada
        const saldo = new Saldo(req.body);

        
        // Guardar el usuario via JWT
        saldo.usuario = req.usuario.id;

        // Guardamos el proyecto
        saldo.save();
        res.json(saldo);
        
        /*const usuario = await Usuario.findById();
        if(!usuario){
            return res.status(404).json({msg: 'Usuario no encontrado'})
        }
        // Revisar si */

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    } 
}

exports.obtenerSaldo = async (req, res) => {
    try {
        const saldo = await Saldo.find({ usuario: req.usuario.id });
        res.json({ saldo });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarSaldo = async (req, res) => {
    // Revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }

    // extraer la información del saldo
    const { saldo } = req.body;
    const nuevoSaldo = {};

    if( saldo ) {
        nuevoSaldo.saldo = saldo;
    }

    try {

        // revisar el ID 
        let saldo = await Saldo.findById(req.params.id);

        // si el proyecto existe o no
        if(!saldo) {
            return res.status(404).json({msg: 'Proyecto no encontrado'})
        }

        // verificar el creador del proyecto
        if(saldo.usuario.toString() !== req.usuario.id ) {
            return res.status(401).json({msg: 'No Autorizado'});
        }

        // actualizar
        saldo = await Saldo.findByIdAndUpdate({ _id: req.params.id }, { $set : nuevoSaldo}, { new: true });

        res.json({saldo});

    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}