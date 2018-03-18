var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var qaa = require('../models/QaA.js');
var todo = require('../models/todo.js');

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
  qaa.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE qaa */
router.delete('/qaa/:id', function (req, res, next) {
  qaa.findByIdAndRemove(req.params.id, req.body, function (err, post) {
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
  todo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE todo */
router.put('/todo/:id', function (req, res, next) {
  todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE todo */
router.delete('/todo/:id', function (req, res, next) {
  todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// change tasks state to completed task
router.put('/todo/completed/:id', function (req, res, next) {
  todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// change tasks state to completed task
router.put('/todo/removed/:id', function (req, res, next) {
  todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// change tasks state to completed task
router.put('/todo/inprogress/:id', function (req, res, next) {
  todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
