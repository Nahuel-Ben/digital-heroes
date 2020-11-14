var express = require('express');
const heroesController = require('../controllers/heroesController');
var router = express.Router();

/* GET users listing. */
router.get('/heroes', heroesController.showList);
router.get('/heroes/:id/profesion', heroesController.heroe);
router.get('/heroes/:id/resenia/:tipo?', heroesController.resenia);

module.exports = router;
