import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit {
  @Input() todoAll: any;
  @Input() todo = {};
  constructor(private http: HttpClient) { }


  ngOnInit() {
  }

  deleteTodo(id) {
    this.http.delete('/api/todo/' + id)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
    this.todoAll.splice(id, 1);
  }

}
