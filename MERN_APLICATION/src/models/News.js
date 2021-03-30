const {Schema, model} = require('mongoose');
const newsCtrl = require('../controllers/news.controllers');
const mongoosePaginate = require("mongoose-paginate-v2")

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
    type: {
        type: String,
        required: true
    },
    article: [{type: Schema.Types.ObjectId, ref: 'Article'}],
    comments: [{type: Schema.Types.ObjectId, ref: "Comments"}],
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

newsSchema.index({title: "text"})

newsSchema.plugin(mongoosePaginate)

module.exports = model('News', newsSchema);