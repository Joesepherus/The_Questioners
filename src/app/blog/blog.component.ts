import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  qaaAll: any;
  curr: any;
  prev: any;
  todoAll: any;
  orderedList: any;
  orderedList2: any;
  wordsAll: any;
  view: any;

  constructor(private http: HttpClient) {
    this.qaaAll = [];
    this.orderedList = [];
    this.orderedList2 = [];
    this.view = 'date';
  }

  ngOnInit() {
    function compare(a, b) {
      return a.id - b.id;
    }

    for (let i = 0; i < 365; i++) {
      let today = new Date();
      let start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
      this.orderedList[i] = ({ date: start, todo: [], qaa: [], words: [] });
      this.orderedList2[i] = ({ date: start, items: [] });
    }

    let date = new Date();
    let dateISO = date.toISOString();
    this.http.get('/api/qaa-date/' + dateISO).subscribe(data => {
      this.qaaAll = data;
      this.qaaAll.sort(compare);
      this.groupingItemsByDate(this.qaaAll, "qaa");
      this.groupingItemsByDate2(this.qaaAll, "qaa");
      console.log(this.orderedList);
      console.log(this.orderedList2);
    });

    this.http.get('/api/todo-date/' + dateISO).subscribe(todo => {
      this.todoAll = todo;
      this.todoAll.sort(compare);
      this.groupingItemsByDate(this.todoAll, "todo");
      this.groupingItemsByDate2(this.todoAll, "todo");
    });

    this.http.get('/api/words-date/' + dateISO).subscribe(todo => {
      this.wordsAll = todo;
      this.wordsAll.sort(compare);
      this.groupingItemsByDate(this.wordsAll, "words");
      this.groupingItemsByDate2(this.wordsAll, "words");
    });

  }

  groupingItemsByDate(items, type) {
    let today = new Date();
    let itemsOfDay = [];
    for (let i = 0; i < 365; i++) {
      let start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
      let end = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i + 1);
      for (let j = 0; j < items.length; j++) {
        let items_date = new Date(items[j].create_date);
        if (items_date > start && items_date < end) {
          itemsOfDay.push(items[j]);
        }
      }

      if (itemsOfDay.length != 0) {
        if (type == "todo") {
          this.orderedList[i].todo = (itemsOfDay);
        }
        if (type == "qaa") {
          this.orderedList[i].qaa = (itemsOfDay);
        }
        if (type == "words") {
          this.orderedList[i].words = (itemsOfDay);
        }
        itemsOfDay = [];
      }
    }
  }

  changeView() {
    if (this.view == 'category') {
      this.view = 'date';
    }
    else {
      this.view = 'category';
    }
  }

  compareByDate(a, b) {
    let a_date = new Date(a.create_date);
    let b_date = new Date(b.create_date);

    if (a_date > b_date) {
      return 1;
    }
    else {
      return -1;
    }

  }

  groupingItemsByDate2(items, type) {
    let today = new Date();
    let itemsOfDay = [];
    for (let i = 0; i < 365; i++) {
      let start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
      let end = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i + 1);
      for (let j = 0; j < items.length; j++) {
        let items_date = new Date(items[j].create_date);
        if (items_date > start && items_date < end) {
          this.orderedList2[i].items.push({ create_date: items[j].create_date, title: "Added a new " + type + ": " + items[j].title });
        }
      }
      this.orderedList2[i].items.sort(this.compareByDate);
    }
  }
}
