const newsCtrl = {};

const News = require('../models/News');
const Articles = require('../models/Article')

newsCtrl.getNews = async (req, res) => {
    const {filter, limit, page} = req.query
    if(filter){
        if(filter === "most-viewed"){
            const news = await News.find({}, {_id: 1, title: 1}).sort({views: -1}).limit(parseInt(limit))
            res.send(news)
        }
        if(filter === "trending"){
            News.aggregate([
                {
                    $match: {
                        views: {
                            $gt: 0
                        }
                    }
                },
                {
                    $project: {
                        _id: true,
                        createdAt: true,
                        updatedAt: true,
                        title: true,
                        views: true,
                        trendScore: {
                            $divide: [ "$views", {$subtract: [new Date(), "$createdAt"]} ]
                        }
                    }
                },
                {
                    $sort: {
                        trendScore: -1
                    }
                },
                {
                    $limit: 10
                }
            ]).exec((err, news) => {
                if(err){
                    console.log(err);
                } else{
                    res.send(news)
                }
            })
        }
    } else{
        let options = {
            page: page,
            limit: 12,
            select: "-image -article -comments -views",
            sort: {createdAt: -1}
        }
        if(!page || isNaN(parseInt(page)) || page <= 0){
            options.page = 1
        }
        News.paginate({}, options, (err, news) => {
            if(err){
                console.log(err);
            } else{
                res.send(news)
            }
        })
    }
};

newsCtrl.getNewsOfType = async (req, res) => {
    const {page} = req.query

    let options = {
        page: page,
        limit: 12,
        select: "-image -article -comments -views",
        sort: {createdAt: -1}
    }
    if(!page || isNaN(parseInt(page)) || page <= 0){
        options.page = 1
    }

    News.paginate({type: req.params.type}, options, (err, news) => {
        if(err){
            console.log(err);
        } else{
            res.send(news)
        }
    })
}

newsCtrl.newsImage = async (req, res) => {
    try {
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
    const newsId = req.params.id
    const myId = req.session.passport.user

    News.findOneAndDelete({_id: newsId, "author._id": myId}, async (err, news) => {
        if(err) {
            console.log(err)
        } else {
            await Articles.findByIdAndDelete(news.article[0])
            res.send({success: "News Deleted"})
        }
    })
}

newsCtrl.searchBar = async (req, res) => {
    const {page} = req.query

    let options = {
        page: page,
        limit: 12,
        select: {
            "image": 0,
            "article": 0,
            "comments": 0,
            "views": 0,
            "score": {"$meta": "textScore"}
        },
        sort: {"score": {"$meta": "textScore"}}
    }
    if(!page || isNaN(parseInt(page)) || page <= 0){
        options.page = 1
    }

    News.paginate({"$text": {"$search": `\"${req.params.title}\"`} }, options, (err, news) => {
        if(err){
            console.log(err);
        } else{
            res.send(news)
        }
    })
}

newsCtrl.getMyNewsOfType = async (req, res) => {
    const {page} = req.query
    const userId = req.session.passport.user

    let options = {
        page: page,
        limit: 12,
        select: "-image -article -comments -views",
        sort: {createdAt: -1}
    }
    if(!page || isNaN(parseInt(page)) || page <= 0){
        options.page = 1
    }

    News.paginate({type: req.params.type, "author._id": userId }, options, (err, news) => {
        if(err){
            console.log(err);
        } else{
            res.send(news)
        }
    })
}

module.exports = newsCtrl;