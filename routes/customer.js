var express = require('express');
var router = express.Router();
const control = require('../controllers/customer');


router.post('/addCustomer', control.addCustomer);


router.get('/getCustomer', control.getCustomer);


router.patch('/updateCustomer/:id', control.updateCustomer);


router.delete('/deleteCustomer/:id', control.deleteCustomer);

module.exports = router;
