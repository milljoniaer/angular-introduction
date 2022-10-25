import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todos = [
    { id: 0, title: "Angular Tutorial machen", done: false }
  ]

  constructor() { }

  addTodo(todo: any) {
    const rawTodo = { id: this.todos.length, ...todo }
    this.todos.push(rawTodo);
    return rawTodo;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id != id)
  }

  getTodos() {
    return this.todos;
  }
}
