import React from 'react';
import './VistaEditado.css';

const VistaEditadoRuta = () => {
  const formData = {
    ruta: 'CAPULI', 
    recorrido: 'Ruta1 (Sur): EPN, Ladrón de Guevara, Av. Velasco Ibarra, Av. Pedro Vicente Maldonado, Av. Napo, calle Corazón, redondel de la Villaflora, Av. Pedro Vicente Maldonado hasta la parada El Capulí del eco-vía.', 
    paradas: 'EPN, Ladrón de Guevara, Villaflora, Capulí'
  };

  const fields = [
    { label: 'Ruta', placeholder: 'Ruta', value: formData.ruta },
    { label: 'Recorrido', placeholder: 'Recorrido', value: formData.recorrido },
    { label: 'Paradas', placeholder: 'Paradas', value: formData.paradas}
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar Ruta</h2>
        {fields.map((field, index) => (
          <div className="form-group" key={index}>
            <label>{field.label}</label>
            <input
              type={field.type || 'text'}
              placeholder={field.placeholder}
              defaultValue={field.value}
              className="form-input"
            />
          </div>
        ))}
        <div className="modal-actions">
          <button className="btn btn-primary">Guardar</button>
          <button className="btn btn-secondary">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default VistaEditadoRuta;
