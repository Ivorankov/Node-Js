'use strict';
var Post = require('mongoose').model('Post');

module.exports = {
  create: function(post, callback) {
    Post.create(post, callback);
  }
};
