var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var GenreSchema = new Schema(
{
	name: {type:String,maxlength:100,minlength:3}
}
);

//Virtual for genre's url
GenreSchema
.virtual('url')
.get(function() {
	return '/catalog/genre/'+this._id;
});

//Exports Model
module.exports=mongoose.model('Genre',GenreSchema);