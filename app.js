const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const path = require('path')

const app = express()

//view engine setup
app.set('views', path.join(__dirname, 'views'))
// app.engine('handlebars', exphbs({defaultLayout: 'main'}))
// app.set('view engine', 'handlebars')
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'main'}))
app.set('view engine', 'hbs')

//static public folder
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('pages/index')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server started at port '+port)
})