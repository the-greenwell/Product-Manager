const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
},{timestamps:true});

const Product = mongoose.model('Products', ProductsSchema);
module.exports = Product;