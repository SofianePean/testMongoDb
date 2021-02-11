const mongoose = require('mongoose');
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: Number,
        required: true
    },
});

module.exports = categorySchema;