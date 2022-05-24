const Item = require('../models/item');


addItem = function (req, res, next) {
    const item = new Item({
        itemName: req.body.itemName,
        itemID: req.body.itemID,
        

    });
    item.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'Item Added Successfully',
                    resault: resault
                });
            } else {
                res.status(400).json({
                    massage: 'Item Add Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

getItem = function (req, res, next) {
    Item.find().then(resault => {
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



updateItem = function (req, res, next) {
    const newItem = {
        itemName: req.body.itemName,
        itemID: req.body.itemID,

    }
    Item.updateOne({ _id: req.params.id }, { $set: newItem }).
        then(resault => {
            res.status(200).json({
                massage: 'Item updated Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

deleteItem = function (req, res, next) {
    Item.deleteOne({ _id: req.params.id }).
        then(resault => {
            res.status(200).json({
                massage: 'Item deleted Successfully',
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
    addItem: addItem,
    getItem: getItem,
    updateItem: updateItem,
    deleteItem: deleteItem
}