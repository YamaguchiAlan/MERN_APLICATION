const commentsCtrl = {}

const Comments = require('../models/Comments')

commentsCtrl.createComment = async (req, res) => {
    const {comment, userId} = req.body;
    const newComment = new Comments({
        news: req.params.newsId,
        user: userId,
        comment: comment
    })
    await newComment.save()
    res.send('comment added')
}

commentsCtrl.getComments = async (req, res) => {
    const comments = await Comments.find({news: req.params.newsId})
    res.send(comments)
}

module.exports = commentsCtrl;