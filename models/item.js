const mongoose = require('mongoose');
const itemSchema = mongoose.Schema({
    itemName: {
        type: String,

    },
    itemID: {
        type: String,

    },
    customer: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
        },
    ]


});

module.exports = mongoose.model('Item', itemSchema);