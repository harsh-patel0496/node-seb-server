const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')
console.log(path.join(__dirname,'../public'))

// Define paths for express config
const rootPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

const port = process.env.PORT || 3000

// Setup handlebars engine and views loctions
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath)
// Setup static dir to serve 
app.use(express.static(rootPath))


app.get('',(req,res) => {
    res.render('index',{
        title: 'Weather',
        name : 'Harsh Patel'
    })
})

app.get('/help',(req,res) => {
    res.render('help',{
        title: 'Help',
        name : 'Harsh Patel'
    })
})

app.get('/about',(req,res) => {
    
    res.render('about',{
        title: 'About me',
        name : 'Harsh Patel'
    })
})

app.get('/weather',(req,res) => {
    if(!req.query.address){
        return res.send({
            error: 'Address is missing'
        })
    }
    geocode(req.query.address,(error,cord) => {
        if(error){
            return res.send({
                error: error
            })
        }

        weather(cord,(error,data) => {
            if(error){
                return res.send({
                    error: error
                })
            } 
            res.send({
                forecast: 'It is currently ' + data.currently.temperature + ' Out now and there is ' + data.currently.precipProbability + ' chances of rain. and the wind speed is ' + data.currently.windSpeed + ' km/h',
                location: req.query.address,
                address: req.query.address,
                data:data
        })
           
            
        })
        
        
    })
})

app.get('/product',(req,res) => {
    if(!req.query.search){
        return res.send({
            error: 'search string is missing'
        })
    }
    console.log(req.query)
    res.send(req.query)
})

app.get('*',(req,res) => {
    res.render('404',{
        name:'Harsh Patel'
    })
})
app.listen(port, () => {
    console.log(`server is up onn port ${port}.`)
})

