const express = require('express');
const app = express();
app.use(express.json());

const hostname='127.0.0.1';
const port = 3000;
const db = require('./db');

const cors = require('cors');
app.use = cors();

var respuesta = {
    correcto : true,
    mensaje : ''
};

function esNumero(valor){
    return !isNaN(valor) && isFinite(valor);
}

app.get('/', (req,res) => {
    var lista;

    db.query('SELECT * From Alumnos',(error,results) => {
        if(error){
            respuesta.correcto = false;
            respuesta.mensaje = 'Error al hacer consulta.';

            return res.status(500).json(respuesta);
        }else{
            lista = results;
            return res.status(200).json(lista);
        }
    });
})

app.post('/Alumnos/Registrar', (req,res) =>{

    const {nombres, apellidos, edad} = req.body;
    
    const sql = `INSERT INTO Alumnos (Id, nombres, Apellidos, Edad) VALUES (null,?,?,?)`;
    const values = [nombres, apellidos, edad];

    db.query(sql, values, (error,results) =>{
        if(error){
            respuesta.correcto = false;
            respuesta.mensaje = 'Error al ingresar alumno: ' + error;

            return res.status(500).json(respuesta);
        }else{
            respuesta.correcto = true;
            respuesta.mensaje = 'Alumno agredado con ID: ' + results.insertId;

            return res.status(201).json(respuesta);
        }
    })
})

app.put('/Alumnos/Actualizar', (req, res) => {
    const { id, nombres, apellidos, edad } = req.body;

    if(!esNumero(id)){
        respuesta.correcto = false;
        respuesta.mensaje = 'Id ingresado tiene errores.';

        return res.status(500).json(respuesta);
    }

    if(!esNumero(edad)){
        respuesta.correcto = false;
        respuesta.mensaje = 'Edad ingresada tiene errores.';

        return res.status(500).json(respuesta);
    }

    const query = 'UPDATE Alumnos SET nombres = ?, apellidos = ?, edad = ? WHERE id = ?';
    db.query(query, [nombres, apellidos, edad, id], (error, result) => {
        if (error) {
            respuesta.correcto = false;
            respuesta.mensaje = 'Error al actualizar alumno.';

            return res.status(500).json(respuesta);
        }else if(result.affectedRows === 0){
            respuesta.correcto = false;
            respuesta.mensaje = 'Alumno no encontrado.';

            return res.status(500).json(respuesta);
        }else{
            respuesta.correcto = true;
            respuesta.mensaje = 'Alumno actualizado.';

            return res.status(500).json(respuesta);
        }
    });
});

app.delete('/Alumnos/Eliminar/:id', (req, res) => {
    const { id } = req.params;

    if(!esNumero(id)){
        respuesta.correcto = false;
        respuesta.mensaje = 'Id ingresado tiene errores.';

        return res.status(500).json(respuesta);
    }

    const query = 'DELETE FROM Alumnos WHERE id = ?';
    db.query(query, [id], (error, result) => {
        if (error) {
            respuesta.correcto = false;
            respuesta.mensaje = 'Error al eliminar alumno.';

            return res.status(500).json(respuesta);
        }else if(result.affectedRows === 0){
            respuesta.correcto = false;
            respuesta.mensaje = 'Alumno no encontrado.';

            return res.status(500).json(respuesta);
        }else{
            respuesta.correcto = true;
            respuesta.mensaje = 'Alumno eliminado.';

            return res.status(500).json(respuesta);
        }
    });
});

app.get('/Notas/Reporte', (req,res) => {
    var lista;

    db.query(`Select A.Nombres, A. Apellidos, AVG(N.Nota) as Promedio
              From notas N
              JOIN Alumnos A on N.IdAlumno = A.Id
              GROUP BY A.Nombres, A. Apellidos;`,
              (error,results) => {
        if(error){
            respuesta.correcto = false;
            respuesta.mensaje = 'Error al hacer consulta.';

            return res.status(500).json(respuesta);
        }else{
            lista = results;
            return res.status(200).json(lista);
        }
    });
})

app.post('/Notas/Registrar', (req,res) =>{

    const {nota, idalumno} = req.body;

    if(!esNumero(nota)){
        respuesta.correcto = false;
        respuesta.mensaje = 'Nota ingresada tiene errores.';

        return res.status(500).json(respuesta);
    }
    
    if(!esNumero(idalumno)){
        respuesta.correcto = false;
        respuesta.mensaje = 'Id ingresado tiene errores.';

        return res.status(500).json(respuesta);
    }
    
    const sql = `INSERT INTO notas (id, nota, idalumno) VALUES (null, ?, ?);`;
    const values = [nota, idalumno];

    db.query(sql, values, (error,results) =>{
        if(error){
            respuesta.correcto = true;
            respuesta.mensaje = 'Error al ingresar nota: ' + error;

            return res.status(500).json(respuesta);
        }else{
            respuesta.correcto = true;
            respuesta.mensaje = 'Nota agredada para Alumno ID: ' + idalumno;

            return res.status(500).json(respuesta);
        }
    })
})

app.listen(port, hostname, () => {
    console.log(`Servodpr corriendo en http://${hostname}:${port}/`)
})