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
  groups = [[[[]]]];
  orderedList = [{}];

  constructor(private http: HttpClient) {
    this.qaaAll = [];
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
      this.orderedList = groupingItemsByDate(this.qaaAll);
      console.log(this.orderedList);
    });


    function groupingItemsByDate(items) {
      let today = new Date();
      let itemsOfDay = [];
      let orderedList = [{}];
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
          orderedList.push({ date: start, items: itemsOfDay });
          itemsOfDay = [];
        }
      }
      console.log(orderedList);
      return orderedList;
    }
  }
}
