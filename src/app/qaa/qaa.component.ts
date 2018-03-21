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
    this.http.get('/api/qaa').subscribe(data => {
      this.qaaAll = data;
      this.qaaShow = this.qaaAll;
    });

    $(document).ready(function () {
      $("#QaA").addClass('active');
      document.title = "QaA - Questions and Answers";
    });

    $('#selector').change(function () {
      var li = document.getElementsByTagName("LI") as HTMLCollectionOf<HTMLElement>;
      var i;
      for (i = this.numberOfLi; i < li.length; i++) {
        if (this.value == "passed") {
          if (li[i].children[1].children[0].innerHTML == "passed") {
            li[i].style.display = "flex";
          }
          else {
            li[i].style.display = "none";
          }
        }
        else if (this.value == "inprogress") {
          if (li[i].children[1].children[0].innerHTML == "inprogress") {
            li[i].style.display = "flex";
          }
          else {
            li[i].style.display = "none";
          }
        }
        else if (this.value == "failed") {
          if (li[i].children[1].children[0].innerHTML == "failed") {
            li[i].style.display = "flex";
          }
          else {
            li[i].style.display = "none";
          }
        }
        if (this.value == "Javascript") {
          if (li[i].children[1].children[0].innerHTML == "Javascript") {
            li[i].style.display = "flex";
          }
          else {
            li[i].style.display = "none";
          }
        }
        else if (this.value == "HTML") {
          if (li[i].children[1].children[0].innerHTML == "HTML") {
            li[i].style.display = "flex";
          }
          else {
            li[i].style.display = "none";
          }
        }
        else if (this.value == "CSS") {
          if (li[i].children[1].children[0].innerHTML == "CSS") {
            li[i].style.display = "flex";
          }
          else {
            li[i].style.display = "none";
          }
        }
        else if (this.value == "Data structures") {
          if (li[i].children[1].children[0].innerHTML == "Data structures") {
            li[i].style.display = "flex";
          }
          else {
            li[i].style.display = "none";
          }
        }
        else if (this.value == "Other") {
          if (li[i].children[1].children[0].innerHTML == "Other") {
            li[i].style.display = "flex";
          }
          else {
            li[i].style.display = "none";
          }
        }
        else {
          li[i].style.display = "flex";
        }
      }
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

}
