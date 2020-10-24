const express = require('express')
const router = express.Router()

const Product = require('../models/Product')

// Search for products
router.search('/', (req, res) => {
    	console.log(req.body)
	Product.query().withGraphFetched('[brand, category]')
                   .where('product_name', 'like', req.body.regex)
                   .then(products => res.json(products))
                   .catch(e => res.send(e))
})

module.exports = router
