import { Component, EventEmitter, Output } from '@angular/core';
import { Todo, TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-item-add',
  templateUrl: './todo-item-add.component.html',
  styleUrls: ['./todo-item-add.component.css']
})
export class TodoItemAddComponent {

  @Output() onSave = new EventEmitter<Todo>();

  newTodo: Partial<Todo> = {};

  constructor(private todoService: TodoListService) { }

  addTodo() {
    if (!this.newTodo.title) {
      window.alert("Biite geben Sie einen Titel an!")
      return;
    }
    this.todoService.addTodo(this.newTodo as Todo)
    this.onSave.emit(this.newTodo as Todo)
  }

}
