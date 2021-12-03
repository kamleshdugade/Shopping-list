import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  nextId = 4;
  todos = [
    {
      id: 1,
      label: 'Bring Milk',
      done: false
    },
    {
      id: 2,
      label: 'Soya oil',
      done: false
    },
    {
      id: 3,
      label: 'Everest Masala',
      done: true
    },
  ];

  // tslint:disable-next-line:typedef
  // @ts-ignore
  delete(todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  // @ts-ignore
  add(newTodoLabel) {
    const newTodo = {
      id: this.nextId,
      temp : this.nextId,
      label: newTodoLabel,
      done: false
    };
    if (newTodo.label.trim() !== '') {
      this.todos.push(newTodo);
      this.nextId++;
    }else {
      alert('Insert Something into list');
    }
  }

  // @ts-ignore
  toggle(todo) {
    todo.done = !todo.done;
  }
}
