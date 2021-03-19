const {Schema, model} = require("mongoose")

const ImageFile = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:"Users",
        required: true
    },
    image: {
        type: Buffer,
        required: true
    },
    expire_at: {
        type: Date,
        default: Date.now,
        expires: 24 * 60 * 60 * 1000
    }
})

module.exports = model("ImageFile", ImageFile)