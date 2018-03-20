import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  @Input() todoAll: any;
  todo = {
    state: {},
    id: {},
  };
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addTodo() {
    let newTodo = this.todo;
    newTodo.state = 'inprogress';
    newTodo.id = this.todoAll.length;
    this.todo = { state: '', id: '' };
    this.todoAll.push(newTodo);
    this.http.post('/api/todo', newTodo)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
  }
}
