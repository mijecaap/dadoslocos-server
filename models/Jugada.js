const mongoose = require('mongoose');

const JugadaSchema = mongoose.Schema({
      nombre: {
          type: String,
          trim: true  
      },
      estado: {
          type: Boolean
      },
      ganancia: {
          type: Number
      },
      creado: {
          type: Date,
          default: Date.now()
      },
      usuario: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Usuario'
      }
});

module.exports = mongoose.model('Jugada', JugadaSchema);