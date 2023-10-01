import React from 'react'
import ReactDOM from 'react-dom/client'
import PrimerComponente from './ubicacionImagen'
import App2 from './menuNavegacion'
import App from './h1/pruebas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <PrimerComponente/>
      <App2/>
      <App/>     
  </React.StrictMode>,
)
