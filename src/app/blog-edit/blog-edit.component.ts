import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  @Input() blogAll: any;
  @Input() blog: any;
  @Input() testing = {};
  @Output() updateTesting = new EventEmitter<{}>();
  readonly numberOfLi = 7;
  elem: any;
  id: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  // giving modal form placeholder values for each input txt
  editModalForm($event, elem) {
    var li = document.getElementsByTagName("LI");
    var i;
    console.log(elem);
    console.log(this.testing);
    this.blog = elem;

    this.updateTesting.emit(this.blog);
    for (i = this.numberOfLi; i < this.blogAll.length; i++) {
      if (this.blogAll[i]._id == elem._id) {
        this.blog = elem;
      }
    }
    this.elem = $event.target;

  }

}
