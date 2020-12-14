const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    coverImg: {
        type: Buffer
    },
    content: {
        type: String,
        required: true
    },
    contentImages: [{type: Buffer}],
    imagesUrl: [{type: String}]
}, {
    timestamps: true
});

module.exports = model('Article', articleSchema);