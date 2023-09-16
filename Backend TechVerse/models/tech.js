const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    desc: String,
    speaker: String,
    agenda: String,
    reg: String,
    social: String,
    photo: String
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
