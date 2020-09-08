const express = require('express')
const router = express.Router()

const Store = require('../models/Store')

// Get store by id
router.get('/:id', (req, res) => {
    Store.query().findById(req.params.id)
                .withGraphFetched('[suburb, stocks.product]')
                .then((store) => res.json(store))
                .catch(e => res.send(e))
})

// Get all stores
router.get('/', (req, res) => {
    Store.query().findById(req.params.id)
                .withGraphFetched('[suburb, stocks.product]')
                .then((store) => res.json(store))
                .catch(e => res.send(e))
})


module.exports = router
