import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  @Input() blogAll: any;
  @Input() list: any;
  blog = { 
    id: '',
    text: '', 
    create_date: (new Date).toISOString(), 
    given_date: (new Date).toISOString(),
    adminId: ''
  }; 
  latest;
  constructor(private http: HttpClient, private globalsService: GlobalsService) { }

  ngOnInit() {
  }

  addBlog(date) {
    const adminId = this.globalsService.getAdminId()

    this.http.get(this.globalsService.getServerURL() + '/api/blog-latest').subscribe(data => {
      this.latest = data;
      let newBlog = this.blog;
      if (this.latest == null) {
        newBlog.id = '0';
      }
      else {
        newBlog.id = (++this.latest.id).toString();
      }
      newBlog.create_date = (new Date).toISOString();
      this.blog = { id: '', text: '', create_date: (new Date).toISOString(), given_date: (new Date).toISOString(), adminId: '' };
      newBlog.given_date = (new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + 2)).toISOString();
      newBlog.adminId = adminId
      
      this.blogAll.push(newBlog);
      this.http.post(this.globalsService.getServerURL() + '/api/blog', newBlog)
        .subscribe(res => {
        }, (err) => {
          console.log(err);
        }
        );
    });
  }

  submit(something): void {
    console.log(something.date);
    this.addBlog(something.date);
  }
}
