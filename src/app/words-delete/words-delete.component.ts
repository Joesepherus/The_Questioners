import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-words-delete',
  templateUrl: './words-delete.component.html',
  styleUrls: ['./words-delete.component.css']
})
export class WordsDeleteComponent implements OnInit {
  @Input() wordsAll: any;
  @Input() words = { id: '' };
  constructor(private http: HttpClient, private globalsService: GlobalsService) { }

  ngOnInit() {
  }

  deleteWords(id) {
    let index = this.wordsAll.map(function(e) { return e.id; }).indexOf(id);
    this.http.delete(this.globalsService.getServerURL() + '/api/words/' + this.wordsAll[index].create_date)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
    this.wordsAll.splice(index, 1);
  }
}
