var mongoose = require('mongoose');

var schema = mongoose.Schema({
	item:{
		type: String,
		required: true
	},
	itemCost:{
		type: String,
		required: true
	},
	itemCurrencyType:{
		type: String,
		required: true
	},
	map:{
		type: String,
		required: true
	},
	mapCost:{
		type: String,
		required: true
	},
	mapCurrencyType:{
		type: String,
		required: true
	},
	numberOfItemsDropped:{
		type: String,
		required: true
	},
	numberOfUsedMaps:{
		type: String,
		required: true
	},

});

var DRO = module.exports = mongoose.model('DRO', schema);

module.exports.getAllDROs = function(callback, limit){
	DRO.find(callback).limit(limit);
}

module.exports.getDROById = function(droId, callback){
	DRO.findById(droId, callback);
}

module.exports.addDRO = function(dro, callback){	
	var json = {
		item: dro.item,
		itemCost: dro.itemCost,
		itemCurrencyType: dro.itemCurrencyType,
		map: dro.map,
		mapCost: dro.mapCost,
		mapCurrencyType: dro.mapCurrencyType,
		numberOfItemsDropped: 0,
		numberOfUsedMaps: 0
	}
	DRO.create(json, callback);
}

module.exports.updateDRO = function(id, dro, options, callback){
	var query = {_id: id};
	var update = {
		item: dro.item,
		itemCost: dro.itemCost,
		itemCurrencyType: dro.itemCurrencyType,		
		map: dro.map,
		mapCost: dro.mapCost,
		mapCurrencyType: dro.mapCurrencyType,
		numberOfItemsDropped: dro.numberOfItemsDropped,
		numberOfUsedMaps: dro.numberOfUsedMaps
	}
	DRO.findOneAndUpdate(query, update, options, callback);
}

module.exports.deletePermanentlyDRO = function(id, callback){
	var query = {_id: id};
	DRO.deleteOne(query, callback);
}

