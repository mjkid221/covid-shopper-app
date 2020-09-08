const express = require('express')
const router = express.Router()

const List = require('../models/List')

// Create a new list
router.post('/', (req, res) => {
    List.query().insertAndFetch(req.body)
                .then(list => res.json(list))
                .catch(e => res.send(e))
})

// Retrieve list
router.get('/:id', (req, res) => {
    List.query().findById(req.params.id)
                .withGraphFetched('products.[brand, category]')
                .then(list => res.json(list))
                .catch(e => res.send(e))
})

// Update following fields of a list:
// list_name
// list_date
router.patch('/:id', (req, res) => {
    List.query().patchAndFetchById(req.params.id, req.body)
                .then(list => res.json(list))
                .catch(e => res.send(e))
})

// Add item to list
router.post('/:id/product', (req, res) => {
    List.relatedQuery('products')
        .for(req.params.id)
        .relate(req.body)
        .then(list => res.json(list))
        .catch(e => res.send(e))
})

// Update quantity of item in list
router.patch('/:id/product/:pid', (req, res) => {
    List.relatedQuery('products')
        .for(req.params.id)
        .patch(req.body)
        .where('Products.product_id', req.params.pid)
        .then(list => res.json(list))
        .catch(e => res.send(e))
})

// Delete item from list
router.delete('/:id/product/:pid', (req, res) => {
    List.relatedQuery('products')
        .for(req.params.id)
        .unrelate()
        .where('Products.product_id', req.params.pid)
        .then(() => res.sendStatus(204))
        .catch(e => res.send(e))
})

// Delete list
router.delete('/:id', (req, res) => {
    List.query().deleteById(req.params.id)
                .then(() => res.status(204).end())
                .catch(e => res.send(e))
})


module.exports = router
