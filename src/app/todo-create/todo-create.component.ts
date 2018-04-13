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
    create_date: (new Date).toISOString()
  };
  latest;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addTodo() {
    this.http.get('/api/todo-latest').subscribe(data => {
      this.latest = data;
      console.log(data);
      let newTodo = this.todo;
      newTodo.state = 'inprogress';
      newTodo.id = (++this.latest.id).toString();
      newTodo.create_date = (new Date).toISOString();
      this.todo = { state: '', id: '', create_date: (new Date).toISOString() };
      this.todoAll.push(newTodo);
      this.http.post('/api/todo', newTodo)
        .subscribe(res => {
        }, (err) => {
          console.log(err);
        }
        );
    });
  }

}
