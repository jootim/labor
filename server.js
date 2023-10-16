require('dotenv').config()
const express = require('express')
const app = express()
const path = require("path")
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const cors = require('cors')
const errorMiddlewares = require('./middleware/errorMiddleware')
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT

app.use(express.static(__dirname));
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorMiddlewares)
app.use(cors())
// Routes
app.use("/api/product",productRoute)

app.get('/main',(req,res)=>{
    res.sendFile(path.join(__dirname + '/pages/index.html'));
})

mongoose.connect(MONGO_URL).then(()=>{
app.listen(PORT)    
console.log('Connected')
}).catch((error)=>{
    console.log(error)
})

