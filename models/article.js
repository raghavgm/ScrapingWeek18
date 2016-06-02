var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {
		type: String, 
		
	},
	
	note: {
		type: Schema.Type.ObjectId,
	}
});

var Article = mongoose.model('Article', articleSchema);
module.exports = Article;
