var mongoose = require('mongoose');
var schema = mongoose.Schema;

var productSchema = new schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
    },
    quandity: {
        type: Number,
        required: true
    }
})

var Products = mongoose.model("Product", productSchema);
module.exports = Products;
