const express = require('express') //imports express library 
const mongoose = require('mongoose') //imports mongoose for MongoDB
const cors = require('cors') //imports the cors middleware
const TodoModel = require('./Models/Todo')

const app = express() //creates an instance of expres application
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
})) //enables cors middleware in the app to handle cross-origin requests
app.use(express.json()) //middleware by express to parse JSON data in the request body

mongoose.connect('mongodb://127.0.0.1:27017/text')
    .then(result => console.log("Connected to Mongod"))
    .catch(err => console.error("Failed to connect to Mongodb:",err))

app.get('/get', (req, res)=>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req,res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id:id},{done:true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res)=>{
    const {id} = req.params
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result =>res.json(result))
    .catch(err => res.json(err))

})
app.listen(3000, ()=>{
    console.log("Server is running")
})