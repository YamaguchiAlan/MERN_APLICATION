const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    img: Array
}, {
    timestamps: true
});

module.exports = model('Article', articleSchema);