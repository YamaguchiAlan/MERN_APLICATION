articleCtrl = {};
const fs = require('fs');


const Article = require('../models/Article');

articleCtrl.newArticle = (req, res) => {
    const {content, img} = req.body;
    console.log(req.body)
    const newArticle = new Article({
        content,
        img
    })

    newArticle.save();
    let files = fs.readdirSync('./img/')
    files.forEach(f => {
        fs.unlinkSync(`./img/${f}`)
    })
    res.send('Article Created')
}

articleCtrl.getArticle = async (req, res) => {
    const article = await Article.findById(req.params.id)
    console.log(article)
    res.json(article)
}

module.exports = articleCtrl;