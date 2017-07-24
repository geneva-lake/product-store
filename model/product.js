var mongoose = require('./mongoose.js');
var Category = require('./category.js').CategoryModel;



var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;
console.log(new Date());

var Product = new Schema({
	name: {
		type: String,
		required: true
	},
	purchase_price: {
		type: String,
		required: true
	},
	sell_price: {
		type: String,
		required: true
	},
	category: {
		type: ObjectId,
		ref: 'Category'
	},
	modified: {
		type: Date,
		default: Date.now
	}
});

var ProductModel = mongoose.model('Product', Product);

module.exports.ProductModel = ProductModel;