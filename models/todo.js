const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
todo: String,
check: Boolean
})

const todo = mongoose.model('Todos', todoSchema);
module.exports= todo;