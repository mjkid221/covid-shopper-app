const express = require('express')
const router = express.Router()

const Store = require('./models/Store')

router.get('/test', (req, res) => {
    Store.query().then(users => {
        res.json(users.stocks)
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
