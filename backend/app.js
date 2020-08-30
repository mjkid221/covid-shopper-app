const express = require('express')

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '757583a3b3a4931b',
    database : 'test'
  }
});

const app = express()
const port = 8081

app.set('trust proxy', 'loopback');
app.use('/api', require('./api').router)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
