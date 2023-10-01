import React from 'react';
import { Breadcrumb} from 'antd';

export const PrimerComponente = () => {
  const imagenStyle = {
    position: 'absolute',
    top: '10px', 
    left: '350px', 
  };
  const imagenStyle2 = {
    position: 'absolute',
    top: '10px', 
    left: '500px', 
  };

  return (
    <div>
    <img
        src="/src/assets/logo.jpg" 
        alt="Mi Imagen"
        style={imagenStyle}
    />

    <img
        src="/src/assets/banerr.jpg" 
        alt="Mi Imagen"
        style={imagenStyle2}
    />
    <Breadcrumb
          style={{
            margin: '60px 0',
          }}
        >
    </Breadcrumb>
    </div>
  );
}
export default PrimerComponente