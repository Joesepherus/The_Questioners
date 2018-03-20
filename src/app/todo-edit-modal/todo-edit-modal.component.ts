import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-edit-modal',
  templateUrl: './todo-edit-modal.component.html',
  styleUrls: ['./todo-edit-modal.component.css']
})
export class TodoEditModalComponent implements OnInit {
  @Input() todoAll: any;
  @Input() todo = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  editTodo(id) {
    this.http.put('/api/todo/' + id, this.todo)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
  }

}
