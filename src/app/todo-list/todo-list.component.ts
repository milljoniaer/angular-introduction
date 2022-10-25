import { Component } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoList = this.todoService.getTodoList();

  inputField?: HTMLInputElement = undefined;

  constructor(private todoService: TodoListService) { }

  addTodo(todoElement: HTMLInputElement) {
    this.todoService.addTodo({ title: todoElement.value, done: false })
    todoElement.value = ""
  }
}
