import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoListService, TodoRaw } from '../todo-list.service';

@Component({
  selector: 'app-todo-item-details',
  templateUrl: './todo-item-details.component.html',
  styleUrls: ['./todo-item-details.component.css']
})
export class TodoItemDetailsComponent implements OnInit {

  todo!: TodoRaw;

  constructor(private router: Router, private route: ActivatedRoute, private todoService: TodoListService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const todoId = Number(routeParams.get("todoId"));

    const possibleTodo = this.todoService.getTodoList().todos.find((todo) => todo.id === todoId)
    console.log(this.todoService.getTodoList())

    if (!possibleTodo) {
      this.router.navigate(["/404"], { skipLocationChange: true });
    } else {
      this.todo = possibleTodo;
    }
  }

}
