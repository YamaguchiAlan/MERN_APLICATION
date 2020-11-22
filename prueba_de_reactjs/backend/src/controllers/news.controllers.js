const newsCtrl = {};
const fs = require('fs');

const News = require('../models/News');

newsCtrl.getNews = async (req, res) => {
    const news = await News.find({}, {image:0});
    res.json(news);
};

newsCtrl.createNews = async (req, res) => {
    const {title, text, author} = req.body;
    const news = await new News({
        title,
        text,
        author
    })
    await news.save();
    res.send('News Created')
}

newsCtrl.newsImage = async (req, res) => {
    try {
        const news = await News.findById(req.body.id);
        news.image = req.file.buffer
        await news.save();
        res.send('Img received')
    } catch (e) {
        res.status(400).send(e)
    }
}

newsCtrl.getNewsImg = async (req, res) => {
    try{
        const news = await News.findById(req.params.id);
        if(!news || !news.image) {
            throw new Error()
        }

        res.set('Content-Type', 'image/png');
        res.send(news.image)
    } catch(e) {
        res.status(404).send('Image Not Found');
    }
}

newsCtrl.formImg = (req, res) => {
    console.log(req.files.upload)
}

module.exports = newsCtrl;