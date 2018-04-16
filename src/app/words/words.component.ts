import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';


@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WordsComponent implements OnInit {
  wordsAll: any;
  word = {};
  words = {};
  numberOfWords: any;
  test: any;
  readonly numberOfLi = 8;
  constructor(private http: HttpClient) {
    this.wordsAll = [];
  }

  onNotify(val) {
    console.log(val);
    this.test = val;
  }

  ngOnInit() {
    this.http.get('/api/words').subscribe(data => {
      this.wordsAll = data;
    });

    $(document).ready(function () {
      $("#Words").addClass('active');
      document.title = "Words";
    });
  }

  scrollToTheEndOfPage() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  scrollToTheStartOfPage() {
    window.scrollTo(0, 0);
  }

  dropFunction($event) {
    let elem = $event.target;
    if (elem.tagName !== "LI") {
      elem = $(elem).closest("li")[0];
    }
    elem.children[1].classList.toggle("show");
  }

}