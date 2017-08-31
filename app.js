var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

Task = require('./models/task.js');

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

// remove task permanently
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

/*
	QaA
*/

QaA = require('./models/QaA.js');

// display all QaA
app.get('/api/QaA', function(req, res){
	QaA.getAllQaA(function(err, allQaA){
		if(err){
			throw err;
		}
		res.json(allQaA);
	});
})

// display a QaA with a certain ID
app.get('/api/QaA/:id', function(req, res){
	QaA.getQaAById(req.params.id, 
		function(err, qaa){
		if(err){
			throw err;
		}
		res.json(qaa);
	});
})

// add a new QaA
app.post('/api/QaA', function(req, res){
	var qaa = req.body;

	QaA.addQaA(qaa, function(err, qaa){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(qaa);
		}
	});
})

// update a QaA
app.put('/api/QaA/:id', function(req, res){
	var id = req.params.id;
	var qaa = req.body;

	QaA.updateQaA(id, qaa, {}, 
		function(err, qaa){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(qaa);
		}
	});
})

// change qaas state to completed qaa
app.put('/api/QaA/passed/:id', function(req, res){
	var id = req.params.id;
	var qaa = req.body;

	QaA.passedQaA(id, qaa, {}, 
		function(err, qaa){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(qaa);
		}
	});
})

// change qaas state to removed qaa
app.put('/api/QaA/failed/:id', function(req, res){
	var id = req.params.id;
	var qaa = req.body;

	QaA.failedQaA(id, qaa, {}, 
		function(err, qaa){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(qaa);
		}
	});
})

// change qaas state to inprogress 
app.put('/api/QaA/inprogress/:id', function(req, res){
	var id = req.params.id;
	var qaa = req.body;

	QaA.inprogressQaA(id, qaa, {}, 
		function(err, qaa){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(qaa);
		}
	});
})

// remove QaA permanently
app.delete('/api/QaA/deleted/:id', function(req, res){
	var id = req.params.id;
	QaA.deletePermanentlyQaA(id, 
		function(err, qaa){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(qaa);
		}
	});
})

/*
	DRO
*/

DRO = require('./models/DRO.js');

// display all DRO
app.get('/api/DRO', function(req, res){
	DRO.getAllDROs(function(err, allDRO){
		if(err){
			throw err;
		}
		res.json(allDRO);
	});
})

// display a DRO with a certain ID
app.get('/api/DRO/:id', function(req, res){
	DRO.getDROById(req.params.id, 
		function(err, dro){
		if(err){
			throw err;
		}
		res.json(dro);
	});
})

// add a new DRO
app.post('/api/DRO', function(req, res){
	var dro = req.body;

	DRO.addDRO(dro, function(err, dro){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(dro);
		}
	});
})

// update a DRO
app.put('/api/DRO/:id', function(req, res){
	var id = req.params.id;
	var dro = req.body;

	DRO.updateDRO(id, dro, {}, 
		function(err, dro){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(dro);
		}
	});
})

// remove DRO permanently
app.delete('/api/DRO/deleted/:id', function(req, res){
	var id = req.params.id;
	DRO.deletePermanentlyDRO(id, 
		function(err, dro){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(dro);
		}
	});
})

var server = app.listen(98, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
})
