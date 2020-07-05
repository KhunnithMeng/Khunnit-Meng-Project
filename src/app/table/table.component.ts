import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../shared/Todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  todos: Todo[];
  
  constructor(private todoService: TodoService,
              private router: Router) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos()
  }
  isHigh(priority: string) {
    return priority === 'High' ? 'alert alert-danger' : undefined;
  }
  onDelete(id: number) {
    this.todoService.deleteTodoById(id);
  }
  onUpdate(id: number) {
    this.router.navigate(['form', id]);
  }
}
