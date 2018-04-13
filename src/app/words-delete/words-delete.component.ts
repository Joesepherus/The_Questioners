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
    let index = this.wordsAll.map(function(e) { return e.id; }).indexOf(id);
    this.http.delete('/api/words/' + this.wordsAll[index].create_date)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
    this.wordsAll.splice(index, 1);
  }
}
