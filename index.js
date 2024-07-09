const express = require('express')
const userRouter = require('./route/user')
const cors = require('cors')
const path = require('path')
require('dotenv').config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'/public')))
app.use('/api',userRouter)

const PORT = process.env.PORT 
app.listen(PORT,() => {
    console.log(`server is listening ${PORT}`)
})