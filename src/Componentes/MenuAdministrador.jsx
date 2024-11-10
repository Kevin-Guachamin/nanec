import React from 'react';
import './MenuAdministrador.css';

const MenuAdministrador = () => {
  return (
    <div className="menu-administrador">
      <h2>Bienvenido al Sistema de Transporte Estudiantil</h2>
      <p>¡Aquí podrás ver, agregar, editar, eliminar registros de estudiantes, conductores y rutas!</p>
      <div className="menu-administrador-opciones">
        <button className="menu-opcion">
          <img src="https://img.freepik.com/vector-gratis/coleccion-plana-gente-yendo-universidad_23-2148190292.jpg" alt="Estudiantes" />
          <p>ESTUDIANTES</p>
        </button>
        <button className="menu-opcion">
          <img src="https://img.freepik.com/vector-premium/icono-volante-manos-volante-conductor-conducir-automovil-prueba-manejo-pagina-destino-lecciones-conduccion-icono-vector-aislado-fondo_505557-4229.jpg
" alt="Conductores" />
          <p>CONDUCTORES</p>
        </button>
        <button className="menu-opcion">
          <img src="https://img.freepik.com/vector-premium/autobus-turistico-mapa-esquema-marcador-ubicacion-ruta-navegacion-trafico_625536-3130.jpg " alt="Rutas" />
          <p>RUTAS</p>
        </button>
      </div>
    </div>
  );
};

export default MenuAdministrador;
