import { Component } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoList = this.todoService.getTodoList();
  dialogIsOpen: boolean = false;

  constructor(private todoService: TodoListService) { }

  setDialogIsOpen(value: boolean) {
    this.dialogIsOpen = value;
  }
}
