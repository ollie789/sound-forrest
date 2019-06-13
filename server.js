const express = require('express')
const app = express()
const axios = require('axios')
const PORT = process.env.PORT || 8080
// const logger = require('./logger')

app.set('view engine', 'ejs') // express thing built -in

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req,res) => {
res.render('about')
})

app.get('/walk', (req,res) => {
  res.render('walk')
  })


app.listen(PORT, () => {
  console.log('listening on 8080')
})