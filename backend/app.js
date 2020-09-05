const express = require('express')
const bodyParser = require('body-parser')

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '757583a3b3a4931b',
    database : 'social_distancing'
  }
})

const { Model } = require('objection')

Model.knex(knex)

const app = express()

app.use(bodyParser)
app.set('trust proxy', 'loopback')
app.use('/api', require('./api').router)

const port = 8081
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
