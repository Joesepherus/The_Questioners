var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var qaa = require('../models/QaA.js');
var todo = require('../models/todo.js');
var words = require('../models/words.js');

//                    ===== QaA =====

/* GET ALL qaas */
router.get('/qaa', function (req, res, next) {
  qaa.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE qaa BY ID */
router.get('/qaa/:id', function (req, res, next) {
  qaa.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE qaa */
router.post('/qaa', function (req, res, next) {
  qaa.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE qaa */
router.put('/qaa/:id', function (req, res, next) {
  qaa.findOneAndUpdate({ 'id': req.params.id }, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE qaa */
router.delete('/qaa/:id', function (req, res, next) {
  qaa.findOneAndRemove({ 'id': req.params.id }, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//                    ===== TODO =====

/* GET ALL todos */
router.get('/todo', function (req, res, next) {
  todo.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE todo BY ID */
router.get('/todo/:id', function (req, res, next) {
  todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE todo */
router.post('/todo', function (req, res, next) {
  req.body.state = 'inprogress';
  todo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/todo/:id', function (req, res, next) {
  todo.findOneAndUpdate({ 'id': req.params.id }, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE todo */
router.delete('/todo/:id', function (req, res, next) {
  console.log(req.params);
  todo.findOneAndRemove({ 'id': req.params.id }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// change tasks state to completed task
router.put('/todo/completed/:id', function (req, res, next) {
  todo.findOneAndUpdate({ 'id': req.params.id }, req.body, function (err, post) {
    console.log(post);
    if (err) return next(err);
    res.json(post);
  });
});

// change tasks state to removed task
router.put('/todo/removed/:id', function (req, res, next) {
  todo.findOneAndUpdate({ 'id': req.params.id }, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// change tasks state to inprogress task
router.put('/todo/inprogress/:id', function (req, res, next) {
  todo.findOneAndUpdate({ 'id': req.params.id }, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


//                    ===== Words =====

/* GET ALL words */
router.get('/words', function (req, res, next) {
  words.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE words BY ID */
router.get('/words/:id', function (req, res, next) {
  words.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE words */
router.post('/words', function (req, res, next) {
  words.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE words */
router.put('/words/:id', function (req, res, next) {
  words.findOneAndUpdate({ 'id': req.params.id }, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE words */
router.delete('/words/:id', function (req, res, next) {
  words.findOneAndRemove({ 'id': req.params.id }, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;


