const { Schema, model } = require("mongoose")

const activitySchema = new Schema({
    news: [{type: Schema.Types.ObjectId, ref: "News"}],
    comment: [{type: Schema.Types.ObjectId,  ref: "Comments"}],
    action: String
}, {
    timestamps: true
})

module.exports = model("Activity", activitySchema);