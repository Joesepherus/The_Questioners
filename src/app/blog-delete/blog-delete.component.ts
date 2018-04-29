import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-delete',
  templateUrl: './blog-delete.component.html',
  styleUrls: ['./blog-delete.component.css']
})
export class BlogDeleteComponent implements OnInit {
  @Input() blogAll: any;
  @Input() blog = {};
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  deleteBlog(id) {
    let index = this.blogAll.map(function(e) { return e.id; }).indexOf(id);
    console.log(this.blogAll[index]);
    this.http.delete('/api/blog/' + this.blogAll[index].create_date)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
    this.blogAll.splice(index, 1);
  }
}
