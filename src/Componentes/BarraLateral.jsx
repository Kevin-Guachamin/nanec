import React from 'react';
import PropTypes from 'prop-types';
import './BarraLateral.css';

const BarraLateral = ({ userName, userRole, userIcon, menuItems }) => {
  return (
    <div className="barra-lateral">
      <div className="barra-lateral-header">
        <img src={userIcon} alt="Icono del usuario" className="barra-lateral-icon" />
        <div>
          <p className="barra-lateral-name">{userName}</p>
          <p className="barra-lateral-role">{userRole}</p>
        </div>
      </div>
      <nav className="barra-lateral-menu">
        {menuItems.map((item, index) => (
          <a href={item.link} key={index} className="barra-lateral-item">
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

BarraLateral.propTypes = {
  userName: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
  userIcon: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BarraLateral;
