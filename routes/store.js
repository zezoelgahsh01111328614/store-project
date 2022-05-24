var express = require('express');
var router = express.Router();
const control = require('../controllers/store');


router.post('/addstore', control.addstore);


router.get('/getstore', control.updatestore);


router.patch('/updatestore/:id', control.updatestore);


router.delete('/deletestore/:id', control.deletestore);

module.exports = router;
