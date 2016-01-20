"use strict";
var config = require('./config/config');
require('./config/mongoose')(config);

var chat = require('./chatDb');

var user1 = {username: 'Doncho Minkov', password: 'asdasd'};
var user2 = {username: 'Minko Donchov', password: '123123'};

var message1 = {from: 'Doncho Minkov', to: 'Minko Donchov', message: 'Elo'};
var message2 = {from: 'Minko Donchov', to: 'Doncho Minkov', message: 'Ole!'};
var message3 = {from: 'Doncho Minkov', to: 'Minko Donchov', message: '^^'};

var query = {from: 'Doncho Minkov', to: 'Minko Donchov'};

chat.registerUser(user1);
chat.registerUser(user2);

chat.sendMessage(message1);
chat.sendMessage(message2);
chat.sendMessage(message3);

chat.getMessages(query);