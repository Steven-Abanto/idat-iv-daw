/* Imports */
import './App.css'

/* Importando componente de Modal */
import ModalComponent from './components/ModalComponent' 

/* Function Principal */

function Notas() {

  /* Programación */


  /* HTML / Integración con la programación */
  return (
    <>
        <p>Página de Notas en Construcción</p>

        <button type="button" classNameName="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Abrir Modal
        </button>

        <ModalComponent />
    </>
  )
}

/* Exportar nuestro módulo (Function Principal - Mismo Nombre) */
export default Notas
