const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware para manejar datos JSON en las solicitudes

app.post('/backen/express.js', (req, res) => {
  // Aquí puedes manejar la solicitud POST
  // req.body contendrá los datos enviados en el cuerpo de la solicitud
  console.log('Datos recibidos:', req.body);
  res.send('Solicitud POST recibida correctamente');
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
