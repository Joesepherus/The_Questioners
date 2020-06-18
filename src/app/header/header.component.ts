import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private globalsService: GlobalsService) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear()
    this.globalsService.setAdminId(null)
    this.router.navigate(['/login'])
  }

}
