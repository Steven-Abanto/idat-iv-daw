/* Imports */
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './App.css'

 
/* Function Principal */
 
function Alumnos() {
 
  /* Programación */
  const [listaAlumnos, setListaAlumnos] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    fetch('http://127.0.0.1:3000/Alumnos/Listar')
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

  function NavegarNotas(id){
    navigate('/Notas/'+id)
  }
 
  /* HTML / Integración con la programación */
  return (
    <>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {listaAlumnos.map((fila)=>(
                    <tr key={fila.id}>
                        <td>{fila.id}</td>
                        <td>{fila.nombres}</td>
                        <td>{fila.apellidos}</td>
                        <td>{fila.edad}</td>
                        <td>
                          <button className='btn btn-primary' onClick={() => NavegarNotas(fila.id)}>Ver Notas</button>
                        </td>
                    </tr>
                ))}
 
            </tbody>
        </table>
    </>
  )
}
 
/* Exportar nuestro módulo (Function Principal - Mismo Nombre) */
export default Alumnos