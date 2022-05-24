var express = require('express');
var router = express.Router();
const control = require('../controllers/item');


router.post('/additem', control.addItem);


router.get('/getitem', control.getItem);


router.patch('/updateitem/:id', control.updateItem);


router.delete('/deleteitem/:id', control.deleteItem);

module.exports = router;
