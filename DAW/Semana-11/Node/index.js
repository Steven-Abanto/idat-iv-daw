/* Insta los paquetes necesarios */
const express = require('express');
const db = require('./db');
const cors = require('cors');

/* Inicializando / Configurando la Aplicación */
const app = express();
app.use(express.json());
app.use(cors());

var respuesta = {
    correcto : true,
    mensaje : ""
}

/* Creación de Métodos que vamos a exponer a través de API */
/* Endpoint: https://127.0.0.1:3000 */
app.get('/Alumnos/Listar', (req, res) => {
   
    /* Variable a devolver */
    var lista;
       
    /* Llenando la Lista con la BD */
    var sql = "Select * From Alumnos";
    db.query(sql, (error,results) => {
 
        if(error){
            return res.status(500).send('Error al hacer consulta');
        }else{
            lista = results;
            return res.status(200).json(lista);
        }
    });
 
});


/* Endpoint: https://127.0.0.1:3000/Alumnos/Registrar
   Body: { nombre, apellido, edad}
 
   Formato json:
   {
   "nombre" : "",
   "apellido" : "",
   "edad" : 0
   }
*/
app.post('/Alumnos/Registrar', (req, res) => {
 
    /* Obtenemos los valores que llegaron a través de json */
    const { nombre, apellido, edad} = req.body;
 
    /* Armado del sql */
    const sql = 'Insert into Alumnos(Id,Nombre,Apellido,Edad)  VALUES (null,?,?,?)';
    const values = [nombre, apellido, edad];
 
    /* Insertar valores en BD */
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
});


app.get('/Alumnos/Notas/Reporte', (req, res) => {
    var lista;
     
    const sql = "Select A.Id, A.Nombre, A.Apellido, ROUND(AVG(N.Nota), 2) as Promedio From Notas N JOIN Alumnos A ON N.IdAlumno = A.Id GROUP BY A.Id, A.Nombre, A.Apellido"
 
    db.query(sql, (error,results) => {
 
        if(error){
            return res.status(500).send('Error al hacer consulta');
        }else{
            lista = results;
            return res.status(200).json(lista);
        }
    });
});

/* Levanta el servidor */
const hostname='127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
 
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});