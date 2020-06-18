import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-words-create',
  templateUrl: './words-create.component.html',
  styleUrls: ['./words-create.component.css']
})
export class WordsCreateComponent implements OnInit {
  @Input() wordsAll: any;
  words = { 
    id: '', 
    create_date: (new Date).toISOString(),
    adminId: ''
   };
  newWords = { id: ''  };
  latest;
  constructor(private http: HttpClient, private globalsService: GlobalsService) { }

  ngOnInit() {
  }

  addWords() {
    const adminId = this.globalsService.getAdminId()

    this.http.get('/api/words-latest').subscribe(data => {
      this.latest = data;
      console.log(data);
      let newWords = this.words;
      newWords.id = (++this.latest.id).toString();
      newWords.create_date = (new Date).toISOString();
      newWords.adminId = adminId
      this.words = { id: '', create_date: (new Date).toISOString(), adminId: '' };
      this.wordsAll.push(newWords);
      this.http.post('/api/words', newWords)
        .subscribe(res => {
        }, (err) => {
          console.log(err);
        }
        );
    });
  }
}
