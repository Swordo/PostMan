const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model('User', usersSchema, 'data');
