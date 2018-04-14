var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  start: {
    type: Date,
  },
  end: {
    type: Date,
  },
});

var Action = module.exports = mongoose.model('Action', schema);