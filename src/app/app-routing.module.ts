import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoItemDetailsComponent } from './todo-item-details/todo-item-details.component';
import { TodoListComponent } from "./todo-list/todo-list.component";

const routes: Routes = [
  { path: "", component: TodoListComponent },
  { path: "404", component: NotFoundComponent },
  { path: "todo/:todoId", component: TodoItemDetailsComponent},
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
