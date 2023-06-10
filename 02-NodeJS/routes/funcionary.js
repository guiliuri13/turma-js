var express = require('express');
var router = express.Router();
var FuncionaryController = require('../controller/FuncionaryController')

/* FUNCIONARIES */
router.get('/', function(req, res, next) {
    FuncionaryController.get();
});

module.exports = router;
