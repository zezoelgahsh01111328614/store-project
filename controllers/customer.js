const Customer = require('../models/customer');


addCustomer = function (req, res, next) {
    const customer = new Customer({
        customerName: req.body.customerName,
        phone: req.body.phone,
        address: req.body.address,
        item: req.body.item


    });
    customer.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'Customer Added Successfully',
                    resault: resault
                });
            } else {
                res.status(400).json({
                    massage: 'Customer Add Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

getCustomer = function (req, res, next) {
    Customer.find().then(resault => {
        res.status(200).json({
            massage: resault
        });
    }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}



updateCustomer = function (req, res, next) {
    const newCustomer = {
        customerName: req.body.customerName,
        phone: req.body.phone,
        address: req.body.address,
        item: req.body.item


    }
    Customer.updateOne({ _id: req.params.id }, { $set: newCustomer }).
        then(resault => {
            res.status(200).json({
                massage: 'Customer updated Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

deleteCustomer = function (req, res, next) {
    Customer.deleteOne({ _id: req.params.id }).
        then(resault => {
            res.status(200).json({
                massage: 'Customer deleted Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

module.exports = {
    addCustomer: addCustomer,
    getCustomer: getCustomer,
    updateCustomer: updateCustomer,
    deleteCustomer: deleteCustomer
}