import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-qaa-create',
  templateUrl: './qaa-create.component.html',
  styleUrls: ['./qaa-create.component.css']
})
export class QaaCreateComponent implements OnInit {
  @Input() qaaAll: any;
  qaa = { id: '', create_date: (new Date).toISOString() };
  latest;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addQaA() {
    this.http.get('/api/qaa-latest').subscribe(data => {
      this.latest = data;
      console.log(data);
      let newQaa = this.qaa;
      newQaa.id = (++this.latest.id).toString();
      newQaa.create_date = (new Date).toISOString();
      console.log(newQaa);
      this.qaa = { id: '', create_date: (new Date).toISOString() };
      this.qaaAll.push(newQaa);
      this.http.post('/api/qaa', newQaa)
        .subscribe(res => {
        }, (err) => {
          console.log(err);
        }
        );
    });
  }
}
