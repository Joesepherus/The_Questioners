import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-qaa-create',
  templateUrl: './qaa-create.component.html',
  styleUrls: ['./qaa-create.component.css']
})
export class QaaCreateComponent implements OnInit {
  @Input() qaaAll: any;
  qaa = { 
    id: '', 
    create_date: (new Date).toISOString(), 
    adminId: ''
  };
  latest;
  constructor(private http: HttpClient, private globalsService: GlobalsService) { }

  ngOnInit() {
  }

  addQaA() {
    const adminId = this.globalsService.getAdminId()

    this.http.get('/api/qaa-latest').subscribe(data => {
      this.latest = data;
      let newQaa = this.qaa;
      newQaa.id = (++this.latest.id).toString();
      newQaa.create_date = (new Date).toISOString();
      newQaa.adminId = adminId
      this.qaa = { id: '', create_date: (new Date).toISOString(), adminId: '' };
      this.qaaAll.push(newQaa);
      this.http.post('/api/qaa', newQaa)
        .subscribe(res => {
        }, (err) => {
          console.log(err);
        }
        );
    });
  }
}
