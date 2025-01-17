const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    recepientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    messageType: {
        type: String,
        enum: ["text", "image"]
    },
    message: String,
    imageurl: String,
    timeStamp: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('Message', messageSchema)
module.exports = Message;
