const Product = require('../models/product.model');

module.exports.apiIndex = (req,res) => {
    res.json({msg: 'API working'})
}

module.exports.getProducts = (req,res) => {
    Product.find()
        .then(products => res.json({products: products}))
        .catch(err => res.json({err: err}))
}

module.exports.createProduct = (req,res) => {
    console.log(req.body)
    Product.create(req.body)
        .then(newProduct => res.json({product: newProduct}))
        .catch(err => res.json({err: err}))
}
