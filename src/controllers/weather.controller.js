const express = require("express");
//const { auth } = require('../middleware/auth');
const router = express.Router();

const Weather = require("../models/weather.model");


//post
router.post("", async function (req, res) {
    try {
        const weather = await Weather.create(req.body)
        return res.status(201).send(weather)
    }
    catch (err) {
        return res.send.status(500).send(err.message);
    }
})

// get
router.get("", async function (req, res) {
    try {
        const weather = await Weather.find().lean().exec();
        return res.status(201).send(weather)

    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

 

//export

module.exports = router;
