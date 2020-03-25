// Loading all dependencies
const express = require('express')
const mongoose = require('mongoose')
const keys = require('./keys/keys')
const bodyParser = require('body-parser');
const passport = require('passport')
const cookieSession = require('cookie-session')
const cors = require('cors')


//Connecting to the Database
mongoose
.connect(keys.MongoURI, { useUnifiedTopology: true, useNewUrlParser: true})
.then(()=>{
    console.log("MongoDB connected")
})
.catch(err=>console.log(err))

mongoose.set('useCreateIndex', true);



// passport
require('./auth/passport')(passport)

// Loading all the api
const userApi = require('./api/user/user')
const authApi = require('./api/auth/auth')
const stripeApi = require('./api/payment/stripe')
const productApi = require('./api/product/product')
const bidApi = require('./api/bidding/bidding')
const searchApi = require('./api/search/search')

// variables initialization
const app = express()

// CORS ERROR FOR SERVER REQUEST
app.use(cors())

// BODY PARSER MIDDLEWARE IN USE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// PASSPORT 
app.use(
    cookieSession({
        maxAge: 14*24*60*1000,
        keys: [keys.CookieSecret]
    })
)
app.use(passport.initialize())
app.use(passport.session())

// API IN APP
app.use('/auth', authApi)
app.use('/api/user', userApi)
app.use('/api/payment', stripeApi)
app.use('/api/product', productApi)
app.use('/api/bid', bidApi)
app.use('/api/search', searchApi)


app.get('/', (req, res) => {
    res.json({
        msg: 'user logged in'
    })
})


app.get('/fail', (req, res)=>{
    console.log("FAILURE REDIRECT >>>>")
    res
    .status(400)
    .json({
        msg: "Wrong Credentials"
    })
})

// PORT 
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`app started at ${port}`)
})