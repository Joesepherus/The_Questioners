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
    adminId: '',
    description: '',
    title: '',
    type: ''
  };
  latest;
  constructor(private http: HttpClient, private globalsService: GlobalsService) { }

  ngOnInit() {
  }

  addQaA() {
    const adminId = this.globalsService.getAdminId()

    this.http.get(this.globalsService.getServerURL() + '/api/qaa-latest').subscribe(data => {
      this.latest = data;
      let newQaa = this.qaa;
      newQaa.id = (++this.latest.id).toString();
      newQaa.create_date = (new Date).toISOString();
      newQaa.adminId = adminId
      this.qaa = { id: '', create_date: (new Date).toISOString(), adminId: '', description: '', title: '', type: '' };
      this.qaaAll.unshift(newQaa);
      this.http.post(this.globalsService.getServerURL() + '/api/qaa', newQaa)
        .subscribe(res => {
        }, (err) => {
          console.log(err);
        }
        );
    });
  }
}
