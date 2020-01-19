const path = require('path')
const express = require('express')

const app = express()
console.log(path.join(__dirname,'../public'))

// Define paths for express config
const rootPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates')

// Setup handlebars engine and views loctions
app.set('view engine','hbs')
app.set('views',viewPath)

// Setup static dir to serve 
app.use(express.static(rootPath))


app.get('',(req,res) => {
    res.render('index',{
        title: 'Wetaher',
        name : 'Harsh Patel'
    })
})

app.get('/help',(req,res) => {
    res.render('help',{
        title: 'Help',
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        title: 'About me',
        name : 'Harsh Patel'
    })
})

app.get('/weather',(req,res) => {
    res.send({
        forecast: 'Cloudy',
        location: 'Ahmedabad'
    })
})


app.listen(3000, () => {
    console.log('server is up onn port 3000.')
})

