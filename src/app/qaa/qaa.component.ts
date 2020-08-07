import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as $ from "jquery";
import { GlobalsService } from "../globals.service";

interface SearchQuery {
  type?: any;
  title?: any;
}

@Component({
  selector: "app-qaa",
  templateUrl: "./qaa.component.html",
  styleUrls: ["./qaa.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class QaaComponent implements OnInit {
  qaaAll = [];
  qaa = {};
  numberOfQaA: any;
  test: any;
  queryString = "";
  selectedType = "all";
  readonly numberOfLi = 8;
  constructor(
    private http: HttpClient,
    private globalsService: GlobalsService
  ) {}

  ngOnInit() {
    const adminId = this.globalsService.getAdminId();

    this.getTodos();

    $(document).ready(function () {
      $("#QaA").addClass("active");
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
      }
    }
  }

  getTodos() {
    const query: SearchQuery =
      this.queryString !== ""
        ? { title: { $regex: this.queryString, $options: "i" } }
        : {};
    if (this.selectedType !== "all") {
      query.type = this.selectedType;
    }
    const adminId = this.globalsService.getAdminId();

    this.http
      .post<Array<any>>(
        this.globalsService.getServerURL() + "/api/qaa/admin/" + adminId,
        { query }
      )
      .subscribe((data) => {
        console.log(data);
        this.qaaAll = data;
      });
  }

  dropFunction($event) {
    let elem = $event.target;
    if (elem.tagName !== "LI") {
      elem = $(elem).closest("li")[0];
    }
    elem.children[2].classList.toggle("show");
  }

  onNotify(val) {
    console.log(val);
    this.test = val;
  }

  select() {
    this.getTodos();
  }

  searchChange() {
    this.getTodos();
  }
}
