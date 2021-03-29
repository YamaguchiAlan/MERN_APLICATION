articleCtrl = {};

const News = require('../models/News')
const Article = require('../models/Article');
const ImageFile = require("../models/Image-File")

articleCtrl.createArticle = async (req, res) => {
    const {BodyData, ArticleData} = req.body

    const author = {
        ...BodyData.author,
        _id: req.session.passport.user
    }

    const news = await new News({
        title: BodyData.title,
        text: BodyData.text,
        author: author,
        type: BodyData.type,
        views: 0
    })

    const article = await new Article({
        content: ArticleData.content
    })

    news.article = article._id
    if(ArticleData.imagesName[0]){
        for(let i = 0; i < ArticleData.imagesName.length ; i++){
            const file = await ImageFile.findById(ArticleData.imagesName[i])
            article.contentImages.push(file.image)

            article.imagesUrl.push(`${process.env.API_URL}/api/article/${article.id}/image?index=${i}`)
        }
    }

    await news.save()
    await article.save()

    await ImageFile.deleteMany({user: req.session.passport.user})

    res.send(news.id)
}

articleCtrl.formImg = async (req, res) => {
    const image = await new ImageFile({
        user: req.params.userId,
        image: req.file.buffer
    })

    await image.save()

    res.json({
        uploaded: true,
        url: `${process.env.API_URL}/api/article/form/image?id=${image._id}`
    })
}

articleCtrl.getFormImg = async (req, res) => {
    try{
        const file = await ImageFile.findById(req.query.id)
        res.set('Content-Type', 'image/png')
        res.send(file.image)
    }
    catch (err){
        res.status(404).send({error: "Not Found"})
    }
}

articleCtrl.getArticleImages = async (req, res) => {
    const article = await Article.findById(req.params.id, {contentImages: 1})
    const file = article.contentImages[req.query.index]
    res.set('Content-Type', 'image/jpeg')
    res.send(file)
}

articleCtrl.getArticle = (req, res) => {
    News.findById(req.params.id, {image:0}).populate('article', {coverImg: 0, contentImages:0}).exec( (err, article) => {
        if(err){
            res.status(404).send({error: "Not Found"})
        } else{
            res.json({success: "Article find", data: article})
        }
    })
}

articleCtrl.increaseViews = (req, res) => {
    News.findByIdAndUpdate(req.params.id, { $inc: {views: 1} }, (err, doc) => {
        if(err){
            console.log(err);
        } else{
            res.send({success: "views increased"})
        }
    })
}

articleCtrl.getArticleCover = async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.set('Content-Type', 'image/jpeg')
    res.send(article.coverImg)
}

articleCtrl.updateArticle = async (req, res) => {
    const {BodyData, ArticleData} = req.body

    const news = await News.findByIdAndUpdate(req.params.id,{
        title: BodyData.title,
        text: BodyData.text,
        type: BodyData.type
    })

    const oldArticle = await Article.findByIdAndUpdate(news.article,{
        content: ArticleData.content
    },{ new: true})

    let newContentImages = []
    let newImagesUrl = []

    for(let i = 0; i < ArticleData.imagesName.length ; i++){
        if(typeof(ArticleData.imagesName[i]) == "number"){
            newContentImages.push(oldArticle.contentImages[ArticleData.imagesName[i]])
        } else{
            const file = await ImageFile.findById(ArticleData.imagesName[i])
            newContentImages.push(file.image)
        }
        newImagesUrl.push(`${process.env.API_URL}/api/article/${oldArticle.id}/image?index=${i}`)
    }

    oldArticle.contentImages = newContentImages
    oldArticle.imagesUrl = newImagesUrl

    await news.save()

    await oldArticle.save()

    await ImageFile.deleteMany({user: req.session.passport.user})

    res.send(news.id)
}

articleCtrl.updateArticleImg = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        article.coverImg = req.file.buffer
        await article.save();
        res.send('Image updated')
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports = articleCtrl;