var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

Task = require('./models/task.js')

mongoose.connect('mongodb://localhost/todolist');
var db = mongoose.connection;

var fs = require("fs");

// display all tasks
app.get('/api/toDoList', function(req, res){
	Task.getAllTasks(function(err, allTasks){
		if(err){
			throw err;
		}
		res.json(allTasks);
	});
})

// display a task with a certain ID
app.get('/api/toDoList/:id', function(req, res){
	Task.getTaskById(req.params.id, 
		function(err, task){
		if(err){
			throw err;
		}
		res.json(task);
	});
})

// add a new task
app.post('/api/toDoList', function(req, res){
	var task = req.body;

	Task.addTask(task, function(err, task){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(task);
		}
	});
})

// update a task
app.put('/api/toDoList/:id', function(req, res){
	var id = req.params.id;
	var task = req.body;

	Task.updateTask(id, task, {}, 
		function(err, task){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(task);
		}
	});
})

// change tasks state to completed task
app.put('/api/toDoList/completed/:id', function(req, res){
	var id = req.params.id;
	var task = req.body;

	Task.completeTask(id, task, {}, 
		function(err, task){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(task);
		}
	});
})

// change tasks state to removed task
app.put('/api/toDoList/removed/:id', function(req, res){
	var id = req.params.id;
	var task = req.body;

	Task.removeTask(id, task, {}, 
		function(err, task){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(task);
		}
	});
})

// change tasks state to inprogress 
app.put('/api/toDoList/inprogress/:id', function(req, res){
	var id = req.params.id;
	var task = req.body;

	Task.inprogressTask(id, task, {}, 
		function(err, task){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(task);
		}
	});
})

// change tasks state to deleted a task
app.delete('/api/toDoList/deleted/:id', function(req, res){
	var id = req.params.id;
	Task.deletePermanentlyTask(id, 
		function(err, task){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(task);
		}
	});
})

// get tasks from a file WIP
app.get('/listTasks', function (req, res) {
    fs.readFile( __dirname + "/" + " tasks.json", 'utf8',
    function (err, data) {
        //console.log(data);
        res.end(data);
    });
})

var server = app.listen(99, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
})
