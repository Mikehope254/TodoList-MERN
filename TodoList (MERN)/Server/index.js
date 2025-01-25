const express = require('express') //imports express library 
const mongoose = require('mongoose') //imports mongoose for MongoDB
const cors = require('cors') //imports the cors middleware
const TodoModel = require('./Models/Todo')

const app = express() //creates an instance of expres application
app.use(cors()) //enables cors middleware in the app to handle cross-origin requests
app.use(express.json()) //middleware by express to parse JSON data in the request body

mongoose.connect('mongodb://127.0.0.1:27017/test')

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result =>res.json(result))
    .catch(err => res.json(err))

})
app.listen(3001, ()=>{
    console.log("Server is running")
})