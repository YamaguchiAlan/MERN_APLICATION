const commentsCtrl = {}

const Comments = require('../models/Comments')
const News = require('../models/News')
const Users = require('../models/Users')
const Activity = require("../models/Activity")

commentsCtrl.createComment = async (req, res) => {
    const {comment, userId} = req.body;
    const newComment = new Comments({
        news: req.params.newsId,
        user: userId,
        comment: comment
    })
    const news = await News.findById(req.params.newsId)
    news.comments.push(newComment.id)

    const activity = new Activity({
        news: req.params.newsId,
        comment: newComment.id,
        action: "Comment"
    })

    const user = await Users.findById(userId)
    user.activity.push(activity.id)

    await newComment.save()
    await news.save()
    await user.save()
    await activity.save()
    newComment.populate( "user", {username: 1}, (err, comment) => {
        if(err) {
            console.log(err)
        } else{
            console.log(comment)
            res.send({
                success: "Comment added",
                comment: comment
            })
        }
    })
}

commentsCtrl.deleteComment = async (req, res) => {
    const {commentId, userId} = req.body;

    const activity = await Activity.findOne({comment: commentId, news: req.params.newsId, action: "Comment"})

    await Users.findByIdAndUpdate(userId, {$pull: {activity: activity.id}})
    await News.findByIdAndUpdate(req.params.newsId, {$pull: {comments: commentId}})

    await Comments.findByIdAndRemove(commentId)
    await activity.remove()

    res.send({
        success: "Comment Removed"
    })
}

commentsCtrl.getComments = async (req, res) => {
    await News.findById(req.params.newsId, {comments: 1}).populate("comments").exec((err, news) => {
        if(err){
            console.log(err)
        } else{
            Comments.populate(news.comments, {path: "user", select: "username"}, (err, comments) => {
                if(err) {
                    console.log(err)
                } else {
                    res.send(comments)
                }
            })
        }
    })
}

commentsCtrl.LikeComment = async (req, res) => {
    const {userId} = req.body

    if(req.params.operator === "increment") {
        Comments.findByIdAndUpdate(req.params.id, {$push: {like: userId}}, async (err, doc) => {
            if(err) {
                console.log(err)
            } else{
                const activity = new Activity({
                    news: doc.news,
                    comment: doc.id,
                    action: "Like"
                })
                await activity.save()
                await Users.findByIdAndUpdate(userId, {$push: {"activity": activity.id}})

                const comment = await Comments.findById(req.params.id)
                res.send({
                    success: "You like this comment",
                    comment
                })
            }
        })
    } else if(req.params.operator === "decrement") {
        await Comments.findByIdAndUpdate(req.params.id, {$pullAll: {like: [userId]}}, async (err, doc) => {
            if(err) {
                console.log(err)
            } else{
                const activity = await Activity.findOne({comment: doc.id, action: "Like"})

                await Users.findByIdAndUpdate(userId, {$pull: {"activity": activity.id}})

                await activity.remove()
                const comment = await Comments.findById(req.params.id)
                res.send({
                    success: "This comment was removed from your liked comments",
                    comment
                })
            }
        })
    }
}

commentsCtrl.disikeComment = async (req, res) => {
    const {userId} = req.body

    if(req.params.operator === "increment") {
        Comments.findByIdAndUpdate(req.params.id, {$push: {dislike: userId}}, async (err, doc) => {
            if(err) {
                console.log(err)
            } else{
                const activity = new Activity({
                    news: doc.news,
                    comment: doc.id,
                    action: "Dislike"
                })
                await activity.save()
                await Users.findByIdAndUpdate(userId, {$push: {"activity": activity.id}})

                const comment = await Comments.findById(req.params.id)
                res.send({
                    success: "You don't like this comment",
                    comment
                })
            }
        })
    } else if(req.params.operator === "decrement") {
        await Comments.findByIdAndUpdate(req.params.id, {$pullAll: {dislike: [userId]}}, async (err, doc) => {
            if(err) {
                console.log(err)
            } else{
                const activity = await Activity.findOne({comment: doc.id, action: "Dislike"})

                await Users.findByIdAndUpdate(userId, {$pull: {"activity": activity.id}})

                await activity.remove()
                const comment = await Comments.findById(req.params.id)
                res.send({
                    success: "This comment was removed from your disliked comments",
                    comment
                })
            }
        })
    }
}

module.exports = commentsCtrl;