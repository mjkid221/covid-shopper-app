const express = require('express')
const router = express.Router()

const List = require('../models/List')

router.post('/', (req, res) => {
    List.query().insertAndFetch(req.body).then(list => {
        res.json(list)
    }).catch(e => {
        res.send(e)
    })
})

router.get('/:id', (req, res) => {
    List.query().findById(req.params.id)
                .withGraphFetched('products.[brand, category]')
                .then(list => {
                    res.json(list)
                }).catch(e => res.send(e))
})

module.exports = router
