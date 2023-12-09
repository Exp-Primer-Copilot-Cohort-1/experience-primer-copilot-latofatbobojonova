// Create web server

// Require statements
var express = require('express');
var router = express.Router();
var db = require('../models');
var Comment = db.Comment;

// GET /comments
router.get('/', function(req, res) {
  Comment.findAll().then(function(comments) {
    res.render('comments/index', { comments: comments });
  });
});

// GET /comments/new
router.get('/new', function(req, res) {
  res.render('comments/new');
});

// POST /comments
router.post('/', function(req, res) {
  Comment.create(req.body).then(function(comment) {
    res.redirect('/comments/' + comment.id);
  });
});

// GET /comments/:id
router.get('/:id', function(req, res) {
  Comment.findById(req.params.id).then(function(comment) {
    res.render('comments/show', { comment: comment });
  });
});

// GET /comments/:id/edit
router.get('/:id/edit', function(req, res) {
  Comment.findById(req.params.id).then(function(comment) {
    res.render('comments/edit', { comment: comment });
  });
});

// PUT /comments/:id
router.put('/:id', function(req, res) {
  Comment.findById(req.params.id).then(function(comment) {
    comment.updateAttributes(req.body).then(function(comment) {
      res.redirect('/comments/' + comment.id);
    });
  });
});

// DELETE /comments/:id
router.delete('/:id', function(req, res) {
  Comment.findById(req.params.id).then(function(comment) {
    comment.destroy().then(function() {
      res.redirect('/comments');
    });
  });
});

// Export statements
module.exports = router;