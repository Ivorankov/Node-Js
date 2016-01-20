'use strict';
var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'forumz'
    },
    port: 3000,
    db: 'mongodb://localhost/forumz-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'forumz'
    },
    port: 3000,
    db: 'mongodb://localhost/forumz-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'forumz'
    },
    port: 3000,
    db: 'mongodb://localhost/forumz-production'
  }
};

module.exports = config[env];
