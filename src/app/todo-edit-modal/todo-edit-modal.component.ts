import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-todo-edit-modal',
  templateUrl: './todo-edit-modal.component.html',
  styleUrls: ['./todo-edit-modal.component.css']
})
export class TodoEditModalComponent implements OnInit {
  @Input() todoAll: any;
  @Input() todo = {};

  constructor(private http: HttpClient, private globalsService: GlobalsService) { }

  ngOnInit() {
  }

  editTodo(id) {
    let index = this.todoAll.map(function(e) { return e.id; }).indexOf(id);
    this.http.put(this.globalsService.getServerURL() + '/api/todo/' + this.todoAll[index].id, this.todoAll[index])
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
  }

}
