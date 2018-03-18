import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-words-edit-modal',
  templateUrl: './words-edit-modal.component.html',
  styleUrls: ['./words-edit-modal.component.css']
})
export class WordsEditModalComponent implements OnInit {
  @Input() wordsAll: any;
  @Input() words = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  editWords(id) {
    this.http.put('/api/words/' + id, this.words)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
  }

}
