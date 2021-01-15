const { model, Schema } = require('mongoose')

const CommentSchema = new Schema({
    news: [{type: Schema.Types.ObjectId, ref : "News"}],
    user: [{type: Schema.Types.ObjectId, ref: 'Users'}],
    comment: {
        type: String,
        required: true
    },
    like: [{type: Schema.Types.ObjectId, ref: 'Users'}],
    dislike: [{type: Schema.Types.ObjectId, ref: 'Users'}]
}, {
    timestamps: true
})

module.exports = model('Comments', CommentSchema)