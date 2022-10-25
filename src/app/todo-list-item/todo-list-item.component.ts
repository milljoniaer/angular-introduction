import { Component, Input } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})

export class TodoListItemComponent {

  @Input() todo: any;
  inEdit: boolean = false;

  constructor(private todoService: TodoListService) { }

  removeTodo(id: number) {
    this.todoService.removeTodo(id)
  }

  setDone(todo: any) {
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
