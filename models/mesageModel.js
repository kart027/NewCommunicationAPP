const mongoose = require('mongoose')


const messageScehma = new mongoose.Schema({
    chatId:String,
    sendId:String,
    text:String

}, {
    timestamps: true,
})




module.exports = mongoose.model("Message", messageScehma);