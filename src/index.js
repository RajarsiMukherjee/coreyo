const express = require("express");
const cors = require('cors')

const app = express();

const port =process.env.PORT || 8000
app.use(express.json());
app.use(cors())

// connect with config 
const connect = require("./config/db");

const { register, login } = require('./controllers/user.controller')
const weatherController = require("./controllers/weather.controller");
const newsController = require("./controllers/news.controller");

app.use('/signup', register)
app.use('/signin', login)
app.use("/weather", weatherController);
app.use("/news", newsController);



app.listen(port, async function(req,res){
    try{
connect()
console.log("listening port 8000");

    }
    catch(err){
console.log(err.message);
    }
})