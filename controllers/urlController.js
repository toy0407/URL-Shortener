var {nanoid} = require('nanoid');
const Url = require('../models/url');

const generateShortId = async (req,res) => {
    if(req.body.url==null) {
        return res.status(400).json({error:'url is required'});
    }

    const shortID = nanoid(10);

    await Url.create({
        shortId: shortID,
        redirectUrl: req.body.url,
        visitHistory: []
    })

    return res.status(200).json({shortUrl: process.env.URL_PREFIX+'/'+shortID});

}

module.exports = {generateShortId};