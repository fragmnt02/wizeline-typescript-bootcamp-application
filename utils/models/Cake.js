const mongoose = require('mongoose');
const { Schema } = mongoose;

const cakeSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    flavors: [{ type: String, required: true }]
});

exports.Cake = mongoose.model('cake', cakeSchema);