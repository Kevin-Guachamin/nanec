import React from 'react';
import AdministradorBienvenida from './AdministradorBienvenida';
import AdministradorEstudiantes from './AdministradorEstudiantes';
import VistaAgregado from './VistaAgregado';
import VistaEditado from './VistaEditado';
import AdministradorConductores from './AdministradorConductores';
import VistaAgregadoConductor from './VistaAgregadoConductor';
import VistaEditadoConductor from './VistaEditadoConductor';
import AdministradorRutas from './AdministradorRutas';
import VistaAgregadoRuta from './VistaAgregadoRuta';
import VistaEditadoRuta from './VistaEditadoRuta';

function Proyecto() {
  return (
    <div>
      <AdministradorBienvenida />
      <AdministradorEstudiantes />
      <VistaAgregado />
      <VistaEditado />
      <AdministradorConductores />
      <VistaAgregadoConductor />
      <VistaEditadoConductor />
      <AdministradorRutas />
      <VistaAgregadoRuta />
      <VistaEditadoRuta/>      
     </div>
  );
}

export default Proyecto;
