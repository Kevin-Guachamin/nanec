import React from 'react';
import Encabezado from './Componentes/Encabezado';
import BarraLateral from './Componentes/BarraLateral';
import FiltradoAgregado from './Componentes/FiltradoAgregado';
import Tabla from './Componentes/Tabla';
import './AdministradorRutas.css';

const AdministradorRutas = () => {
  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Ruta', accessor: 'ruta' },
    { header: 'Recorrido', accessor: 'recorrido' },
    { header: 'Paradas', accessor: 'paradas' },
  ];
  
  const data = [
    { id: 1, ruta: 'CAPULI', recorrido: 'Ruta1 (Sur): EPN, Ladrón de Guevara, Av. Velasco Ibarra, Av. Pedro Vicente Maldonado, Av. Napo, calle Corazón, redondel de la Villaflora, Av. Pedro Vicente Maldonado hasta la parada El Capulí del eco-vía.', paradas: 'EPN, Ladrón de Guevara, Villaflora, Capulí' },
    { id: 2, ruta: 'GUAMANI', recorrido: 'Ruta2 (Sur): EPN, Ladrón de Guevara, Oriental, Trébol, Av. Rumiñahui, Av. Simón Bolívar, Av. Morán Valverde, Av. Maldonado hasta el antiguo peaje.', paradas: 'EPN, Trébol, Morán Valverde, Guamaní' },
    { id: 3, ruta: 'MACHACHI', recorrido: 'Ruta3 (Sur): EPN, Ladrón de Guevara, Av. Patria, Pérez Guerrero, Bolivia, Av. Universitaria, Av. Mariscal Sucre, Av. Morán Valverde, Av. Quitumbe Ñan, Av. Pedro Vicente Maldonado, Carr. Panamericana hasta el Parque de Machachi.', paradas: 'EPN, Mariscal Sucre, Quitumbe Ñan, Machachi' },
    { id: 4, ruta: 'QUITUMBE', recorrido: 'Ruta4 (Sur): EPN, Ladrón de Guevara, Av. Patria, Pérez Guerrero, Bolivia, Av. Universitaria, Av. Mariscal Sucre, Michelena, Av. Teniente Hugo Ortiz, Av. Cardenal de la Torre, Guando, Cusubamba, Av. Mariscal Sucre, Cóndor Ñan hasta el terminal Quitumbe.', paradas: 'EPN, Cardenal de la Torre, Cusubamba, Quitumbe' },
    { id: 5, ruta: 'ECUATORIANA', recorrido: 'Ruta5 (Sur): EPN, Ladrón de Guevara, Av. Patria, Pérez Guerrero, Bolivia, Av. Universitaria, Av. Mariscal Sucre hasta la iglesia de la Ecuatoriana.', paradas: 'EPN, Av. Universitaria, Mariscal Sucre, Ecuatoriana' },
    { id: 6, ruta: 'ESTADIO DEL AUCAS', recorrido: 'Ruta6 (Sur): EPN, Ladrón de Guevara, Av. Patria, Pérez Guerrero, Bolivia, Av. Universitaria, Av. Mariscal Sucre, Cbo. Luis Turralde, Av. Teniente Hugo Ortiz, Cardenal de la Torre, Av. Marquesa de Solanda, Av. Rumichaca, Estadio del Aucas.', paradas: 'EPN, Mariscal Sucre, Marquesa de Solanda, Estadio Aucas' },
    { id: 7, ruta: 'QUICENTRO SUR', recorrido: 'Ruta7 (Sur): EPN, Oriental, Av. Napo, Villaflora, Alonso de Angulo, Av. Teniente Hugo Ortiz, Quicentro Sur.', paradas: 'EPN, Villaflora, Alonso de Angulo, Quicentro Sur' },
    { id: 8, ruta: 'SAN ANTONIO DE PICHINCHA', recorrido: 'Ruta8 (Norte): EPN, Ladrón de Guevara, Av. Patria, Pérez Guerrero, Bolivia, Av. Universitaria, Av. Mariscal Sucre, redondel del Condado, Manuel Córdova Galarza hasta la Plaza Equinoccial en San Antonio de Pichincha.', paradas: 'EPN, Condado, San Antonio' },
    { id: 9, ruta: 'CARCELEN 1', recorrido: 'Ruta9 (Norte): EPN, Ladrón de Guevara, Av. 10 de Agosto o Juan León Mera, El Labrador, Av. Galo Plaza, Panamericana Norte, intercambiador entrada Av. Simón Bolívar, calle Isidro Ayora hasta el Colegio Americano de Quito en Carcelén.', paradas: 'EPN, Galo Plaza, Isidro Ayora, Carcelén' },
    { id: 10, ruta: 'CONDADO SHOPPING', recorrido: 'Ruta10 (Norte): EPN, Ladrón de Guevara, Av. Patria, Av. América, Av. 10 de Agosto, Av. La Prensa hasta Condado Shopping.', paradas: 'EPN, Av. América, La Prensa, Condado Shopping' },
    { id: 11, ruta: 'CARCELEN 2', recorrido: 'Ruta11 (Norte): EPN, Ladrón de Guevara, Av. Patria, Av. 10 de Agosto, Av. La Prensa, Av. Diego Vásquez Cepeda, Av. Jaime Roldós Aguilera hasta Av. Isidro Ayora.', paradas: 'EPN, Av. La Prensa, Diego Vásquez, Isidro Ayora' },
    { id: 12, ruta: 'CARAPUNGO', recorrido: 'Ruta12 (Norte): EPN, Ladrón de Guevara, Av. 6 de Diciembre, Av. Galo Plaza Lasso, Av. Eloy Alfaro (terminal terrestre de Carcelén), Panamericana Norte, Cptn Giovanni Calles, Galo Plaza hasta el estadio de Carapungo.', paradas: 'EPN, Galo Plaza, Eloy Alfaro, Carapungo' },
    { id: 13, ruta: 'PANAMERICANA', recorrido: 'Ruta13 (Norte): EPN, Ladrón de Guevara, Av. 6 de Diciembre, Av. Eloy Alfaro, Av. Eloy Alfaro, Las Palmeras, Av. Simón Bolívar, Panamericana Norte.', paradas: 'EPN, Av. 6 de Diciembre, Simón Bolívar, Panamericana' },
    { id: 14, ruta: 'SANGOQUI', recorrido: 'Ruta14 (Valles): EPN, Ladrón de Guevara, Av. Oriental, Av. General Rumiñahui, el Triángulo, EL Colibrí, el Choclo, Av. Calderón, Monumento Rumiñahui, SANTA MARIA, Parque El Tisaleo.', paradas: 'EPN, Av. Oriental, El Colibrí, Sangoquí' },
    { id: 15, ruta: 'QUINCHE', recorrido: 'Ruta15 (Valles): EPN, Ladrón de Guevara, Queseras del Medio, Av. Los conquistadores, Av. Simón Bolívar, Ruta Viva, Av. Escalón Lumbisí, Intervalles, Calle Cuarta, Tablada, Yaruqui, Parque de Chiche, El Quinche.', paradas: 'EPN, Ruta Viva, Intervalles, El Quinche' },
    { id: 16, ruta: 'TUMBACO', recorrido: 'Ruta16 (Norte): EPN, Ladrón de Guevara, Queseras del Medio, 6 de Diciembre, Colón, Av. Amazonas, NACIONAL A NACIONAL, Rumiñahui.', paradas: 'EPN, 6 de Diciembre, Amazonas, Tumbaco' },
    { id: 17, ruta: 'TROLE NORTE ESTACION', recorrido: 'Ruta17 (Norte): EPN, Av. 12 de Octubre, Av. Coruña, República, Amazonas hasta Rio Coca.', paradas: 'EPN, Av. 12 de Octubre, República, Río Coca' },
    { id: 18, ruta: 'ESTACION EL RECREO', recorrido: 'Ruta18 (Sur): EPN, Ladrón de Guevara, Av. Patria, Pérez Guerrero, Av. Universitaria, Av. Mariscal Sucre hasta la Estación El Recreo.', paradas: 'EPN, Mariscal Sucre, Estación El Recreo' },
  ];
  const filterOptions = [
    { value: 'id', label: 'ID' },
    { value: 'ruta', label: 'Ruta' },
    { value: 'recorrido', label: 'Recorrido' },
    { value: 'paradas', label: 'Paradas' },
  ];
  const handleFilterChange = (value) => {
    console.log('Filtro seleccionado:', value);
  };
  const handleAddClick = () => {
    console.log('Agregar nueva ruta');
  };
  return (
    <div className="administrador-rutas">
      <Encabezado />
      <div className="contenido-principal-rutas">
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
            addLabel="Agregar ruta"
            onFilterChange={handleFilterChange}
            onAddClick={handleAddClick}
          />
          <div className="scroll-container">
            <Tabla columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministradorRutas;
