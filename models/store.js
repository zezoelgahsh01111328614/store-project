const mongoose = require('mongoose');
const storeSchema = mongoose.Schema({
    storeName: {
        type: String,

    },
    phone: {
        type: String,

    },
    address: {
        type: String,
    },
    customer: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
        },
    ]
});

module.exports = mongoose.model('Store', storeSchema);
