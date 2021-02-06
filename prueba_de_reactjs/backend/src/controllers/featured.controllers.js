const featuredCtrl = {};

const Featured = require('../models/Highlight');

featuredCtrl.createFeatured = async (req, res) => {
    const {title, image, className} = req.body;
    let newFeatured = await new Featured({
        title,
        image,
        className
    })
    await newFeatured.save();
    res.send('Featured Created');
}

featuredCtrl.getFeatured = async (req, res) => {
    let featured = await Featured.find();
    res.send(featured);
}

module.exports = featuredCtrl;