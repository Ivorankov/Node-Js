"use strict";
var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    from: { type: String, require: '{PATH} is required', unique: true },
    to: { type: String, require: '{PATH} is required', unique: true },
    message: { type: String, require: '{PATH} is required', unique: true }
});


var Message = mongoose.model('Message', messageSchema);
