import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './FiltradoAgregado.css';

const FiltradoAgregado = ({
  filterOptions,
  filterLabel = 'Filtrar por:',
  filterPlaceholder = 'Buscar...',
  addLabel = 'Agregar',
  onFilterChange,
  onAddClick
}) => {
  return (
    <div className="filter-container">
      <span>{filterLabel}</span>
      <select onChange={(e) => onFilterChange(e.target.value)}>
        {filterOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder={filterPlaceholder}
        onChange={(e) => onFilterChange(e.target.value)}
      />
      <span className="add-label">{addLabel}: </span>
      <button className="add-icon" onClick={onAddClick}>
        <FaPlus />
      </button>
    </div>
  );
};

FiltradoAgregado.propTypes = {
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  filterLabel: PropTypes.string,           // Etiqueta de filtro personalizada
  filterPlaceholder: PropTypes.string,      // Placeholder personalizado para el input
  addLabel: PropTypes.string,               // Etiqueta personalizada para el botón de agregar
  onFilterChange: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
};

export default FiltradoAgregado;
