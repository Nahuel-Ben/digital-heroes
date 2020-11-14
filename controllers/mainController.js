let mainController = {
    home: (req, res) => {
	
        res.render('home')
},
    creditos: (req, res) => {
        res.send('Página de heroes realizada por Nahuel');
    }}

module.exports = mainController