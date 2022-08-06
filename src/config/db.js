const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://raj:raj1234@cluster0.jilbhyi.mongodb.net/raj?retryWrites=true&w=majority")
}


//mongodb+srv://raj:raj1234@cluster0.jilbhyi.mongodb.net/raj?retryWrites=true&w=majority