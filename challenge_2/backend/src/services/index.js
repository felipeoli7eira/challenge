const Product = require('./../model/Product')

// eslint-disable-next-line no-unused-vars
module.exports = (app) => {

    app.get('/products', (req, res) => Product.read(req, res))

    app.get('/product/:id', (req, res) => Product.readOne(req, res))

    app.post('/product', (req, res) => Product.insert(req, res))
}
