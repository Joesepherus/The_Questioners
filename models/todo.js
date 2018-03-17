var mongoose = require('mongoose');

var schema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	type:{
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
  },
  state:{
    type: String
  },
	create_date:{
		type: Date,
		default: Date.now
	},
	completed_date:{
		type: Date,
	},
	removed_date:{
		type: Date,
	}
});

var Task = module.exports = mongoose.model('Task', schema);

/*
module.exports.getAllQaA = function(callback, limit){
	QaA.find(callback).limit(limit);
}

module.exports.getQaAById = function(QaAkId, callback){
	QaA.findById(QaAId, callback);
}

module.exports.addQaA = function(qaa, callback){	
	var json = {
		title: qaa.title,
        type: qaa.type,
		description: qaa.description,
		state: "inprogress",
	}
	QaA.create(json, callback);
}

module.exports.updateQaA = function(id, qaa, options, callback){
	var query = {_id: id};
	var update = {
		title: qaa.title,
        type: qaa.type,
		description: qaa.description,
	}
	QaA.findOneAndUpdate(query, update, options, callback);
}

module.exports.passedQaA = function(id, qaa, options, callback){
	var query = {_id: id};
	var update = {
		state: "passed",	
		passed_date: new Date(),	
	}
	console.log(new Date());
	QaA.findOneAndUpdate(query, update, options, callback);
}

module.exports.failedQaA = function(id, qaa, options, callback){
	var query = {_id: id};
	var update = {
		state: "failed",		
	}
	QaA.findOneAndUpdate(query, update, options, callback);
}

module.exports.inprogressQaA = function(id, qaa, options, callback){
	var query = {_id: id};
	var update = {
		state: "inprogress",		
	}
	QaA.findOneAndUpdate(query, update, options, callback);
}

module.exports.deletePermanentlyQaA = function(id, callback){
	var query = {_id: id};
	QaA.deleteOne(query, callback);
}

*/