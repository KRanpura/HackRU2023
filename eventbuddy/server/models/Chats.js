
const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
    sender: { 
        type: String,  //should I change type String to UserModel 
        required: true
    },
    message: { 
        type: String, 
        required: true 
    },
    receiver: { 
        type: String,  //should i change type String to UserModel here too?
        required: true 
    },
    timestamp: { 
        type: Date, 
        default: Date.now 
    }
 });

const ChatModel = mongoose.model("chats", ChatSchema);
module.exports = ChatModel