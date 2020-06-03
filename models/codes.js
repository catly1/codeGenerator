const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodeSchema = new Schema({
    status: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Code = mongoose.model('codes', CodeSchema);