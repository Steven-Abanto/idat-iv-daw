import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Multiplicando() {
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [res, setRes] = useState(0)

  return (
    <>
      <h1>Multiplicación</h1>
      <div className="card">
        <input className='form-control' type='number' onChange={e=>setN1(e.target.value)}/> <br />
        <input className='form-control' type='number' onChange={e=>setN2(e.target.value)}/> <br />

        <button onClick={() => setRes(n1 * n2)}>
          Multiplicar
        </button>
        <p>Resultado es {res}</p>
      </div>
    </>
  )
}

export default Multiplicando
