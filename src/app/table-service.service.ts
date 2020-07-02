import { Injectable } from '@angular/core';
import { Table } from './shared/Table.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TableServiceService {
  table: Table[] = [
    {
      title: 'CRUD',
      description: 'this is description',
      dueDate: {
        start: new Date('1/1/2000'),
        finish: new Date('2/1/2000')
      },
      status: 'Done',
      priority: 'Medium'
    },
    {
      title: 'CRUD',
      description: 'this is description',
      dueDate: {
        start: new Date('1/1/2000'),
        finish: new Date('2/1/2000')
      },
      status: 'Done',
      priority: 'Medium'
    },
  ]

  constructor() { }

  getRows() { return this.table; }
  
  getRow(id: number) {
    return this.table[id]
  }

  addValue(
    title: string, 
    description: string, 
    start: Date,
    finish: Date,
    priority: string,
    status: string ) {
      this.table.push({
        title, 
        description,
        dueDate: {
          start,
          finish
        },
        priority, 
        status
      })
    }
  deleteRow(id: number) {
    this.table.splice(id, 1);
  }
  updateValue(
    id: number,
    title: string,
    description: string,
    start: Date,
    finish: Date,
    priority: string,
    status: string) {
      this.table[id] = {
        title,
        description,
        dueDate: {
          start,
          finish
        },
        priority,
        status
      }
  }
}
