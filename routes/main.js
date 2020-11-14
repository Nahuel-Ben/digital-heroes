var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.home);
router.get('/creditos', mainController.creditos);

module.exports = router;
