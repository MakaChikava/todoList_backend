const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Todo = require('./models/todo.js')

const MakaURI = process.env.MONGODB
// middleware
app.use(express.json());
app.use(cors());

// --------ROUTES--------- //

// Read
app.get('/', async (req, res)=>{
    const allTodos = await Todo.find({});
    res.json(allTodos);
})

// Create
app.post('/todo', async (req, res)=>{
    const newTodo = await Todo.create(req.body);
    res.json(newTodo);
})
// Edit
app.put('/todo/:id', async (req, res)=>{
    const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(updateTodo);
})
// Delete
app.delete('/todo/:id', async (req, res)=>{
    const deleteTodo = await Todo.findByIdAndRemove(req.params.id);
    res.json(deleteTodo);
})
// 


// connection
mongoose.connect(MakaURI)
mongoose.connection.once('open', ()=>{
    console.log('connected!!!!')
})
app.listen(8000, ()=>{
    console.log('Listening...')
})