var mongoose = require('mongoose');

var schema = mongoose.Schema({
	word:{
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
	},
	translation:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	},
});

var Word = module.exports = mongoose.model('Word', schema);

module.exports.getAllWords = function(callback, limit){
	Word.find(callback).limit(limit);
}

module.exports.getWordById = function(wordId, callback){
	Word.findById(wordId, callback);
}

module.exports.addWord = function(word, callback){	
	var json = {
		word: word.word,
        description: word.description,
		translation: word.translation,
	}
	Word.create(json, callback);
}

module.exports.updateWord = function(id, word, options, callback){
	var query = {_id: id};
	var update = {
		word: word.word,
        type: word.type,
		translation: word.translation,
	}
	Word.findOneAndUpdate(query, update, options, callback);
}

module.exports.deletePermanentlyWord = function(id, callback){
	var query = {_id: id};
	Word.deleteOne(query, callback);
}

