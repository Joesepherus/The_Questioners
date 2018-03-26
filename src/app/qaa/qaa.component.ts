import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';


@Component({
  selector: 'app-qaa',
  templateUrl: './qaa.component.html',
  styleUrls: ['./qaa.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QaaComponent implements OnInit {
  qaaAll: any;
  qaa = {};
  qaas = {};
  numberOfQaA: any;
  test: any;
  qaaShow: any;
  queryString: any;
  readonly numberOfLi = 7;
  constructor(private http: HttpClient) {
    this.qaaAll = [];
    this.qaaShow = [];
  }

  onNotify(val) {
    console.log(val);
    this.test = val;
  }



  ngOnInit() {
    function compare(a, b) {
      return a.id - b.id;
    }

    this.http.get('/api/qaa').subscribe(data => {
      console.log(data);
      this.qaaAll = data;
      this.qaaAll.sort(compare);
      this.qaaShow = this.qaaAll;
    });

    $(document).ready(function () {
      $("#QaA").addClass('active');
      document.title = "QaA - Questions and Answers";
    });

  }

  scrollToTheEndOfPage() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  scrollToTheStartOfPage() {
    window.scrollTo(0, 0);
  }

  isLast(check) {
    if (check == true) {
      var li = document.getElementsByTagName("LI");
      var i;
      this.numberOfQaA = li.length - this.numberOfLi;
      for (i = this.numberOfLi; i < li.length; i++) {
        switch (li[i].children[1].children[0].innerHTML) {
          case "Javascript":
            li[i].classList.add("javascript");
            li[i].children[2].classList.add("javascript-content");
            break;
          case "HTML":
            li[i].classList.add("html");
            li[i].children[2].classList.add("html-content");
            break;
          case "CSS":
            li[i].classList.add("css");
            li[i].children[2].classList.add("css-content");
            break;
          case "Data structures":
            li[i].classList.add("DataStructures");
            li[i].children[2].classList.add("DataStructures-content");
        }

        /*switch(li[i].children[1].children[0].innerHTML){
          case "passed":
            li[i].classList.add("passed");  
            break;
          case "failed":
            li[i].classList.add("failed"); 
            li[i].children[1].classList.add("failed-content");
            break;
        }*/

        /*if(li[i].children[2].children[4].innerHTML == "") {
          li[i].children[2].children[4].innerHTML = "not completed";
        }*/
      }
    }
  }

  // switching between selected values

  dropFunction($event) {
    let elem = $event.target;
    if (elem.tagName !== "LI") {
      elem = $(elem).closest("li")[0];
    }
    elem.children[2].classList.toggle("show");
  }

  select($event) {
    let typeSelected = $event.target.value;
    if (typeSelected === 'all') {
      this.qaaShow = this.qaaAll;
    } else {
      this.qaaShow = [];
      for (let i = 0; i < this.qaaAll.length; i++) {
        if (this.qaaAll[i].type === typeSelected) {
          this.qaaShow.push(this.qaaAll[i]);
        }
      }
    }
  }

  searchChange() {
    if (this.queryString) {
      let input = this.queryString.toLowerCase();
      this.qaaShow = [];
      this.qaaShow = this.qaaAll.filter(function (el: any) {
        return el.title.toLowerCase().indexOf(input) > -1;
      });
    }
    else {
      this.qaaShow = this.qaaAll;
    }
  }

}
