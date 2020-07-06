import { Injectable } from '@angular/core';
import { Todo } from './shared/Todo.model';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
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

  getTodos() { return this.todos; }
  
  getTodoById(id: number) {
    return this.todos.find(t => t.id === id);
  }

  addValue(todo: Todo) {
    this.todos.push(
      new Todo(
        todo.id, 
        todo.title, 
        todo.description,
        {
          start: todo.dueDate.start,
          finish: todo.dueDate.finish
        },
        todo.status,
        todo.priority
      ));
  }
  deleteTodoById(id: number) {
    const index = this.todos.findIndex(t => t.id === id);
    this.todos.splice(index, 1);
  }
  updateTodoById(value: Todo) {
      const todo = new Todo(
        value.id, 
        value.title,
        value.description,
        {start: value.dueDate.start, finish: value.dueDate.finish},
        value.status,
        value.priority);
      const index = this.todos.findIndex(el => el.id === value.id);
      this.todos[index] = todo;
  }
}
