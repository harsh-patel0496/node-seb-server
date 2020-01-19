const express = require('express')
const app = express()

app.param('id', function (req, res, next, id) {
    console.log('CALLED ONLY ONCE')
    next()
})
app.get('/user/:id', function (req, res, next) {
    console.log(req.params)
    next()
})
  
app.get('/user/:id', function (req, res) {
    console.log('and this matches too')
    res.end()
})

app.listen(3000, () => {
    console.log('server is up onn port 3000.')
})
