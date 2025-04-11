import { Component } from '@angular/core';
import { Todo } from './todo';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo',
  imports: [FormsModule,TodoItemComponent,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  standalone : true
})
export class TodoComponent {
  todos : Todo[] =[
    {id : 1,content : "do the dishes",completed : false},
    {id : 2,content : "Wash clothes",completed : false}
  ]

  newtodo : string = "";
  a :number = 10;
  addTodo(){
    if (this.newtodo.trim()){
      this.todos.push({
        id : Date.now(),
        content : this.newtodo,
        completed : false
      });
    }
    this.newtodo = "";
  }

  delete(id : number){
    this.todos = this.todos.filter(todo => todo.id != id);
  }

  todoComplete(id : number){
    this.todos = this.todos.map(todo => {
      if (todo.id == id){
        return{...todo,completed : !todo.completed}
      }
      return todo
    });
  }
  get remainingCount(): number {
    return this.todos.filter(t => !t.completed).length;
  }
}