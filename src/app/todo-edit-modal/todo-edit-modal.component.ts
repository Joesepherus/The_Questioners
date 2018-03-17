import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-edit-modal',
  templateUrl: './todo-edit-modal.component.html',
  styleUrls: ['./todo-edit-modal.component.css']
})
export class TodoEditModalComponent implements OnInit {
  @Input() todoAll: any;
  @Input() todo = {};

  constructor() { }

  ngOnInit() {
  }

}
