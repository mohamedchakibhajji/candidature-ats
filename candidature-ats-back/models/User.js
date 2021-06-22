var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	Nom: String,
	Prenom:String,
	Email:String,
	Num:Number,
	Poste:String,
	CV:String,
	Message:String
},	{
	timestamps: true,
});

module.exports = 
			mongoose.model('users',User);