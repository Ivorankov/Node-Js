'use strict';
var auth = require('./auth'),
  controllers = require('../app/controllers');

module.exports = function(app) {

  app.get('/about', function(req,res,next){
    res.render('about', {loggedUser: req.user});
  });

  app.get('/login', controllers.UserController.getLogin);
  app.get('/register', controllers.UserController.getRegister);
  app.post('/register', controllers.UserController.postRegister);

  app.post('/login', auth.login);
  app.get('/logout', auth.logout);

  app.get('/addPost', controllers.PostsController.getAddPost);
  app.post('/addPost', controllers.PostsController.postAddPost);
  app.get('/allPosts', controllers.PostsController.getAllPosts);


  app.get('*', function(req, res) {
    res.render('index', {loggedUser: req.user});
  });
};
