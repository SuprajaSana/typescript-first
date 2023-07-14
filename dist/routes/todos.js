"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
    const body = req.params;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ message: "Added Todo Successfully", todo: newTodo });
});
router.put("/todo/:todoId", (req, res, next) => {
    const params = req.params;
    const id = params.todoId;
    const todoIndex = todos.findIndex((todos) => todos.id === id);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: req.body.text,
        };
        return res
            .status(200)
            .json({ message: "Successfully updated Todo", todos: todos });
    }
    res.status(404).json({ message: "Todo not found" });
});
router.delete("/todo/:todoId", (req, res, next) => {
    const params = req.params;
    const id = params.todoId;
    todos = todos.filter((todo) => todo.id !== id);
    res.status(200).json({ message: "Successfully deleted Todo", todos: todos });
});
exports.default = router;
