const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true // Elmina espacios al inicio y final
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true // Correo unico
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    registro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Usuario', UsuariosSchema);