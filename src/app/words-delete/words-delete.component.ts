import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-words-delete',
  templateUrl: './words-delete.component.html',
  styleUrls: ['./words-delete.component.css']
})
export class WordsDeleteComponent implements OnInit {
  @Input() wordsAll: any;
  @Input() words = {};
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  deleteWords(id) {
    this.wordsAll.splice(-1, 1);
    this.http.delete('/api/words/' + id)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
  }
}
