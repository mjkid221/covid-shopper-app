const express = require('express')
const router = express.Router()

const Customer = require('../models/Customer')

// Search for customer (and get lists)
router.search('/:id', (req, res) => {
    Customer.query().findById(req.params.id)
                   .withGraphFetched('lists')
                   .then(customer => res.json(customer))
                   .catch(e => res.send(e))
})

module.exports = router
