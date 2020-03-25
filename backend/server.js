// Loading all dependencies
const express = require('express')
const mongoose = require('mongoose')
const keys = require('./keys/keys')
const cors = require('cors')


//Connecting to the Database
mongoose
.connect(keys.MongoURI, { useUnifiedTopology: true, useNewUrlParser: true})
.then(()=>{
    console.log("MongoDB connected")
})
.catch(err=>console.log(err))

mongoose.set('useCreateIndex', true);



// Loading all the api
const productApi = require('./api/addproduct')

// variables initialization
const app = express()

// CORS ERROR FOR SERVER REQUEST
app.use(cors())

// API IN APP
app.use('/api/product', productApi)


app.get('/', (req, res) => {
    res.json({
        msg: 'Api is working'
    })
})

// PORT 
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`app started at ${port}`)
})