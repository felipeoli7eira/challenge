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

    readOne(request, response)
    {
        try
        {
            DB.findOne({_id: request.params.id}, (err, data) => {
                if (!err) {
                    return response.status(200).json(
                        {
                            error: false, data
                        }
                    )
                }

                return response.status(500).json(
                    {
                        error: true, data: err
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

    edit(request, response)
    {
        try
        {
            DB.update({_id: request.params.id}, request.body, (err) => {
                if (!err) {
                    return response.status(200).json(
                        {
                            error: false,
                            data: {
                                _id: request.params.id,
                                name: request.body.name,
                                desc: request.body.desc,
                                price: request.body.price
                            }
                        }
                    )
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

    destroy(request, response)
    {
        try
        {
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
}

module.exports = new Product