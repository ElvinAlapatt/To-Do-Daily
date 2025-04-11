import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo/todo';
@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
  standalone: true
})
export class TodoItemComponent {
  @Input() todo !: Todo;
  @Output() delete = new EventEmitter<number>();
  @Output() todoComplete = new EventEmitter<number>();
}
