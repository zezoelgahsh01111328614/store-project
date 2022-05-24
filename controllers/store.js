const Store = require('../models/store');


addstore = function (req, res, next) {
    const store = new Store({
        storeName: req.body.storeName,
        phone: req.body.phone,
        address: req.body.address,
        customer: req.body.customer
    });
    store.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'store Added Successfully',
                    resault: resault
                });
            } else {
                res.status(400).json({
                    massage: 'store Add Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

getstore = function (req, res, next) {
    Store.find().then(resault => {
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



updatestore = function (req, res, next) {
    const newstore = {
        storename: req.body.storename,
        phone: req.body.phone,
        address: req.body.address,
        customer: req.body.customer
    }
    Store.updateOne({ _id: req.params.id }, { $set: newstore }).
        then(resault => {
            res.status(200).json({
                massage: 'store updated Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

deletestore = function (req, res, next) {
    Store.deleteOne({ _id: req.params.id }).
        then(resault => {
            res.status(200).json({
                massage: 'store deleted Successfully',
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
    addstore: addstore,
    getstore: getstore,
    updatestore: updatestore,
    deletestore: deletestore,
}