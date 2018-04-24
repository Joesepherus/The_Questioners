import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  @Input() blogAll: any;
  @Input() list: any;
  blog = { id: '', text: '', create_date: (new Date).toISOString(), given_date: (new Date).toISOString() };
  latest;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.list.date);
  }

  addBlog(something) {
    console.log(something);
    console.log(this.list);
    

    this.http.get('/api/blog-latest').subscribe(data => {
      this.latest = data;
      console.log(data);
      let newBlog = this.blog;
      if (this.latest == null) {
        newBlog.id = '0';
      }
      else {
        newBlog.id = (++this.latest.id).toString();
      }
      newBlog.create_date = (new Date).toISOString();
      this.blog = { id: '', text: '', create_date: (new Date).toISOString(), given_date: (new Date).toISOString() };
      console.log(something);
      let date = something.date;
      newBlog.given_date = (new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + 2)).toISOString();
      console.log(newBlog);
      this.blogAll.push(newBlog);
      this.http.post('/api/blog', newBlog)
        .subscribe(res => {
        }, (err) => {
          console.log(err);
        }
        );
    });
  }

  log(something): void {
    console.log(something.date);
    this.addBlog(something);
  }
}
