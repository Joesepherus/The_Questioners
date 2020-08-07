import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = ''  
  email = ''  
  password = ''  
  
  constructor(private http: HttpClient, private router: Router, private globalsService: GlobalsService) { }

  ngOnInit(){}

  register() {
    const admin = {name: this.name, email: this.email, password: this.password}
    this.http.post(this.globalsService.getServerURL() + '/api/admin', {admin})
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
      );
  }

  redirect() {
    this.router.navigate(['/login']);
  }
}
