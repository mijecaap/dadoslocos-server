const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// crear el servidor
const app = express();  

// conectar la db
conectarDB();

// habilitar cors
app.use(cors());

// Habilitar express.json
app.use(express.json({ extended: true }));

// puerto de la app
const port = process.env.PORT || 4000;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/jugadas', require('./routes/jugadas'));
app.use('/api/saldo', require('./routes/saldo'));

// arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});