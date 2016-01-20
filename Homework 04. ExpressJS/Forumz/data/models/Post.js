'use strict';
var mongoose = require('mongoose');

module.exports.init = function() {
  var torrentSchema = mongoose.Schema({
    title: String,
    content: String
  });

  var Post = mongoose.model('Post', torrentSchema);
};
