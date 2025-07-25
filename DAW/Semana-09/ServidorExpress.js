const express = require('express');
const hostname='127.0.0.1';
const port = 3000;
const app = express();
app.use(express.json());

var lista = [
    {id: 1, nombre: 'Edward', edad: 30, documento: '12345678'},
    {id: 2, nombre: 'Maria', edad: 14, documento: '23456789'},
    {id: 3, nombre: 'Toño', edad: 16, documento: '34567981'}
];

app.get('/', (req,res) => {res.status(200).type('text').send('Hola mundo\n')})

app.get('/ObtenerLista', (req,res) => {
    res.status(200).json(lista);
})

app.post('/AgregarLista', (req,res) => {
    const {id,nombre,edad, documento} = req.body;

    if(lista.some(x=>x.id == id)){
        return res.status(400).json({ error: 'Id ingresado ya existe.' });
    }

    if(lista.some(x=>x.documento == documento)){
        return res.status(400).json({ error: 'Documento ingresado ya existe.' });
    }

    if (!id || !nombre || !edad || !documento){
        return res.status(400).json({ error: 'Faltan campos id, nombre, edad o documento' });
    };

    lista.push({id,nombre,edad,documento});
    
    res.status(201).json({mensaje: 'Objeto agredado correctamente.'})
})

app.delete('/Eliminar/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const index = lista.findIndex(x => x.id === id);
    if (index == -1){
        return res.status(400).json({ error: 'No se encontró el id.' });
    } else{
        lista.splice(index,1);
        res.status(200).json({mensaje: 'Objeto eliminado correctamente.'})
    }
})

app.get('/Suma', (req,res) => {
    
    //Obtener parámetros de la ruta
    const Numero1 = parseInt(req.query.Numero1);
    const Numero2 = parseInt(req.query.Numero2);

    var Suma = Numero1 + Numero2;
    res.status(200).type('text').send('Resultado: ' + Suma)
})

app.get('/Suma/:Numero1/:Numero2', (req,res) => {
    
    //Obtener parámetros de la ruta
    const Numero1 = parseInt(req.params.Numero1);
    const Numero2 = parseInt(req.params.Numero2);

    var Suma = Numero1 + Numero2;
    res.status(200).type('text').send('Resultado: ' + Suma)
})

app.get('/Multi', (req,res) => {
    
    //Obtener parámetros de la ruta
    const Numero1 = parseInt(req.query.Numero1);
    const Numero2 = parseInt(req.query.Numero2);
    const Numero3 = parseInt(req.query.Numero3);

    var Multi = Numero1 * Numero2 * Numero3;
    res.status(200).type('text').send('Resultado: ' + Multi)
})

app.get('/Concat/:Texto1/:Texto2/:Texto3', (req,res) => {
    
    //Obtener parámetros de la ruta
    const Texto1 = req.params.Texto1;
    const Texto2 = req.params.Texto2;
    const Texto3 = req.params.Texto3;

    var TextoCompleto = Texto1 + ' ' + Texto2 + ' ' + Texto3;
    res.status(200).type('text').send('Texto Completo: ' + TextoCompleto)})
    
app.listen(port, hostname, ()=> {console.log(`Servidor corriendo en http://${hostname}:${port}/`);})