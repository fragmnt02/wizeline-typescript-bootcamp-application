const mongoose = require('mongoose');
const { Schema } = mongoose;

const cakeSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    price: Number,
    flavors: [{ type: String }]
});

exports.Cake = mongoose.model('cake', cakeSchema);