import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-qaa-edit-modal',
  templateUrl: './qaa-edit-modal.component.html',
  styleUrls: ['./qaa-edit-modal.component.css']
})
export class QaaEditModalComponent implements OnInit {
  @Input() qaaAll: any;
  @Input() qaa = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  editQaa(id) {
    this.http.put('/api/qaa/' + id, this.qaa)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
  }

}
