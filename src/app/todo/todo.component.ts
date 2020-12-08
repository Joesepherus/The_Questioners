import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as $ from "jquery";
import { GlobalsService } from "../globals.service";

interface SearchQuery {
  type?: any;
  title?: any;
  state?: any;
}

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  todoAll: any[];
  todo: {};
  numberOfTodo: any;
  readonly numberOfLi = 8;
  test: any;
  queryString = "";
  selectedType = "all";

  constructor(
    private http: HttpClient,
    private globalsService: GlobalsService
  ) {}

  ngOnInit() {
    const adminId = this.globalsService.getAdminId();

    this.getTodos();

    $(document).ready(function () {
      $("#todolist").addClass("active");
      document.title = "To-do list";
    });
  }

  isLast = function (check) {
    if (check == true) {
      var li = document.getElementsByTagName(
        "LI"
      ) as HTMLCollectionOf<HTMLElement>;
      var i;
      this.numberOfTodo = li.length - this.numberOfLi;
      console.log("this.todoAll: ", this.todoAll);
      for (i = this.numberOfLi; i < li.length; i++) {
        switch (li[i].children[1].children[1].innerHTML) {
          case "work":
            li[i].classList.add("work");
            li[i].children[1].classList.add("work-content");
            break;
          case "personal":
            li[i].classList.add("personal");
            li[i].children[1].classList.add("personal-content");
            break;
          case "school":
            li[i].classList.add("school");
            li[i].children[1].classList.add("school-content");
            break;
          case "project":
            li[i].classList.add("project");
            li[i].children[1].classList.add("project-content");
            break;
          case "learn":
            li[i].classList.add("learn");
            li[i].children[1].classList.add("learn-content");
            break;
          case "watch later":
            li[i].classList.add("watchLater");
            li[i].children[1].classList.add("watchLater-content");
            let org_html = li[i].children[1].children[0].innerHTML;

            let new_html =
              "<a href=" +
              this.todoAll[i - this.numberOfLi].description +
              ">" +
              this.todoAll[i - this.numberOfLi].description +
              "</a>";
            li[i].children[1].children[3].innerHTML = new_html;
            break;
        }

        switch (li[i].children[1].children[2].innerHTML) {
          case "completed":
            //li[i].classList.add("completed");
            (li[i].children[0].children[0] as HTMLElement).style.display =
              "inline";
            break;
          case "removed":
            // li[i].classList.add("removed");
            // li[i].children[1].classList.add("removed-content");
            (li[i].children[0].children[1] as HTMLElement).style.display =
              "inline";
            break;
          case "inprogress":
            (li[i].children[0].children[2] as HTMLElement).style.display =
              "inline";
            break;
        }

        if (li[i].children[1].children[4].innerHTML == "") {
          li[i].children[1].children[4].innerHTML = "not completed";
        }
      }
    }
  };

  // Click on a close button to hide the current list item
  removeTask($event, todo) {
    let elem = $event.target;
    var li = elem.parentElement;
    if (li.children[1].children[2].innerHTML != "removed") {
      li.children[1].children[2].innerHTML = "removed";
      li.children[0].children[1].style.display = "inline";
      li.children[0].children[2].style.display = "none";
      li.children[0].children[0].style.display = "none";
    } else {
      li.children[1].children[2].innerHTML = "inprogress";
      li.children[0].children[1].style.display = "none";
      li.children[0].children[2].style.display = "inline";
    }
    if (todo.state != "removed") {
      todo.state = "removed";
      todo.completed_date = new Date();
      this.http.put("api/todo/removed/" + todo.id, todo).subscribe(
        (res) => {},
        (err) => {}
      );
    } else {
      todo.state = "inprogress";
      todo.completed_date = new Date();
      this.http.put("api/todo/inprogress/" + todo.id, todo).subscribe(
        (res) => {},
        (err) => {}
      );
    }
  }

  checkTask($event, todo) {
    let elem = $event.target;
    var li = elem.parentElement;
    // li.classList.toggle('completed');
    if (li.children[1].children[2].innerHTML != "completed") {
      li.children[1].children[2].innerHTML = "completed";
      li.children[0].children[0].style.display = "inline";
      li.children[0].children[1].style.display = "none";
      li.children[0].children[2].style.display = "none";
    } else {
      li.children[1].children[2].innerHTML = "inprogress";
      li.children[0].children[0].style.display = "none";
      li.children[0].children[2].style.display = "inline";
    }

    if (todo.state != "completed") {
      todo.state = "completed";
      todo.completed_date = new Date();
      this.http
        .put(
          this.globalsService.getServerURL() + "/api/todo/completed/" + todo.id,
          todo
        )
        .subscribe(
          (res) => {},
          (err) => {}
        );
    } else {
      todo.state = "inprogress";
      todo.completed_date = new Date();
      this.http
        .put(
          this.globalsService.getServerURL() +
            "/api/todo/inprogress/" +
            todo.id,
          todo
        )
        .subscribe(
          (res) => {},
          (err) => {}
        );
    }
  }

  getTodos() {
    const query: SearchQuery =
      this.queryString !== ""
        ? { title: { $regex: this.queryString, $options: "i" } }
        : {};

    if (this.selectedType !== "all") {
      if (
        this.selectedType === "inprogress" ||
        this.selectedType === "completed" ||
        this.selectedType === "removed"
      ) {
        query.state = this.selectedType;
      } else {
        query.type = this.selectedType;
      }
    }
    const adminId = this.globalsService.getAdminId();

    this.http
      .post<Array<any>>(
        this.globalsService.getServerURL() + "/api/todo/admin/" + adminId,
        { query }
      )
      .subscribe((data) => {
        this.todoAll = data;
      });
  }

  dropFunction($event) {
    let elem = $event.target;
    if (elem.tagName !== "LI") {
      elem = $(elem).closest("li")[0];
    }
    elem.children[1].classList.toggle("show");
  }

  onNotify(val) {
    this.test = val;
  }

  select() {
    this.getTodos();
  }

  searchChange() {
    this.getTodos();
  }
}
