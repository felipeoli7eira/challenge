const NeDB = require('nedb')
const Database = new NeDB(
    {
        filename: 'database.db',
        autoload: true
    }
)

class Product
{
    // constructor()
    // {
    // }

    index(request, response)
    {
        Database.insert({product: 'teste', desc: 'desc', price: '12.55'}, (error, result) => {
            if (!error) {
                return response.status(201).json({error: false, result})
            }

            return response.status(500).json({error: true})
        })
    }
}

module.exports = new Product