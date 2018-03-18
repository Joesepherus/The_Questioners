import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-words-create',
  templateUrl: './words-create.component.html',
  styleUrls: ['./words-create.component.css']
})
export class WordsCreateComponent implements OnInit {
  @Input() wordsAll: any;
  words = {};
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addWords() {
    this.wordsAll.push(this.words);
    this.http.post('/api/words', this.words)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
  }
}
