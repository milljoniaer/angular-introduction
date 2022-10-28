import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoList = this.todoService.getTodoList();
  dialogIsOpen: boolean = false;

  constructor(private todoService: TodoListService, public translate: TranslateService) {
    console.log(translate)
  }

  setDialogIsOpen(value: boolean) {
    this.dialogIsOpen = value;
  }
}
