import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-words-edit',
  templateUrl: './words-edit.component.html',
  styleUrls: ['./words-edit.component.css']
})
export class WordsEditComponent implements OnInit {
  @Input() wordsAll: any;
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
    for (i = this.numberOfLi; i < this.wordsAll.length; i++) {
      if (this.wordsAll[i]._id == elem._id) {
        this.test = elem;
      }
    }
  }


}
