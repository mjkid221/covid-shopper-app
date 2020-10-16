const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '319Sehwag26',
    database : 'corrected'
  }
})

const { Model } = require('objection')

Model.knex(knex)

const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('trust proxy', 'loopback')

//app.use('/', require('./api').router)
app.use('/api/list', require('./api/list'))
app.use('/api/product', require('./api/product'))
app.use('/api/store', require('./api/store'))
app.use('/api/filter', require('./api/filter'))
app.use('/api/customer', require('./api/customer'))


const port = 8081
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
