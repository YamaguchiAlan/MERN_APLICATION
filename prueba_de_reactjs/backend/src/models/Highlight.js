const {Schema, model} = require('mongoose');

const featuredScheam = new Schema({
    title: String,
    image: {
        type: String,
        required: true
    },
    className: String
},{timestamps: true})

module.exports = model('Featured', featuredScheam)