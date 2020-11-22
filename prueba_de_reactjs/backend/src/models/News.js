const {Schema, model} = require('mongoose');

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String
    },
    image: {
        type: Buffer
    },
    author: String
}, { timestamps: true });

module.exports = model('News', newsSchema);