const { response, request } = require('express')


const userGet = (req = request, res = response) => {

    const { q, nombre, apikey } = req.query

    res.json({
        msg: 'get API - Controller',
        q,
        nombre,
        apikey 
    })
}

const userPost = (req, res = response) => {
 
    const body = req.body

    res.json({
        msg: 'post API - Controller',
        body
    })
}

const userPut = (req, res = response) => {

    const { id } = req.params

    res.json({
        msg: 'put API - Controller',
        id
    })
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controller'
    })
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}