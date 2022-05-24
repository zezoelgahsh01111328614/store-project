const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
    customerName: {
        type: String,

    },
    phone: {
        type: String,

    },
    address: {
        type: String,
    },
    item: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item",
        },
    ]

});

module.exports = mongoose.model('Customer', customerSchema);