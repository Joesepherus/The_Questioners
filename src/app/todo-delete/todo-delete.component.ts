import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit {
  @Input() todoAll: any;
  @Input() todo = { id: ' '};
  constructor(private http: HttpClient, private globalsService: GlobalsService) { }


  ngOnInit() {
  }

  deleteTodo(id) {
    let index = this.todoAll.map(function(e) { return e.id; }).indexOf(id);
    this.http.delete(this.globalsService.getServerURL() + '/api/todo/' + this.todoAll[index].create_date)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
    this.todoAll.splice(index, 1);
  }

}
