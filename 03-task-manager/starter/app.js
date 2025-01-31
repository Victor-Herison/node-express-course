
const express = require("express");
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 3000

const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
const dotenv = require("dotenv")
dotenv.config()

app.use(express.json())
app.use('/api/v1/tasks', tasks)




app.listen(PORT, ()=>{
    console.log("app rodando na porta " + PORT)
})