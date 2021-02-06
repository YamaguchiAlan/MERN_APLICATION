articleCtrl = {};
const fs = require('fs');
const del = require('del')

const News = require('../models/News')
const Article = require('../models/Article');

articleCtrl.createArticle = async (req, res) => {
    const {BodyData, ArticleData} = req.body

    const news = await new News({
        title: BodyData.title,
        text: BodyData.text,
        author: BodyData.author
    })

    const article = await new Article({
        content: ArticleData.content
    })

    news.article = article._id
    if(ArticleData.imagesName[0]){
        ArticleData.imagesName.forEach((e, i) => {
            let file = Buffer.from(fs.readFileSync(`img/${BodyData.author._id}/${e}`))
            article.contentImages.push(file);
            article.imagesUrl.push(`http://localhost:4000/api/article/${article.id}/img/${i}`)
        })
    }

    await news.save()
    await article.save()

    if(fs.existsSync(`img/${BodyData.author._id}`)){
        del.sync(`./img/${BodyData.author._id}`)
    }

    res.send(news.id)
}

articleCtrl.formImg = (req, res) => {
    if(!fs.existsSync(`img/${req.params.id}`)){
        fs.mkdirSync(`img/${req.params.id}`)
    }
    fs.rename(req.file.path, `img/${req.params.id}/${req.file.filename}`, (err) => {
        if(err){
            console.log(err);
        }
    })
    res.json({
        uploaded: true,
        url: `http://localhost:4000/api/form-img/${req.params.id}/${req.file.filename}`
    })

}

articleCtrl.getFormImg = (req, res) => {
    const file = fs.readFileSync(`img/${req.params.id}/${req.params.path}`)
    res.set('Content-Type', 'image/png')
    res.send(file)
}

articleCtrl.getArticleImages = async (req, res) => {
    const article = await Article.findById(req.params.id)
    const file = article.contentImages[req.params.index]
    res.set('Content-Type', 'image/jpeg')
    res.send(file)
}

articleCtrl.getArticle = (req, res) => {
    News.findById(req.params.id, {image:0}).populate('article', {coverImg: 0, contentImages:0}).exec( (err, article) => {
        if(err){
            console.log(err)
        } else{
            res.json(article)
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
        author: BodyData.author
    })

    const article = await Article.findByIdAndUpdate(news.article,{
        content: ArticleData.content
    })

    let newContentImage = []
    let newImagesUrl = []
    ArticleData.imagesName.forEach((e, i) => {
        if(typeof(e) == "number") {
            newContentImage.push(article.contentImages[e])
            let url = article.imagesUrl[e].slice(0, -1)
            if(url.endsWith('/')) {
                newImagesUrl.push(url + i)
            } else {
                url.slice(0,-2)
                newImagesUrl.push(url + i)
            }
        } else {
            let file = Buffer.from(fs.readFileSync(`img/${BodyData.author._id}/${e}`))
            newContentImage.push(file);
            newImagesUrl.push(`http://localhost:4000/api/article/${article.id}/img/${i}`)
        }
    })
    article.contentImages = newContentImage
    article.imagesUrl = newImagesUrl

    await news.save()
    await article.save()

    if(fs.existsSync(`img/${BodyData.author._id}`)){
        del.sync(`./img/${BodyData.author._id}`)
    }

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