const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(

    {
        count: { type: Number, required: true },
        data: [
            {
                headline: { type: String, required: true },
                link: { type: String, required: true }
            },
            {
                headline: { type: String, required: true },
                link: { type: String, required: true }
            }
        ]
    },
    {
        versionKey: false,
        //timestamps: true,
    }
);
module.exports = mongoose.model("news", newsSchema);