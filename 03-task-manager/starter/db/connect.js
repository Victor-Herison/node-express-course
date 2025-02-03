const mongoose = require('mongoose')
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@tasks-manager.2w164.mongodb.net/tasks-manager?retryWrites=true&w=majority&appName=tasks-manager`;

const connect = (uri) => {
  return mongoose.connect(uri).then(console.log('conectado')).catch(err => console.log(err))
}

module.exports = connect(uri)