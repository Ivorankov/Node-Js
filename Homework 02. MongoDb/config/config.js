"use strict";
var path = require('path');
var rootPath = path.normalize(__dirname + './');

module.exports = {
        rootPath: rootPath,
        db: 'mongodb://localhost/chat',
        port: process.env.PORT || 1911
};
