const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema(

    {
        count: { type: Number, required: true },
        unit: { type: String, required: true },
        location: { type: String, required: true },
        data: [
            {
                date: { type: String, required: true },
                main: { type: String, required: true },
                temp: { type: Number, required: true }
            },
            {
                date: { type: String, required: true },
                main: { type: String, required: true },
                temp: { type: Number, required: true }
            }
        ]
    },
    {
        versionKey: false,
        //timestamps: true,
    }
);
module.exports = mongoose.model("weather", weatherSchema);