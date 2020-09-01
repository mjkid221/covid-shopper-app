const express = require('express')
const router = express.Router()

const User = require('./models/User')

router.get('/test', (req, res) => {
    User.query().then(users => {
        res.json(users)
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
