const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

// middleware to handle JSON parsing
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})