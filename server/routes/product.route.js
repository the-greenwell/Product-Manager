const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api', ProductController.apiIndex);
    app.post('/products', ProductController.createProduct);
    app.get('/products', ProductController.getProducts);
}