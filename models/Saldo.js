const mongoose = require('mongoose');

const SaldoSchema = mongoose.Schema({
      saldo: {
          type: Number,
          trim: true  
      },
      lleno: {
          type: Boolean
      },
      usuario: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Usuario'
      }
});

module.exports = mongoose.model('Saldo', SaldoSchema);