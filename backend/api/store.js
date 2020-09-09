const express = require('express')
const router = express.Router()

const Store = require('../models/Store')
const Stock = require('../models/Stock')
const ListProduct = require('../models/ListProduct')

// Get store by id
router.get('/:id', (req, res) => {
    Store.query().findById(req.params.id)
                .withGraphFetched('[suburb, stocks.product]')
                .then((store) => res.json(store))
                .catch(e => res.send(e))
})

// Get all stores
router.get('/', (req, res) => {
    Store.query().withGraphFetched('[suburb, stocks.product]')
                 .then((store) => res.json(store))
                 .catch(e => res.send(e))
})

// Find Store who can supply all items in list
router.get('/can-supply-list/:id', async (req, res) => {
    /*
    Stock.query().select('Stocks.store_id')
                 .join('Shopping_List_Products', 'Shopping_List_Products.product_id', 'Stocks.product_id')
                 .where('product_quantity', '<=', 'quantity')
                 .where('product_quantity', '<=', 'purchase_limit')
                 .where('list_id', req.params.id)
                 .groupBy('store_id')
                 .havingRaw('count(*) > 0')//, ListProduct.query().count().where('list_id', req.params.id))
                 .then(store_ids => res.json(store_ids))
                 .catch(e => res.send(e))

                 .where('s.product_quantity', '<=', 'Stocks.quantity')
                 .where('s.product_quantity', '<=', 'Stocks.purchase_limit')
    */
    Stock.query().alias('t').select('t.store_id')
                 .join('Shopping_List_Products as s', 's.product_id', 't.product_id')
                 .where('s.list_id', req.params.id)
                 .whereRaw('s.product_quantity <= t.quantity')
                 .whereRaw('s.product_quantity <= t.purchase_limit')
                 .groupBy('t.store_id')
                 .havingRaw('count(*) > ?', ListProduct.query().count().where('list_id', req.params.id))
                 .then(stores => res.json(stores))
                 .catch(e => res.send(e))

})


/*
SELECT store_id FROM
(
SELECT a.product_id, a.quantity, a.purchase_limit, b.product_quantity, a.store_id FROM Stocks a
JOIN Shopping_List_Products b on a.product_id = b.product_id
WHERE list_id = 6000
AND b.product_quantity <= a.quantity
AND b.product_quantity <= a.purchase_limit
) c
GROUP BY store_id
HAVING COUNT(*) = (SELECT COUNT(*) FROM Shopping_List_Products where list_id = 6000)
*/


module.exports = router
