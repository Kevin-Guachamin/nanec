import React from 'react';
import PropTypes from 'prop-types';
import './AgregadoEditado.css';

const AgregadoEditado = ({ title, fields, isOpen, onClose, onSave }) => {
  if (!isOpen) return null; // No muestra el modal si no está abierto

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <form onSubmit={(e) => { e.preventDefault(); onSave(); }}>
          {fields.map((field, index) => (
            <div className="form-group" key={index}>
              <label>{field.label}</label>
              <input
                type={field.type || "text"}
                placeholder={field.placeholder}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                readOnly={field.readOnly || false}
              />
            </div>
          ))}
          <div className="modal-actions">
            <button type="submit" className="btn btn-primary">Guardar</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

AgregadoEditado.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      readOnly: PropTypes.bool,
      type: PropTypes.string,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default AgregadoEditado;
