import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-qaa-delete',
  templateUrl: './qaa-delete.component.html',
  styleUrls: ['./qaa-delete.component.css']
})
export class QaaDeleteComponent implements OnInit {
  @Input() qaaAll: any;
  @Input() qaaShow: any;
  @Input() qaa = { id: '' };
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  deleteQaa(id) {
    let index = this.qaaAll.map(function(e) { return e.id; }).indexOf(id);
    let index2 = this.qaaShow.map(function(e) { return e.id; }).indexOf(id);
    console.log(this.qaaAll[index]);
    this.http.delete('/api/qaa/' + this.qaaAll[index].create_date)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
    this.qaaAll.splice(index, 1);
    this.qaaShow.splice(index2, 1);
  }
}
