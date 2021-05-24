const NeDB = require('nedb')
const DB = new NeDB({filename: 'database.db', autoload: true})

class Product
{
    read(request, response)
    {
        try
        {
            DB.find({}).exec((err, data) => {
                if (!err) {
                    return response.status(200).json({error: false, data})
                }

                return response.status(500).json(
                    {
                        error: true,
                        data: err
                    }
                )
            })
        }
        catch(err)
        {
            return response.status(500).json(
                {
                    error: true,
                    data: err
                }
            )
        }
    }

    insert(request, response)
    {
        try
        {
            DB.insert(request.body, (error, data) => {
                if (!error) {
                    return response.status(201).json(
                        {
                            error: false,
                            data
                        }
                    )
                }

                return response.status(501).json(
                    {
                        error: true,
                        data: error
                    }
                )
            })
        }
        catch(error)
        {
            return response.status(501).json(
                {
                    error: true,
                    data: error
                }
            )
        }
    }
}

module.exports = new Product