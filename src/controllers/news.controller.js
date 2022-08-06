const express = require("express");
const { auth } = require('../middleware/auth');
const router = express.Router();

const News = require("../models/news.model");


//post
router.post("", auth, async function (req, res) {
    try {
        const news = await News.create(req.body)
        return res.status(201).send(news)
    }
    catch (err) {
        return res.send.status(500).send(err.message);
    }
})

// get
router.get("",auth, async function (req, res) {
    try {
        const news = await News.find().lean().exec();
        return res.status(201).send(news)

    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

 

//export

module.exports = router;
