/* Imports */
import { useState, useEffect } from 'react'
import './App.css'
 
/* Function Principal */
 
function Notas() {
 
  /* Programación */
  const [listaAlumnos, setListaAlumnos] = useState([])
 
  useEffect(()=>{
    fetch('http://127.0.0.1:3000/Alumnos/Notas/Reporte')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al obtener alumnos');
        }
        return res.json();
      })
      .then((data) => {
        setListaAlumnos(data);
      })
      .catch((err) => {
       
      });
  },[])
 
  /* HTML / Integración con la programación */
  return (
    <>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Promedio</th>
                </tr>
            </thead>
            <tbody>
                {listaAlumnos.map((fila)=>(
                    <tr key={fila.Id}>
                        <td>{fila.Id}</td>
                        <td>{fila.Nombre}</td>
                        <td>{fila.Apellido}</td>
                        <td>{fila.Promedio}</td>
                    </tr>
                ))}
 
            </tbody>
        </table>
    </>
  )
}
 
/* Exportar nuestro módulo (Function Principal - Mismo Nombre) */
export default Notas