import { Component, OnInit, OnDestroy } from '@angular/core';
import { TableServiceService } from '../table-service.service';
import { Table } from '../shared/Table.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  rows: Table[];
  constructor(private tableService: TableServiceService,
              private router: Router) {}

  ngOnInit(): void {
    this.rows = this.tableService.getRows();
  }
  onDelete(id: number) {
    this.tableService.deleteRow(id);
  }
  onUpdate(id: number) {
    this.router.navigate(['form', id]);
  }
}
