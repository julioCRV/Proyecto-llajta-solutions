
import React, { useState } from 'react';
const App = () => {
  const [platillo, setPlatillo] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    archivoMP4: null,
    archivoImagen: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setPlatillo({
      ...platillo,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crea un objeto FormData para enviar los datos y archivos al backend
    const formData = new FormData();
    formData.append('nombre', platillo.nombre);
    formData.append('descripcion', platillo.descripcion);
    formData.append('precio', platillo.precio);
    formData.append('archivoMP4', platillo.archivoMP4);
    formData.append('archivoImagen', platillo.archivoImagen);

    try {
      // Realiza la solicitud POST al backend
      const response = await fetch('http://localhost:5173/backen/index.js', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Procesa la respuesta exitosa del servidor (si es necesario)
        console.log('Platillo registrado correctamente');
      } else {
        // Maneja errores de la solicitud (puedes mostrar un mensaje de error al usuario)
        console.error('Error al registrar el platillo');
      }
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
    }
  };

  return (
    <div>
      <h2>Registrar Platillo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombrde"
            value={platillo.nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={platillo.descripcion}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            value={platillo.precio}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Archivo MP4:</label>
          <input
            type="file"
            name="archivoMP4"
            accept=".mp4"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Archivo de Imagen (JPG/PNG):</label>
          <input
            type="file"
            name="archivoImagen"
            accept=".jpg, .png"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default App;