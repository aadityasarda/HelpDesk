const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    ticketNo: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    date: String,
    department: String,
    subject: String,
    category: String,
    type: String,
    priority: String,
    description: String,
    file: String,
}, {
    timestamps: true,
});

const ticketModel = mongoose.model('ticket', ticketSchema);
module.exports = ticketModel;