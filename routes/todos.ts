import { Router } from "express";

import { Todo } from "../models/todos";

let todos: Todo[] = [];

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };
  todos.push(newTodo);
  res.status(201).json({ message: "Added Todo Successfully", todo: newTodo });
});

router.put("/todo/:todoId", (req, res, next) => {
  const id = req.params.todoId;
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
  const id = req.params.todoId;
    todos = todos.filter((todo) => todo.id !== id);
  res.status(200).json({ message: "Successfully deleted Todo", todos: todos });
});

export default router;
