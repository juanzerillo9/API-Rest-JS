const express = require('express');
const mongoose = require('mongoose');
const user = require ('./user.controller');

// Asignacion del framework de express
// Importacion dependencias de terceros (require)
// require ('nombre de la dependencia')

const app = express();
const port = 3000;

app.use(express.json());
mongoose.connect('mongodb+srv://admin:admin@apijz9.m89wce2.mongodb.net/miapp?retryWrites=true&w=majority')


// APP.GET('/') Cuando se ingrese a ese directorio se va a ejecturar lo que figure en el segundo parametro de la funcion
// req = request => Viene la peticion de un cliente
// res = response => Por donde va la respuesta del usuario

// GET -> Nos permite ingresar a la ruta desde el explorador web
app.get('/users', user.list); // Chequear user.controller.js

// POST -> No podemos acceder desde el explorador directamente, 
app.post('/users', user.create);
app.get('/users/:id', user.get);
app.put('/users/:id', user.update);
app.patch('/users/:id', user.update);
app.delete('/users/:id', user.destroy);

app.use(express.static('app')) // Busca todos los archivos de una carpeta

app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(`${__dirname}/index.html`)
})
app.get('*', (req, res) => {
    res.status(404).send('Esta pagina no existe!!');
})


// LISTEN -> Arrancar la app
app.listen(port, () => {
    console.log('Arrancando la aplicacion')
})


/* DIFERENTES STATUS 
200 => Todo OK, devuelve algo
201 => Ok, Creado. No es necesario devolver nada.
204 => Ok, pero sin contenido.
403 => Forbidden.
404 => Not Found
*/