var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Food = new Schema({
    name: String,
    sentiment: Number,
    tweets: [String]
});

module.exports = mongoose.model('foods', Food);