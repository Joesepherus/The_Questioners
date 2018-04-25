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
  blogAll: any;
  start: any;
  actionAll: any;

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

    let today = new Date();
    this.start = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    for (let i = 0; i < 365; i++) {
      let today = new Date();
      let start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
      this.orderedList[i] = ({ date: start, todo: [], qaa: [], words: [], actions: [] });
      this.orderedList2[i] = ({ date: start, items: [], blog: false });
    }

    this.http.get('/api/blog').subscribe(data => {
      console.log(data);
      this.blogAll = data;
      this.blogAll.sort(compare);
      for (let i = 0; i < this.blogAll.length; i++) {
        let proper_date: any;
        let date = new Date(this.blogAll[i].given_date);
        proper_date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        let timeDiff = Math.abs(this.start.getTime() - proper_date.getTime());
        let dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        console.log(dayDiff);
        this.orderedList2[dayDiff].blog = this.blogAll[i];
      }
    });

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

    this.http.get('/api/todo-date/' + dateISO).subscribe(items => {
      this.todoAll = items;
      this.todoAll.sort(compare);
      this.groupingItemsByDate(this.todoAll, "todo");
      this.groupingItemsByDate2(this.todoAll, "todo");
    });

    this.http.get('/api/words-date/' + dateISO).subscribe(items => {
      this.wordsAll = items;
      this.wordsAll.sort(compare);
      this.groupingItemsByDate(this.wordsAll, "words");
      this.groupingItemsByDate2(this.wordsAll, "words");
    });

    this.http.get('/api/blog-date/' + dateISO).subscribe(items => {
      this.blogAll = items;
      this.blogAll.sort(compare);
      this.groupingItemsByDate(this.blogAll, "blog");
      this.groupingItemsByDate2(this.blogAll, "blog");
    });

    this.http.get('/api/action-date/' + dateISO).subscribe(items => {
      this.actionAll = items;
      this.actionAll.sort(compare);
      this.groupingItemsByDate(this.actionAll, "action");
      this.groupingItemsByDate2(this.actionAll, "action");
    });

  }

  groupingItemsByDate(items, type) {
    let today = new Date();
    let itemsOfDay = [];
    let items_date;
    for (let i = 0; i < 365; i++) {
      let start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
      let end = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i + 1);
      for (let j = 0; j < items.length; j++) {
        if (type == 'action') {
          items_date = new Date(items[j].start);
        }
        else {
          items_date = new Date(items[j].create_date);
        }
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
        if (type == "word") {
          this.orderedList[i].words = (itemsOfDay);
        }
        if (type == "action") {
          this.orderedList[i].actions = (itemsOfDay);
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
    let items_date;
    for (let i = 0; i < 365; i++) {
      let start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
      let end = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i + 1);
      for (let j = 0; j < items.length; j++) {
        if (type == 'action') {
          items_date = new Date(items[j].start);
        }
        else {
          items_date = new Date(items[j].create_date);
        }
        if (items_date > start && items_date < end) {
          if (type === 'blog') {
            this.orderedList2[i].items.push({
              create_date: items[j].create_date, title: "Added a new " + type +
                " with given_date: " + items[j].given_date
            });
          }
          else if (type === 'action') {
            let timeLeft = (+new Date(items[j].end)) - (+new Date(items[j].start));
            var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            this.orderedList2[i].items.push({
              create_date: items[j].start, title: 'Added a new ' + type +
                ' with title: ' + items[j].title + ' & duration: ' + days + 'd:' + hours + 'h:' + minutes + 'm:' + seconds + 's'
            });
          }
          else {
            this.orderedList2[i].items.push({ create_date: items[j].create_date, title: "Added a new " + type + ": " + items[j].title });
          }
        }
        if (type === 'todo' && items[j].state === 'completed') {
          let completed_date = new Date(items[j].completed_date);
          if (completed_date > start && completed_date < end) {
            this.orderedList2[i].items.push({
              create_date: items[j].completed_date,
              title: "Completed a " + type + ": " + items[j].title
            });
          }
        }
      }
      this.orderedList2[i].items.sort(this.compareByDate);
    }
  }

  blogCreateShow(event) {
    let target = event.target;
    let parent = target.parentElement;
    let blogCreateElem = parent.getElementsByTagName('app-blog-create');
    console.log(blogCreateElem[0]);
    if (blogCreateElem[0].style.display == 'block') {
      blogCreateElem[0].style.display = 'none';
    }
    else {
      blogCreateElem[0].style.display = 'block';
    }
  }

  log(something): void {
    console.log(something);
  }

}
