import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  @Input() todoAll: any;
  todo = {};
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addTodo() {
    this.todoAll.push(this.todo);
    this.http.post('/api/todo', this.todo)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
  }
}
