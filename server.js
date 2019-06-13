const express = require('express')
const app = express()
const axios = require('axios')
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


app.listen(8080, () => {
  console.log('listening on 8080')
})