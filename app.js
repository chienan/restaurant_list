const express = require('express')
const port = 3000
const exphbs = require('express-handlebars')
const hbshelpers = require('handlebars-helpers')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
require('./config/mongoose')


const app = express()

// set view engine
app.engine('handlebars', exphbs({ helpers: hbshelpers(), defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// set middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))

app.use(routes)


// setting static files


app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})