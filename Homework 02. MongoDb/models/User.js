"use strict";
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: { type: String, require: '{PATH} is required', unique: true },
    password: String
});

var User = mongoose.model('User', userSchema);

