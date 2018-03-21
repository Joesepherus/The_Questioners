import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-qaa-create',
  templateUrl: './qaa-create.component.html',
  styleUrls: ['./qaa-create.component.css']
})
export class QaaCreateComponent implements OnInit {
  @Input() qaaAll: any;
  qaa = { id: '' };
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addQaA() {
    let newQaa = this.qaa;
    newQaa.id = this.qaaAll.length;
    this.qaa = {  id: '' };
    this.qaaAll.push(newQaa);
    this.http.post('/api/qaa', newQaa)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
  }
}
