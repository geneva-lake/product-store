var mongoose = require('./mongoose.js');

var Schema = mongoose.Schema;

var Category = new Schema({
    name: { type: String, required: true },
    modified: { type: Date, default: Date.now }
});

var CategoryModel = mongoose.model('Category', Category);

module.exports.CategoryModel = CategoryModel;