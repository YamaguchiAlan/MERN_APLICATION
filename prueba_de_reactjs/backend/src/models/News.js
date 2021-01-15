const {Schema, model} = require('mongoose');

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: Buffer
    },
    author: String,
    article: [{type: Schema.Types.ObjectId, ref: 'Article'}],
    comments: [{type: Schema.Types.ObjectId, ref: "Comments"}]
}, { timestamps: true });

module.exports = model('News', newsSchema);