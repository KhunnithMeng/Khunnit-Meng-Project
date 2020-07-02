import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { TableServiceService } from '../table-service.service';
import { Table } from '../shared/Table.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common'

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
  constructor(private tableService: TableServiceService,
              private route: ActivatedRoute,
              private router: Router,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.row = this.tableService.getRow(this.id);
    if(this.id || this.id === 0) {
      this.start = this.datePipe.transform(
        this.row.dueDate.start, 'MM/dd/yyyy'
      )
      this.finish = this.datePipe.transform(
        this.row.dueDate.finish, 'MM/dd/yyyy'
      )
    }
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
      this.tableService.addValue(
        form.value.title,
        form.value.desc,
        new Date(form.value.start),
        new Date(form.value.finish),
        form.value.priority,
        form.value.status
      );
    }
    console.log(form.value.status)
    this.router.navigate(['table']);
  }
}
