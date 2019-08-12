var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    name: {type: String, max: 100, min: 3, required: true}
});

GenreSchema.virtual('url').get(function() {
    return '/genres/list/' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchema);
