import { Injectable } from '@angular/core';
import { Table } from './shared/Table.model';
@Injectable({
  providedIn: 'root'
})
export class TableServiceService {
  table: Table[] = [
    {
      id: 3243,
      title: 'title1',
      description: 'this is description',
      dueDate: {
        start: new Date('1/1/2000'),
        finish: new Date('2/1/2000')
      },
      status: 'Done',
      priority: 'Medium'
    },
    {
      id: 2434,
      title: 'title2',
      description: 'this is description',
      dueDate: {
        start: new Date('1/1/2000'),
        finish: new Date('2/1/2000')
      },
      status: 'Done',
      priority: 'Medium'
    },
    {
      id: 2334,
      title: 'MVC',
      description: 'this is description',
      dueDate: {
        start: new Date('1/1/2000'),
        finish: new Date('2/1/2000')
      },
      status: 'Done',
      priority: 'Low'
    },
    {
      id: 5434,
      title: 'CRUD',
      description: 'this is description',
      dueDate: {
        start: new Date('1/1/2000'),
        finish: new Date('2/1/2000')
      },
      status: 'Done',
      priority: 'High'
    },
  ]

  constructor() { }

  getRows() { return this.table; }
  
  getRow(id: number) {
    return this.table.find(t => t.id === id)
  }

  addValue(
    id: number,
    title: string, 
    description: string, 
    start: Date,
    finish: Date,
    priority: string,
    status: string ) {
      this.table.push({
        id,
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
    const index = this.table.findIndex(t => t.id === id);
    this.table.splice(index, 1);
  }
  updateValue(
    id: number,
    title: string,
    description: string,
    start: Date,
    finish: Date,
    priority: string,
    status: string) {
      let row = {
        id,
        title,
        description,
        dueDate: {
          start,
          finish
        },
        priority,
        status
      }
      let selectedRow = this.table.findIndex(el => el.id === id);
      this.table[selectedRow] = row;
  }
}
