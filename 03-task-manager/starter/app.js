const express = require("express");
const app = express()
const PORT = 5000
const tasks = require('./routes/tasks')


app.use(express.json())
app.use('/api/v1/tasks', tasks)




app.listen(PORT, ()=>{
    console.log("app rodando na porta "+ PORT)
})