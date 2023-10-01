const express = require('express');
const app = express();
const port = 5173; // Puerto en el que se ejecutará el servidor

// Middleware para procesar JSON y datos de formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para manejar solicitudes POST a /ruta-al-backend
app.post('/backen/index.js', (req, res) => {
  // Procesa los datos del formulario aquí
  const { nombre } = req.body;

  // Realiza operaciones de base de datos o almacenamiento aquí

  // Envía una respuesta al cliente
  res.status(200).json({ message: 'Platillo registrado correctamente' });
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor backend en ejecución en el puerto ${port}`);
});
