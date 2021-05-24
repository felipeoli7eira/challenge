const Product = require('./../model/Product')

// eslint-disable-next-line no-unused-vars
module.exports = (app) => {

    app.get('/products', (req, res) => {
        return Product.index(req, res)
    })

    app.post('/product', (req, res) => {
        return Product.insert(req, res)
    })
}
