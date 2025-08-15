import { Routes, Route, Link } from 'react-router-dom';
import Multiplicando from './Multiplicando';
import Alumnos from './Alumnos';
import { useLocation } from 'react-router-dom'
import Notas from './Notas';

//Raíz de nuestro Proyecto
//Estructura general del Proyecto
export default function App() {
  const location = useLocation()


  return (
    <div>
      <h1>Mi App con Rutas</h1>
       {/*
          [Navegación Entre Elementos por HTML]
      */}
      <nav>
        <Link to="/">Multiplicando</Link> |{' '}
        <Link to="/Alumnos/Listar">Alumnos</Link> |{' '}
      </nav>

      <p>Ruta actual: <strong>{location.pathname}</strong></p>
      {/*<Routes>
          [Ruteo]
          1. Cada página(element) debe estar registrada aquí con una ruta asignada(path)
          2. Detecta la ruta en la que estamos
          y muestra la página correspondiente a esa ruta
      */}

<div className='row'>
  <div className='col-1' style={{border:'1px solid'}}>  
        
  </div>
  <div className='col-10'>
        <Routes>
          <Route path="/" element={<Multiplicando />} />
          <Route path="/Multiplicando" element={<Multiplicando />} />
          <Route path="/Alumnos/Listar" element={<Alumnos />} /> 
          <Route path="/Notas" element={<Notas />} />
          <Route path="/Notas/:IdAlumno" element={<Notas />} />

        </Routes>
  </div>
  <div className='col-1' style={{border:'1px solid'}}>
        
  </div>
</div>





    </div>

  );
}
