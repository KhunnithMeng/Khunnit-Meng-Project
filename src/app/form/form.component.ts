import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { TableServiceService } from '../table-service.service';
import { Table } from '../shared/Table.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  row: Table;
  id: number;
  start: string;
  finish: string;
  defaultStatus: string;
  defaultPriority: string;
  defaultDate: Date;
  constructor(private tableService: TableServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.row = this.tableService.getRow(this.id);
    this.defaultStatus = 'Todo';
    this.defaultPriority = 'Medium';
    this.defaultDate = new Date();
  }
  onSubmit(form: NgForm) {
    if(this.id || this.id === 0) {
      this.tableService.updateValue(
        this.id,
        form.value.title,
        form.value.desc,
        new Date(form.value.start),
        new Date(form.value.finish),
        form.value.priority,
        form.value.status
      );
    } else {
      const id = +Math.floor(Math.random() * 1000);
      this.tableService.addValue(
        id,
        form.value.title,
        form.value.desc,
        new Date(form.value.start),
        new Date(form.value.finish),
        form.value.priority,
        form.value.status
      );
    }
    this.router.navigate(['table']);
  }
  
}
