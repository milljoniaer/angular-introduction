import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { FormsModule } from '@angular/forms';
import { TodoItemDetailsComponent } from './todo-item-details/todo-item-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoItemAddComponent } from './todo-item-add/todo-item-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoItemDetailsComponent,
    NotFoundComponent,
    TodoItemAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
