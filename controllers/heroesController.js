const heroes = require ('../data/heroes.json');

let heroesController = {

    showList: (req, res) => {
            let heroesList = [...heroes];
            let heroesListJson = JSON.stringify(heroesList, null, 4);
            res.send(heroesListJson);
    },

    heroe:  (req,res) => {
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
    },

    resenia: (req,res) => {
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
        }
}

module.exports = heroesController;