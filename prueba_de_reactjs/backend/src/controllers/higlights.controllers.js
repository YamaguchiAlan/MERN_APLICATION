const higlightCtrl = {};

const Higlight = require('../models/Highlight');

higlightCtrl.updateHiglight = async (req, res) => {
    const {title, image, className, widthAspect, heightAspect, index, news} = req.body;

    const newData = {
        title,
        image,
        className,
        widthAspect,
        heightAspect,
        index,
        news: news._id
    }

    Higlight.findOneAndUpdate({index}, newData, {upsert: true}, (err, doc) => {
        if(err){
            console.log(err);
        } else{
            res.send({success: 'Higlight Created'});
        }
    })
}

higlightCtrl.updatePic = async (req, res) => {
    const update = {
        imageBuffer: req.file.buffer,
        image: `${process.env.API_URL}/api/higlight/${req.params.index}/pic`
    }

    Higlight.findOneAndUpdate({index: req.params.index}, update, (err, doc) => {
        if(err){
            console.log(err);
        } else{
            res.send({success: "Image Updated"})
        }
    })
}

higlightCtrl.getHiglightPic = async  (req, res) => {
    const higlight = await Higlight.findOne({index: req.params.index}, {imageBuffer: 1})
    res.set("Content-Type", "image/jpeg")
    res.send(higlight.imageBuffer)
}

higlightCtrl.getHiglights = async (req, res) => {
    let higlight = await Higlight.find({},{imageBuffer: 0}).populate("news", {title: 1}).sort({index: -1});
    res.send(higlight);
}

module.exports = higlightCtrl;