const express = require('express');
const app = express();
app.use(express.json());
const hostname='127.0.0.1';
const port = 3000;
const db = require('./db');

app.get('/', (req,res) => {
    var lista;

    db.query('SELECT * From Alumnos',(error,results) => {
        if(error){
            return res.status(500).send('Error al hacer consulta.');
        }else{
            lista = results;
            return res.status(200).json(lista);
        }
    });
})

app.listen(port, hostname, () => {
    console.log(`Servodpr corriendo en http://${hostname}:${port}/`)
})