var {nanoid} = require('nanoid');
const Url = require('../models/url');

const generateShortId = async (req,res) => {
    if(req.body.url==null) return res.status(400).json({error:'url is required'});

    // Check if URL is already present in the db

    // Check for valid URL



    const shortID = nanoid(10);

    await Url.create({
        shortId: shortID,
        redirectUrl: req.body.url,
        visitHistory: []
    })

    return res.status(200).json({shortUrl: process.env.URL_PREFIX+'/'+shortID});

}

const findByShortId = async (req,res) => {
    // if(req.params.id==null) return res.status(400).json({error:'shortId is required'});

    const shortId = req.params.id;

    const entry = await Url.findOneAndUpdate({shortId},{
        $push:{
            visitHistory: {
                timestamp: Date.now(),
            }
        }
    });

    if(entry==null) return res.status(400).json({error:'invalid shortId'});

    return res.redirect(entry.redirectUrl);
}

const getAnalyticsOfShortId = async (req,res) => {
    const shortId = req.params.id;
    const entry = await Url.findOne({shortId});
    
    if(entry==null) return res.status(400).json({error:'Invalid shortId'});
    return res.status(200).json({
        count: entry.visitHistory.length,
        visitHistory: entry.visitHistory
    });
}

module.exports = {generateShortId, findByShortId, getAnalyticsOfShortId};