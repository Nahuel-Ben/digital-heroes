// Require de Express
const express = require('express');
// Require de FS
const fs = require('fs');
// Ejecución de Express
const app = express();
const path = require ('path');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

// Ruta Raíz / ➝ Home
app.get('/', (req, res) => {
	
    res.render('home');
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', function (req,res){
	let heroesList = [...heroes];
	let heroesListJson = JSON.stringify(heroesList, null, 4);
    res.send(heroesListJson);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/:id/profesion', (req,res) => {
	// Acá lo primero será encontrar al héroe que corresponda
    let heroe = heroes.find((e) => e.id == req.params.id);
	
	// Si se encuentra al héroe se envía el nombre y su profesión
	if (heroe != undefined){
		res.send('Hola mi nombre es ' + heroe.nombre + ' y soy ' + heroe.profesion)
	}

		// Si NO se encuentra se envía el mensaje de no encontrado
	let error =
		'No tenemos en nuestra base ningún heroe o heroína con ese id.'

	res.status(404).send(error)
});
			

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('heroes/:id/resenia/:tipo?', (req,res) => {
	let heroe = heroes.find((e) => e.id == req.params.id);
	

	if(heroe != undefined && req.params.tipo !== completa){
		res.send(heroe.nombre + ' reseña: ' + heroe.resenia);
	}
	else{
		let heroeRecortado = [...heroe.resenia];
	let arrayPalabras = heroeRecortado.split(' ', 30);
		for(i=0; i < arrayPalabras.length ;i++) {
		let arrayPalabras = arrayPalabras.join(' ');
		res.send(req.params.id.nombre + arrayPalabras);
	}}
	});
//app.get('heroes/:id/resenia/:tipo?', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	//let heroe = heroes.find((e) => e.id == req.params.id);

	// Si NO se encuentra al héroe se envía un mensaje
	
		// Si se encuentra al héroe:
	//if (heroe != undefined){}
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la i

	


		// Si nó vino el parámetro se envía el mensaje de error
	//}
//});

// Ruta Créditos
app.get('/creditos',(req, res) => {
	res.send('Página de heroes realizada por Nahuel');
})

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
}),

module.exports = app;