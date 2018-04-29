import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-edit-modal',
  templateUrl: './blog-edit-modal.component.html',
  styleUrls: ['./blog-edit-modal.component.css']
})
export class BlogEditModalComponent implements OnInit {
  @Input() blogAll: any;
  @Input() blog = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  editBlog(id) {
    console.log(id);
    this.http.put('/api/blog/' + id, this.blog)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
  }

}
