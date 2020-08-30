const express = require('express')
const router = express.Router()

const User = require('models/User')

router.get('/test', (req, res) => {
    User.query().then(users => {
        res.json(users)
    })
})

module.exports = {
    router: router
}
