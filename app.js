// Require de Express
const express = require('express');
// Require de FS
const fs = require('fs');
// Ejecución de Express
const app = express();
const path = require ('path');
const route = express.Route();
const heroesRoute = require ('./routes/heroes');
const mainRoute = require ('./routes/main');

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Ruta Raíz / ➝ Home
app.get('/', mainRoute);

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', heroesRoute);

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/:id/profesion', heroesRoute);
			

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('heroes/:id/resenia/:tipo?', heroesRoute);

// Ruta Créditos
app.get('/creditos', mainRoute);

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
}),

module.exports = app;