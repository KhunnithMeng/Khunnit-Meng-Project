import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../shared/Todo.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  todo: Todo;
  id: number;
  updateTodo: FormGroup;
  constructor(private todoService: TodoService,
              private route: ActivatedRoute,
              private router: Router,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    const todoSelected = this.todoService.getTodoById(this.id);

    const startDateString = this.datePipe
      .transform(todoSelected.dueDate.start, 'yyyy-MM-dd');
    const finishDateString = this.datePipe
      .transform(todoSelected.dueDate.finish, 'yyyy-MM-dd');

    const formControl = (value,valid) => new FormControl(value, valid);
    const requiredTodo = value => formControl(value, Validators.required);
    
    this.updateTodo = new FormGroup({
      title: requiredTodo(todoSelected.title),
      start: requiredTodo(startDateString),
      finish: requiredTodo(finishDateString),
      status: requiredTodo(todoSelected.status),
      priority: requiredTodo(todoSelected.priority),
      description: requiredTodo(todoSelected.description)
    });
  }

  onSubmit() {
    const value = this.updateTodo.value;
    const todoValue = new Todo(
      this.id,
      value.title, 
      value.description,
      {
        start: new Date(value.start), 
        finish: new Date(value.finish)
      },
      value.status,
      value.priority);
    this.todoService.updateTodoById(todoValue)
    this.router.navigate(['/']);
  }
}
