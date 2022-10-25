import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoService = {todos: [
    { id: 0, title: "Angular Tutorial machen", done: false }
  ]}

  constructor() { }

  addTodo(todo: any) {
    const rawTodo = { id: this.todoService.todos.length, ...todo }
    this.todoService.todos.push(rawTodo);
    return rawTodo;
  }

  removeTodo(id: number) {
    this.todoService.todos = this.todoService.todos.filter((todo) => todo.id != id)
  }

  getTodoList() {
    return this.todoService;
  }
}
