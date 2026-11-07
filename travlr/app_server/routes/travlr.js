// JavaScript source code
var express = require('express');
var router = express.Router();
var controller = require('../controllers/travlr');

// get travel page.
router.get('/', controller.travel);

module.exports = router;