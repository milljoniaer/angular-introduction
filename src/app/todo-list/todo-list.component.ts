import { Component } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos = this.todoService.getTodos();

  inputField?: HTMLInputElement = undefined;

  constructor(private todoService: TodoListService) { }

  addTodo(todoElement: HTMLInputElement) {
    this.todoService.addTodo({ title: todoElement.value, done: false })
    todoElement.value = ""
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id)
    this.todos = this.todoService.getTodos()
  }

  setDone(todo: any) {
    todo!.done = !todo?.done;
  }
}
