import { Injectable } from '@angular/core';

export interface Todo {
  title: string;
  done: boolean;
}

export interface TodoRaw extends Todo {
  id: number;
}

interface TodoList {
  todos: TodoRaw[];
}

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoList: TodoList = {
    todos: [
      { id: 0, title: "Angular Tutorial machen", done: false }
    ]
  }

  constructor() { }

  addTodo(todo: Todo) {
    const rawTodo: TodoRaw = { id: this.todoList.todos.length, ...todo }
    this.todoList.todos.push(rawTodo);
    return rawTodo;
  }

  removeTodo(id: number) {
    this.todoList.todos = this.todoList.todos.filter((todo) => todo.id != id)
  }

  getTodoList() {
    return this.todoList;
  }
}
