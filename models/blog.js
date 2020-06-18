var mongoose = require('mongoose');

var schema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  adminId: {
	  type: String,
	  required: true
  },
  text: {
    type: String,
    required: true
  },
  given_date: {
    type: Date,
  },
  create_date: {
    type: Date,
    default: Date.now
  },
});

var Blog = module.exports = mongoose.model('Blog', schema);
