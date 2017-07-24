var ProductModel = require('../model/product.js').ProductModel;
var Category = require('../model/category.js').CategoryModel;

var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
	res.send('API is running');
});

router.get('/products/:id', function(req, res) {
	return ProductModel.find({category: req.params.id}, function(err, products) {
		if (!err) {
			return res.send(products);
		} else {
			res.statusCode = 500;
			console.error('Internal error(%d): %s', res.statusCode, err.message);
			return res.send({
				error: 'Server error'
			});
		}
	});
});

router.post('/categories', function(req, res) {
	var category = new Category({
		name: req.body.name
	});

	category.save(function(err) {
		if (!err) {
			console.info("products created");
			return res.send({
				status: 'OK'
			});
		} else {
			console.log(err);
			if (err.name == 'ValidationError') {
				res.statusCode = 400;
				res.send({
					error: 'Validation error'
				});
			} else {
				res.statusCode = 500;
				res.send({
					error: 'Server error'
				});
			}
			console.error('Internal error(%d): %s', res.statusCode, err.message);
		}
	});
});

router.post('/products', function(req, res) {
	var product = new ProductModel({
		name: req.body.name,
		category: req.body.categoryId,
		sell_price:  req.body.sell_price,
		purchase_price:  req.body.purchase_price,
	});
		product.save(function(err) {
		if (!err) {
			console.info("products created");
			return res.send({
				status: 'OK',
				product: product
			});
		} else {
			console.log(err);
			if (err.name == 'ValidationError') {
				res.statusCode = 400;
				res.send({
					error: 'Validation error'
				});
			} else {
				res.statusCode = 500;
				res.send({
					error: 'Server error'
				});
			}
			console.error('Internal error(%d): %s', res.statusCode, err.message);
		}
	});
});

module.exports = router