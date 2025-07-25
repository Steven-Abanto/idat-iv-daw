import { Routes, Route, Link } from 'react-router-dom';
import Multiplicando from './Multiplicando';
import Alumnos from './Alumnos';
import Notas from './Notas';
 
export default function App() {
  return (
    <div>
      <h1>Mi App con Rutas</h1>
      <nav>
        <Link to="/">Multiplicando</Link> |{' '}
        <Link to="/Alumnos/Listar">Alumnos</Link> |{' '}
        <Link to="/Alumnos/Notas/Reporte">Notas</Link>
      </nav>
 
 
 
      <Routes>
        <Route path="/" element={<Multiplicando />} />
        <Route path="/Alumnos/Listar" element={<Alumnos />} />
        <Route path="/Alumnos/Notas/Reporte" element={<Notas />} />
      </Routes>
 
 
 
 
    </div>
 
  );
}
 