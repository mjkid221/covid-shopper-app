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

app.use('/', require('./api').router)
app.use('/list', require('./api/list'))
app.use('/product', require('./api/product'))
app.use('/store', require('./api/store'))
app.use('/filter', require('./api/filter')) 
//Added HTTP method of the request that the middleware function handles for filters

const port = 8081
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
