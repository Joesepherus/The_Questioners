import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  @Input() todoAll: any;
  @Input() testing = {};
  @Input() test = {};
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
    this.test = elem;

    this.updateTesting.emit(this.test);
    for (i = this.numberOfLi; i < this.todoAll.length; i++) {
      if (this.todoAll[i]._id == elem._id) {
        this.test = elem;

      }
    }
    this.elem = $event.target;
    // change the header color to the type of the task
    switch (elem.type) {
      case "work":
        $("#editModalHeader").css('background', 'blueviolet');
        break;
      case "personal":
        $("#editModalHeader").css('background', '#ffc900');
        break;
      case "school":
        $("#editModalHeader").css('background', '#048E16');
        break;
      case "project":
        $("#editModalHeader").css('background', '#533A71');
        break;
      case "learn":
        $("#editModalHeader").css('background', '#D1751F');
        break;
      case "watch later":
        $("#editModalHeader").css('background', '#900C3E');
        break;

    }
  }

  changeColor($event) {
    console.log($event);
    let liToChange = this.elem.closest("li");
    let modalElem = $event.target;
    let liClasses = $(liToChange).attr('class').split(' ');
    if (liClasses.length > 1) {
      $(liToChange).removeClass(liClasses.pop());
    }
    let liContentClasses = $(liToChange.children[2]).attr('class').split(' ');
    if (liContentClasses.length > 1) {
      $(liToChange.children[2]).removeClass(liContentClasses.pop());
    }
    // change the header color to the type of the task
    switch (modalElem.value) {
      case "Javascript":
        $("#editModalHeader").css('background', 'blueviolet');
        liToChange.classList.add("javascript");
        liToChange.children[2].classList.add("javascript-content");
        break;
      case "CSS":
        $("#editModalHeader").css('background', '#ffc900');
        liToChange.classList.add("css");
        liToChange.children[2].classList.add("css-content");
        break;
      case "HTML":
        $("#editModalHeader").css('background', '#048E16');
        liToChange.classList.add("html");
        liToChange.children[2].classList.add("html-content");
        break;
      case "Data structures":
        $("#editModalHeader").css('background', '#900C3E');
        liToChange.classList.add("DataStructures");
        liToChange.children[2].classList.add("DataStructures-content");
        break;
    }
  }

}
