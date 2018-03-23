import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $("#about").addClass('active');
      document.title = "The Questioners";
    });
  }

}
