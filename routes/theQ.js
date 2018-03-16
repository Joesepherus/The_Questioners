var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var qaa = require('../models/QaA.js');

/* GET ALL qaas */
router.get('/', function(req, res, next) {
  qaa.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE qaa BY ID */
router.get('/:id', function(req, res, next) {
  qaa.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE qaa */
router.post('/', function(req, res, next) {
  qaa.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE qaa */
router.put('/:id', function(req, res, next) {
  qaa.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE qaa */
router.delete('/:id', function(req, res, next) {
  qaa.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
