import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function NotasIndividuales(){
    const {id} = useParams()
    const [listaNotas, setListaNotas] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/Notas/'+id)
        .then((res) => {
            if (!res.ok) {
            throw new Error('Error al obtener alumnos');
            }
            return res.json();
        })
        .then((data) => {
            setListaNotas(data);
        })
        .catch((err) => {
        
        });
    },[])

    return (
    <>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Notas</th>
                </tr>
            </thead>
            <tbody>
                {listaNotas.map((fila)=>(
                    <tr>
                        <td>{fila.Id}</td>
                        <td>{fila.Nombres}</td>
                        <td>{fila.Apellidos}</td>
                        <td>{fila.Nota}</td>
                    </tr>
                ))}
 
            </tbody>
        </table>
    </>
  )
}
    

export default NotasIndividuales