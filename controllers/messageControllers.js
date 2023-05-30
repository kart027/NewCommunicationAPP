const Message = require("../models/mesageModel")

const createMessage = async (req,res)=>{
    try {
        const { chatId, senderId, text } = req.body;

        const message = new Message({
            chatId, senderId, text
        }) 

        const response = await message.save();
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
   
    
}

const getMessage = async (req,res)=>{
    const {chatId} = req.params;
    try {
        const message = await Message.find({chatId})
        res.status(200).json(message)
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        
    }
 }

module.exports = {createMessage,getMessage}