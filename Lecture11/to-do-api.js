const express = require('express')

const app = express()


let todos = []

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send(todos)
})

app.post('/', (req, res) => {
    const { title, striked = false } = req.body
    const newTodo = {
        id: todos.length + 1,
        title,
        striked: striked == "true"
    }
    todos.push(newTodo)
    res.send(newTodo)
})

app.delete('/:id', (req, res) => {
    const todoToDelete = todos.find(todo => todo.id == req.params.id)
    if (!todoToDelete.striked) {
        return res.sendStatus(403)
    }

    todos = todos.filter(todo => todo.id != todoToDelete.id)
    res.sendStatus(200)
})

app.patch('/:id', (req, res) => {
    let todo = todos.find(t => t.id == req.params.id)
    todo.striked = !!req.body.striked
    todo.title = req.body.title
    res.send(todo)
})


app.listen(3000, function () {
    console.log("Running on 3000")
})
