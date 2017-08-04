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

module.exports.getAllTasks = function(callback, limit){
	Task.find(callback).limit(limit);
}

module.exports.getTaskById = function(taskId, callback){
	Task.findById(taskId, callback);
}

module.exports.addTask = function(task, callback){
	var json = {
		title: task.title,
        type: task.genre,
        description: task.description,
	}
	Task.create(json, callback);
}

module.exports.updateTask = function(id, task, options, callback){
	var query = {_id: id};
	var update = {
		title: task.title,
        type: task.genre,
        description: task.description,
	}
	Task.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteTask = function(id, callback){
	var query = {_id: id};
	Task.deleteOne(query, callback);
}