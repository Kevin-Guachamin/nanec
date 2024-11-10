import React from 'react';
import Encabezado from './Componentes/Encabezado';
import BarraLateral from './Componentes/BarraLateral';
import FiltradoAgregado from './Componentes/FiltradoAgregado';
import Tabla from './Componentes/Tabla';
import './AdministradorConductores.css';

const AdministradorConductores = () => {
  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Nombre', accessor: 'nombre' },
    { header: 'Apellido', accessor: 'apellido' },
    { header: 'Correo', accessor: 'correo' },
    { header: '# Cédula', accessor: 'cedula' },
    { header: 'Ruta', accessor: 'ruta' },
  ];

  const data = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', correo: 'juan.perez@gmail.com', cedula: '12345', ruta: '13' },
    { id: 2, nombre: 'Maria', apellido: 'Gomez', correo: 'maria.gomez@gmail.com', cedula: '67890', ruta: '11' },
    { id: 3, nombre: 'Carlos', apellido: 'Lopez', correo: 'carlos.lopez@gmail.com', cedula: '11223', ruta: '10' },
    { id: 4, nombre: 'Ana', apellido: 'Martinez', correo: 'ana.martinez@gmail.com', cedula: '33445', ruta: '8' },
  ];

  const filterOptions = [
    { value: 'nombre', label: 'Nombre' },
    { value: 'apellido', label: 'Apellido' },
    { value: 'correo', label: 'Correo' },
    { value: 'cedula', label: 'Cédula' },
    { value: 'ruta', label: 'Ruta'}
  ];

  const handleFilterChange = (value) => {
    console.log('Filtro seleccionado:', value);
  };

  const handleAddClick = () => {
    console.log('Agregar nuevo conductor');
  };

  return (
    <div className="administrador-conductor">
      <Encabezado />
      <div className="contenido-principal">
        <BarraLateral
          userName="Luisa Casas"
          userRole="Administrador"
          userIcon="https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
          menuItems={[
            { label: 'Inicio', link: '#inicio' },
            { label: 'Estudiantes', link: '#estudiantes' },
            { label: 'Conductores', link: '#conductores' },
            { label: 'Rutas', link: '#rutas' },
          ]}
        />
        <div className="contenido-tabla">
          <FiltradoAgregado
            filterOptions={filterOptions}
            filterLabel="Filtrar por:"
            filterPlaceholder=""
            addLabel="Agregar conductor"
            onFilterChange={handleFilterChange}
            onAddClick={handleAddClick}
          />
          <Tabla columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default AdministradorConductores;
