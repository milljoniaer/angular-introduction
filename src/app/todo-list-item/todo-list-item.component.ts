import { Component, Input } from '@angular/core';
import { TodoListService, TodoRaw } from '../todo-list.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})

export class TodoListItemComponent {

  @Input() todo!: TodoRaw;
  inEdit: boolean = false;

  constructor(private todoService: TodoListService) {}

  removeTodo(id: number) {
    this.todoService.removeTodo(id)
  }

  setDone(todo: TodoRaw) {
    todo!.done = !todo?.done;
  }

  setInEdit(newInEdit: boolean) {
    this.inEdit = newInEdit;
  }

  changeTodoTitle(title: string) {
    this.todo.title = title;
    this.inEdit = false;
  }
}
