var express = require('express');
var router = express.Router();
const Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/product', function(req, res, next) {
  res.render('product', { title: 'product' });
});

router.post('/product', function(req, res, next) {
  var product = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  }
  Product.createNew(product).then((result) =>{
    console.log(result);
  }).catch(err =>{
    console.log(err);
  });
  
  res.redirect('/product');
});

module.exports = router;
