'use strict';
var posts = require('../../data/posts');
var Post = require('mongoose').model('Post'); // post obj refused to work for get all
var PATH_PREFIX = 'posts';                    // and I have like 20 mins to submit soz KPK :(

module.exports = {
  getAddPost: function(req, res, next) {
    res.render(PATH_PREFIX  + '/add-post')
  },
  postAddPost: function(req, res, next) {
    var newPost = req.body.post;
    posts.create(newPost, function(err){
      if(err){
        console.log(err);
      }

      res.redirect('/allPosts');
    });
  },
  getAllPosts: function(req, res, next) {
    Post.find({}).exec(function (err, posts) {
      if (err) {
        console.log(err);
      }
      console.log(posts.title);
      res.render(PATH_PREFIX  + '/all-posts', {data: posts});
    })
  }
};
