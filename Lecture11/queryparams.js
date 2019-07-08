const express = require('express')
const app = express()
//const route = express.Router()
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
    const {name = 'Anonymous'} = req.query
    res.send('Hello ' + name);
})

app.post('/', (req, res) => {
  const {name = 'Anonymous'} = req.body
  res.send('Hello (via POST) ' + name);
})

app.get('/users/:name', (req, res) => {
  res.send('you asked for ' + req.params.name);
})

app.listen(3000)

// type of body parsers
// encoding, max payload can be set in POST
//const todoroute = require('./todos')
//app.use('/todos', todoroute)
// module.exports = route
