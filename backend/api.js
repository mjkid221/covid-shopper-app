const express = require('express')
const router = express.Router()

const List = require('./models/List')

router.get('/test', (req, res) => {
    List.relatedQuery('products').for(6000).then(products => {
        res.json(products)
    }).catch((e) => {
        res.send(e)
    })
})

router.get('/dog', (req, res) => {
    res.json({test: 1})
})

module.exports = {
    router: router
}
