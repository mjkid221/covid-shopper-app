const express = require('express')

const app = express()
const port = 8081

app.set('trust proxy', 'loopback');

app.get('/test', (req, res) => {
  res.send('This is a test endpoint')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
