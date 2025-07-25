// var Mensaje = " ";

// function MostarMensaje(numero){
//     if (numero == 0){ Mensaje = "Primer mensaje"; } 
//     else if (numero == 1){ Mensaje = "Segundo mensaje"; }
//     else { Mensaje = "Otro número"; }
//     console.log(Mensaje); }
// MostarMensaje(0);

const http = require('http');
const hostname='127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hola Mundo\n');
});

server.listen(port, hostname, () => {console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});