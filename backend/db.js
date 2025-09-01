require('dotenv').config();
const mng = require("mongoose")
const MONGO_URI = process.env.MONGO_URI
mng.connect(MONGO_URI).then(() => console.log('MongoDB connected...')).catch(err => console.log(err))

const todoSchema = {
    title: String,
    description: String,
    completed: Boolean
}

const todo = mng.model('todos', todoSchema)

module.exports = {
    todo
}