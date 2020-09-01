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

/* Example of how to retreive customer with a given id */
router.get('/customer/:id', (req, res) => {
    Customer.query().findById(req.params.id).then(customer => {
        res.json(customer)
    }).catch(e => {
        res.send(e)
    })
})

/* Example of how to retrieve all of a customers lists */
router.get('/customer/:id/lists', async (req, res) => {
    const customer = await Customer.query().findById(req.params.id)
    customer.$relatedQuery('lists').then(lists => {
        res.json(lists)
    }).catch(e => {
        res.send(e)
    })
})

/*
Alteratively (for the above endpoint) you could do:

router.get('/customer/:id/lists', (req, res) => {
    Customer.relatedQuery('lists').for(req.params.id).then(lists => {
        res.json(lists)
    }).catch(e => {
        res.send(e)
    })
})
*/

module.exports = {
    router: router
}
