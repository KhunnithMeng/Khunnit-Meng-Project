import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Todo } from '../shared/Todo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  defaultStatus: string;
  defaultPriority: string;
  defaultDate: Date;
  constructor(private tableService: TodoService,
              private router: Router) { }

  ngOnInit(): void {
    this.defaultStatus = 'Todo';
    this.defaultPriority = 'Medium';
    this.defaultDate = new Date();
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const id = +Math.floor(Math.random() * 1000);
    this.tableService.addValue(new Todo(
      id,
      value.title,
      value.description,
      {
        start: new Date(value.start),
        finish: new Date(value.finish)
      },
      value.status,
      value.priority
    ));
    this.router.navigate(['/']);
  }
  
}
