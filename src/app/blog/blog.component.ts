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

  constructor(private http: HttpClient) {
    this.qaaAll = [];
    this.orderedList = [];
  }

  ngOnInit() {
    function compare(a, b) {
      return a.id - b.id;
    }

    let date = new Date();
    let dateISO = date.toISOString();
    this.http.get('/api/qaa-date/' + dateISO).subscribe(data => {
      this.qaaAll = data;
      this.qaaAll.sort(compare);
      this.groupingItemsByDate(this.qaaAll, "qaa");
      console.log(this.orderedList);
    });

    this.http.get('/api/todo-date/' + dateISO).subscribe(todo => {
      this.todoAll = todo;
      this.todoAll.sort(compare);
      this.groupingItemsByDate(this.todoAll, "todo");
      console.log(this.orderedList);
    });

  }

  groupingItemsByDate(items, type) {
    let today = new Date();
    let itemsOfDay = [];
    let k = 0;
    for (let i = 0; i < 10; i++) {
      let start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
      let end = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i + 1);
      console.log(items.length);
      for (let j = 0; j < items.length; j++) {
        let items_date = new Date(items[j].create_date);
        if (items_date > start && items_date < end) {
          itemsOfDay.push(items[j]);
        }
      }
      if (itemsOfDay.length != 0) {
        console.log(itemsOfDay);
        if (this.orderedList[k] === undefined) {
          this.orderedList[k] = ({ date: start, todo: [], qaa: [] });
        }
        else {
          this.orderedList[k].date = start;
        }
        console.log(this.orderedList[i]);
        console.log(i);
        if (type == "todo") {
          this.orderedList[k++].todo = (itemsOfDay);
        }
        if (type == "qaa") {
          this.orderedList[k++].qaa = (itemsOfDay);
        }
        itemsOfDay = [];
        console.log(this.orderedList);
      }
    }
  }
}
