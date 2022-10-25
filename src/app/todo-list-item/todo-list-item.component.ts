import { Component, Input, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})

export class TodoListItemComponent implements OnInit {

  @Input() todo: any;

  constructor(private todoService: TodoListService) { }

  ngOnInit(): void {
  }


  removeTodo(id: number) {
    this.todoService.removeTodo(id)
  }

  setDone(todo: any) {
    todo!.done = !todo?.done;
  }
}
