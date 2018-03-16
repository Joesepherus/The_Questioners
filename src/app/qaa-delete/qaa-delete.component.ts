import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-qaa-delete',
  templateUrl: './qaa-delete.component.html',
  styleUrls: ['./qaa-delete.component.css']
})
export class QaaDeleteComponent implements OnInit {
  @Input() qaaAll: any;
  @Input() qaa = {};
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  deleteQaa(id) {
    this.qaaAll.splice(-1, 1);
    this.http.delete('/qaa/' + id)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
  }
}
