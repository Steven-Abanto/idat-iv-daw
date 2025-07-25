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
    return !isNaN(valor) && isFinite(valor) && (valor !== null);
}

function esVacio(valor){
    return !valor
}

app.get('/', (req,res) => {
    var lista;

    db.query(`Select C.id, C.nombres, A.nombres
              From cursos C
              JOIN areas A on C.idarea = A.id`,(error,results) => {
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

app.get('/Listar/:id', (req,res) => {
    var lista;

    const { id } = req.params;

    if(!esNumero(id)){
        respuesta.correcto = false;
        respuesta.mensaje = 'Id ingresado tiene errores.';

        return res.status(500).json(respuesta);
    }

    db.query('SELECT * From areas Where id = ? ',[id],(error,results) => {
        if(error){
            respuesta.correcto = false;
            respuesta.mensaje = 'Error al hacer consulta.';

            return res.status(500).json(respuesta);
        }else if(results.length === 0){
            respuesta.correcto = false;
            respuesta.mensaje = 'No hay area con id: ' + id;

            return res.status(500).json(respuesta);
        }
    });

    db.query(`Select C.id, C.nombres, A.nombres as nombrearea
              From cursos C
              JOIN areas A on C.idarea = A.id
              WHERE C.idarea = ?`,[id],(error,results) => {
        if(error){
            respuesta.correcto = false;
            respuesta.mensaje = 'Error al hacer consulta.';

            return res.status(500).json(respuesta);
        }else if(results.length === 0){
            respuesta.correcto = false;
            respuesta.mensaje = 'No hay cursos para el idarea: ' + id;

            return res.status(500).json(respuesta);
        }else{
            lista = results;
            return res.status(200).json(lista);
        }
    });
})

app.post('/Cursos/Crear', (req, res) => {
    const { nombres, idarea} = req.body;
    
    if(esVacio(nombres)){
        respuesta.correcto = false;
        respuesta.mensaje = 'El campo nombre no debe estar vacío.';

        return res.status(500).json(respuesta);           
    }
    
    if(!esNumero(idarea)){

        respuesta.correcto = false;
        respuesta.mensaje = 'El idarea ingresado es inválido: ' + idarea;

        return res.status(500).json(respuesta);   
    }
    
    const sql_dup = 'Select * From cursos Where nombres = ?';
    const values_dup = [nombres];

    db.query(sql_dup, values_dup, (error,results) => {
        lista = results;

        if(error){
            respuesta.correcto = false;
            respuesta.mensaje = 'Error al insertar: ' + err;

            return res.status(500).json(respuesta);
        }else if(lista.length >= 1){
                respuesta.correcto = false;
                respuesta.mensaje = 'Ya existe un curso con el nombre: ' + nombres;

                return res.status(500).json(respuesta);   
            
        }else{    
            const sql = 'Insert into cursos(id,nombres,idarea)  VALUES (null,?,?)';
            const values = [nombres, idarea];

            db.query(sql, values, (err, results) => {
                if (err) {

                    respuesta.correcto = false;
                    respuesta.mensaje = 'Error al insertar: ' + err;

                    return res.status(500).json(respuesta);
                }else{
                    respuesta.correcto = true;
                    respuesta.mensaje = 'Usuario insertado con ID: ' + results.insertId;

                    return res.status(201).json(respuesta);
                }
            });
        }
    })
});

app.put('/Cursos/Editar', (req, res) => {
    const { id, nombres, idarea} = req.body;

    if(esVacio(nombres)){
        respuesta.correcto = false;
        respuesta.mensaje = 'Campo nombre no debe estar vacío.';

        return res.status(500).json(respuesta);        
    }

    if(esVacio(idarea)){
        respuesta.correcto = false;
        respuesta.mensaje = 'Campo idarea no debe estar vacío.';

        return res.status(500).json(respuesta);        
    }

    if(esVacio(id)){
        respuesta.correcto = false;
        respuesta.mensaje = 'Campo id no debe estar vacío.';

        return res.status(500).json(respuesta);        
    }

    if(!esNumero(idarea)){
        respuesta.correcto = false;
        respuesta.mensaje = 'Idarea ingresado tiene errores.';

        return res.status(500).json(respuesta);
    }

    if(!esNumero(id)){
        respuesta.correcto = false;
        respuesta.mensaje = 'Id ingresado tiene errores.';

        return res.status(500).json(respuesta);
    }

    const query = 'UPDATE cursos SET nombres = ?, idarea = ? WHERE id = ?';
    db.query(query, [nombres, idarea, id], (error, result) => {
        if (error) {
            respuesta.correcto = false;
            respuesta.mensaje = 'Error al actualizar curso.';

            return res.status(500).json(respuesta);
        }else if(result.affectedRows === 0){
            respuesta.correcto = false;
            respuesta.mensaje = 'Curso no encontrado.';

            return res.status(500).json(respuesta);
        }else{
            respuesta.correcto = true;
            respuesta.mensaje = 'Curso actualizado.';

            return res.status(500).json(respuesta);
        }
    });
});

app.delete('/Cursos/Eliminar/:id', (req, res) => {
    const { id } = req.params;

    if(!esNumero(id)){
        respuesta.correcto = false;
        respuesta.mensaje = 'Id ingresado tiene errores.';

        return res.status(500).json(respuesta);
    }

    const query = 'DELETE FROM cursos WHERE id = ?';
    db.query(query, [id], (error, result) => {
        if (error) {
            respuesta.correcto = false;
            respuesta.mensaje = 'Error al eliminar curso.';

            return res.status(500).json(respuesta);
        }else if(result.affectedRows === 0){
            respuesta.correcto = false;
            respuesta.mensaje = 'Curso no encontrado.';

            return res.status(500).json(respuesta);
        }else{
            respuesta.correcto = true;
            respuesta.mensaje = 'Curso eliminado.';

            return res.status(200).json(respuesta);
        }
    });
});

app.listen(port, hostname, () => {
    console.log(`Servodpr corriendo en http://${hostname}:${port}/`)
})