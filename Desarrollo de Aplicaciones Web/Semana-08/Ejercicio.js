const express = require('express');
const hostname='127.0.0.1';
const port = 3000;
const app = express();
app.use(express.json());

var lista = [
    {id: 1, nombre: 'Edward', edad: 30, documento: '12345678', telefono: '123456789'},
    {id: 2, nombre: 'Maria', edad: 14, documento: '23456789', telefono: '223456789'},
    {id: 3, nombre: 'Toño', edad: 16, documento: '34567981', telefono: '323456789'}
];

app.get('/ObtenerLista', (req,res) => {
    res.status(200).json(lista);
})

app.post('/AgregarLista', (req,res) => {
    const {id,nombre,edad, documento,telefono} = req.body;

    if(lista.some(x=>x.id == id)){
        return res.status(400).json({ error: 'Id ingresado ya existe.' });
    }

    if(lista.some(x=>x.documento == documento)){
        return res.status(400).json({ error: 'Documento ingresado ya existe.' });
    }

    if(lista.some(x=>x.telefono == telefono)){
        return res.status(400).json({ error: 'Telefono ingresado ya existe.' });
    }

    if (!id || !nombre || !edad || !documento || !telefono){
        return res.status(400).json({ error: 'Faltan campos id, nombre, edad, documento o telefono' });
    };

    lista.push({id,nombre,edad,documento,telefono});
    
    res.status(201).json({mensaje: 'Objeto agredado correctamente.'})
})

app.delete('/Eliminar/:documento', (req,res) => {
    const documento = req.params.documento;
    const index = lista.findIndex(x => x.documento === documento);
    if (index == -1){
        return res.status(400).json({ error: 'No se encontró el usuario.' });
    } else{
        lista.splice(index,1);
        res.status(200).json({mensaje: 'Objeto eliminado correctamente.'})
    }
})

app.listen(port, hostname, ()=> {console.log(`Servidor corriendo en http://${hostname}:${port}/`);})