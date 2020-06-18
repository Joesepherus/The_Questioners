var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  adminId: {
	  type: String,
	  required: true
  },
  word: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  translation: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Words = module.exports = mongoose.model('Words', schema);