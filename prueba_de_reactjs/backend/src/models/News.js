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
    author: {
        username: {type: String},
        _id: {type: Schema.Types.ObjectId, ref: "Users"}
    },
    article: [{type: Schema.Types.ObjectId, ref: 'Article'}],
    comments: [{type: Schema.Types.ObjectId, ref: "Comments"}]
}, { timestamps: true });

newsSchema.index({title: "text"})

module.exports = model('News', newsSchema);