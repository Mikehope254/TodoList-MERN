const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Bolean,
        default: false
    }
})

const TodoModel = mongoose.model("todos", TodoSchema)
module.exports = TodoModel