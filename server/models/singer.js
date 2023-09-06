const mongoose = require("mongoose")

const SingerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    photo: {
        url: String,
        filename: String,
    },
    albums: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Album",
        required: true
    }],
    
   },   
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Singer", SingerSchema);