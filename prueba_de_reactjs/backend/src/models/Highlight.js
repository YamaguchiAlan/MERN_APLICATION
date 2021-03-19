const {Schema, model} = require('mongoose');

const featuredScheam = new Schema({
    title: String,
    image: {
        type: String,
        required: true
    },
    imageBuffer: {
        type: Buffer
    },
    className: String,
    widthAspect: {
        type: Number,
        required: true
    },
    heightAspect: {
        type: Number,
        required: true
    },
    index: {
        type:  Number,
        required: true,
        unique: true
    },
    news: {type: Schema.Types.ObjectId, ref:"News"}
},{timestamps: true})

module.exports = model('Higlight', featuredScheam)