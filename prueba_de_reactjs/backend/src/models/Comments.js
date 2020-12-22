const { model, Schema } = require('mongoose')

const CommentSchema = new Schema({
    news: [{type: Schema.Types.ObjectId, ref: "News"}],
    user: [{type: Schema.Types.ObjectId, ref: 'Users'}],
    comment: {
        type: String,
        required: true
    },
    like: [{type: Number}],
    dislike: [{type: Number}]
}, {
    timestamps: true
})

module.exports = model('Comments', CommentSchema)