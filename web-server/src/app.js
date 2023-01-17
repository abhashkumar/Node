const path = require('path')
const express = require('express')
const hbs = require('hbs')
const callback = require('../utils/callback.js')

console.log(__dirname)
console.log(__filename)
console.log(path.join(__dirname,'../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setting handle bars with express
app.set('view engine', 'hbs')

//setting views path
app.set('views', viewPath)


//registering partials path
hbs.registerPartials(partialsPath)

//this is used to customize the server
app.use(express.static(publicDirectoryPath))

app.get('/weatherHbs', (req, res) =>{
    res.render('weather', {
        title: 'weather App',
        name: 'Abhash Kumar'
    })
})

app.get('/HelpHbs', (req, res) =>{
    res.render('Help', {
        title: 'Help App',
        name: 'Abhash Kumar'
    })
})

app.get('/help', (req, res) => {
    res.send({
        name: 'Abhash',
        Age: 29
    })
})

app.get('/names', (req, res) => {
    res.send([{
        name: 'Abhash',
        Age: 29
    },
    {
        name: 'Aditya',
        Age:33
    }])
})

app.get('/weather', (req, res) => {
    res.send('<h1>Your weather</h1>')
})


app.get('/getUser', (req, res) => {
    var pageNumber = req.query.page
    if(!pageNumber){
        return res.send({
            error: 'Please provide a valid page'
        })
    }
    callback.getUsersFromPage(pageNumber, (error, response, body) => {
        if(error) {
            return res.send({
                error
            })
        }
        
        if(body.data.length == 0)
        {
            return res.send({
                error
            })
        }
        
        callback.getSpecificUser(body.data[0].id,(error, response, body) => {

            if(error) {
                return res.send({
                    error
                })
            }

           return res.send(body)
        
        })
    })

})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})

// match anything that has not been matched so far
app.get('*', (req, res) => {
    res.render('404', {
        title:'404',
        errorMessage: 'Page not found',
        name:'Abhash kumar'
    })
})
// used to render html, json or any file from specific directory