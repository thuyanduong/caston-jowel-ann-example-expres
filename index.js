const express = require('express')
const cors = require("cors")
const app = express()

const port = process.env.PORT || 3000
//const port = 3000 || process.env.PORT 

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/caston', (req, res) => {
  res.send('Hello Caston!')
})

app.get('/jowel', (req, res) => {
  res.send('Hello Jowel!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})