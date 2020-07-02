const express = require('express')
const userController = require('./controllers/user-controller')

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello world');
})


app.use('/users', userController)

app.listen(3333)