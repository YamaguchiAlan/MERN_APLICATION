const newsCtrl = {};

const News = require('../models/News');
const Articles = require('../models/Article')

newsCtrl.getNews = async (req, res) => {
    const news = await News.find({}, {image:0});
    res.json(news);
};

newsCtrl.newsImage = async (req, res) => {
    try {
        console.log(req.params.id)
        const news = await News.findById(req.params.id);
        news.image = req.file.buffer
        await news.save();
        res.send(news.article)
    } catch (err) {
        res.status(400).send(err)
    }
}

newsCtrl.updateNewsImage = async (req, res) => {
    try {
        console.log(req.params.id)
        const news = await News.findById(req.params.id);
        news.image = req.file.buffer
        await news.save();
        res.send('image updated')
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

newsCtrl.deleteNews = async (req, res) => {
    await News.findByIdAndDelete(req.params.id, async (err, news) => {
        if(err) {
            console.log(err)
        } else {
            await Articles.findByIdAndDelete(news.article[0])
        }
    })
    const news = await News.find({}, {image: 0})
    res.json(news)
}

module.exports = newsCtrl;