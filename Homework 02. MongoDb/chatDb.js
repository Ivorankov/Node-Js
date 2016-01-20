"use strict";
require('mongoose');
var User = require('mongoose').model('User');
var Message = require('mongoose').model('Message');

function registerUser(user) {
    var newUser = new User({
        username: user.username,
        password: user.password
    });

    newUser.save(function (err, res) {
        if (err) {
            console.log(err);
        } else{
         console.log('User registered!');
        }
    })
}
function sendMessage(message) {
    var message = new Message({
        from: message.from,
        to: message.to,
        message: message.message
    });

    message.save(function (err, res) {
        if (err) {
            console.log(err);
        } else{
            console.log('Message sent :)');
        }
    })

}

function getMessages(queryData) {
    Message.find({from: queryData.from, to: queryData.to })
        .exec(function(err, data){
           if(err){
               console.log(err);
           } else {
               console.log('Here are the messages');
               console.log(data);
           }

        });
}

module.exports = {
    registerUser : registerUser,
    sendMessage : sendMessage,
    getMessages : getMessages
};

