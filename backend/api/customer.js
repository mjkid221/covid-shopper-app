const express = require('express')
const router = express.Router()

const Customer = require('../models/Customer')

// Search for customer (and get lists)
router.get('/:id', (req, res) => {
    Customer.query().findById(req.params.id)
                   .withGraphFetched('lists')
                   .then(customer => res.json(customer))
                   .catch(e => res.send(e))
})

// Search for customer (and get lists)
router.get('/v2/:id', (req, res) => {
    Customer.relatedQuery('lists').for(req.params.id)
    .then(lists => {
        res.json(lists)
    }).catch(e => {
        res.send(e)
    })
})

module.exports = router
