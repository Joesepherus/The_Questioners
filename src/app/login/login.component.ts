import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalsService } from '../globals.service';

interface LoginResponse{
  admin_id: string,
  status: number
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  email = ''
  password = ''

  constructor(private http: HttpClient, private router: Router, private globalsService: GlobalsService) { }

  ngOnInit() {
  }

  login() {
    const admin = {email: this.email, password: this.password}
    this.http.post<LoginResponse>('/api/admin/login', {admin})
      .subscribe(res => {
        console.log('res: ', res);
        if(res.status === 200) {
          localStorage.setItem('adminId', res.admin_id)
          this.globalsService.setAdminId(res.admin_id)
          this.router.navigate(['/about']);
        }
      }, (err) => {
        console.log(err);
      }
      );
  }

  redirect() {
    this.router.navigate(['/register']);
  }

}
