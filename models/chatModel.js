const mongoose = require('mongoose')


const chatModel = new mongoose.Schema({
   members:Array

}, {
    timestamps: true,
})




module.exports = mongoose.model("Chat", chatModel);