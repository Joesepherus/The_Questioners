import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-qaa-create',
  templateUrl: './qaa-create.component.html',
  styleUrls: ['./qaa-create.component.css']
})
export class QaaCreateComponent implements OnInit {
  @Input() qaaAll: any;
  qaa = {};
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addQaA() {
    this.qaaAll.push(this.qaa);
    this.http.post('/api/qaa', this.qaa)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
  }
}
