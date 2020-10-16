const express = require('express')
const router = express.Router()

const Store = require('../models/Store')
const Stock = require('../models/Stock')
const ListProduct = require('../models/ListProduct')
const Crowd = require('../models/Crowd')
const Suburb = require('../models/Suburb')



//Filter Function to sort recommended stores with covid numbers less than user's input
router.get('/list/:list_id/covid/:num', async (req, res) => {
                 Store.query().withGraphFetched('suburb')
                 .whereIn(
                     'store_id',
                      Stock.query().alias('t')
                           .select('t.store_id')
                           .join('Shopping_List_Products as s', 's.product_id', 't.product_id')
                           .join('stores as st','t.store_id','st.store_id')
                           .join('suburbs as c','c.suburb_id','st.suburb_id')
                           .where('s.list_id', req.params.list_id)
                           .whereRaw('c.covid_case_numbers <= ?', req.params.num)
                           .whereRaw('s.product_quantity <= t.quantity')
                           .whereRaw('s.product_quantity <= t.purchase_limit')
                           .groupBy('t.store_id')
                           .havingRaw(
                            'count(*) = ?',
                            ListProduct.query().where('list_id', req.params.list_id).count()
                        )
                      )
                 .then(stores => res.json(stores))
                 .catch(e => res.send(e))
    

})


//Filter Function to sort recommended stores with desired hours from user's input
router.get('/list/:list_id/hours/:time', async (req, res) => {
    Store.query().withGraphFetched('suburb')
    .whereIn(
        'store_id',
        Stock.query().alias('t')
            .select('t.store_id')
            .join('Shopping_List_Products as s', 's.product_id', 't.product_id')
            .join('stores as st','t.store_id','st.store_id')
            .join('crowds as c','c.store_id','st.store_id')
            .where('s.list_id', req.params.list_id)
            .whereRaw('c.hours = ?', req.params.time)
            .whereRaw('s.product_quantity <= t.quantity')
            .whereRaw('s.product_quantity <= t.purchase_limit')
            .groupBy('t.store_id')
            .havingRaw(
            'count(*) = ?',
            ListProduct.query().where('list_id', req.params.list_id).count()
        )
        )
    .then(stores => res.json(stores))
    .catch(e => res.send(e))


})


//Filter Function to sort recommended stores with crowdedness and desired hours from user's input
router.get('/list/:list_id/hours/:time/crowdedness/:level', async (req, res) => {
                Store.query().withGraphFetched('suburb')
                .whereIn(
                    'store_id',
                    Stock.query().alias('t')
                        .select('t.store_id')
                        .join('Shopping_List_Products as s', 's.product_id', 't.product_id')
                        .join('stores as st','t.store_id','st.store_id')
                        .join('crowds as c','c.store_id','st.store_id')
                        .where('s.list_id', req.params.list_id)
                        .whereRaw('c.hours = ?', req.params.time)
                        .whereRaw('c.crowdedness = ?', req.params.level)
                        .whereRaw('s.product_quantity <= t.quantity')
                        .whereRaw('s.product_quantity <= t.purchase_limit')
                        .groupBy('t.store_id')
                        .havingRaw(
                        'count(*) = ?',
                        ListProduct.query().where('list_id', req.params.list_id).count()
                    )
                    )
                .then(stores => res.json(stores))
                .catch(e => res.send(e))


})


module.exports = router