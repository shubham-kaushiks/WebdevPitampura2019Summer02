const express = require('express')
const app = express()

function m1(req, res, next) {
  console.log("m1")
  next()
}
function m2(req, res, next) {
  console.log("m2")
  next()
}

app.get('/', (req, res, next) => {
    //res.sendStatus(401)
    res.send('OK');
    next()
})
app.use(m1);

app.get('/users', (req, res, next) => {
    res.send('Got Users');
    next()
})
app.use('/users', m2);

app.get('/users/1', (req, res) => {
    res.send('Got Users/1')
})


// app.use((req, res, next) => {
//
// })

app.listen(3000)
//middlewares are functions with this signature (req, res, next)
