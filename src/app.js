const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)

// Setup static Directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather',
        name: 'Hariharan'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About',
        name: 'Hariharan'
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        title: 'Help',
        helpText: 'This is some helpful text'
    })
})

app.listen('8080',(res) => {
    console.log('Server is up and running in port 8080')
})
