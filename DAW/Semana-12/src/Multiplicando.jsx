/* Imports */
import { useState } from 'react'
import './App.css'

/* Function Principal */

function Multiplicando() {

  /* Programación */
  const [primerNumero, setPrimerNumero] = useState(0)
  const [segundoNumero, setSegundoNumero] = useState(0)
  const [resultado, setResultado] = useState(0)


  /* HTML / Integración con la programación */
  return (
    <>

        <input className='form-control' type='number' onChange={e=>setPrimerNumero(e.target.value)}/>
        <input className='form-control' type='number' onChange={e=>setSegundoNumero(e.target.value)}/>

        <button onClick={() => setResultado(primerNumero * segundoNumero)}>
          Multiplicar
        </button>

        <p>El resultado es: {resultado}</p>
    </>
  )
}

/* Exportar nuestro módulo (Function Principal - Mismo Nombre) */
export default Multiplicando
