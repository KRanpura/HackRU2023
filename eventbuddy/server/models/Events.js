
const mongoose = require('mongoose')
const UserModel = require('./Users')

const EventSchema = new mongoose.Schema ({
    eventName: {
        type: String, 
        required: true,
        minlength: 1,
        maxlength: 40
    },
    description: {
        type: String, 
        required: true, 
        minlength: 1,
        maxlength: 200
    },
    location: {
        type: String, 
        required: true,
        minlength: 1,
        maxlength: 50
    },
    date_time: {
        type: Date,
        required: true
    },
    attendees: {
        type: [UserModel],
        default: []
    }
})

const EventModel = mongoose.model("events", EventSchema);
module.exports = EventModel