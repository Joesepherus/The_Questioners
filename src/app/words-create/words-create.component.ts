import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-words-create',
  templateUrl: './words-create.component.html',
  styleUrls: ['./words-create.component.css']
})
export class WordsCreateComponent implements OnInit {
  @Input() wordsAll: any;
  words = { id: '' };
  newWords = { id: '' };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addWords() {
    let newWords = this.words;
    newWords.id = this.wordsAll.length;
    this.words = {  id: '' };
    this.wordsAll.push(newWords);
    this.http.post('/api/words', newWords)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
  }
}
