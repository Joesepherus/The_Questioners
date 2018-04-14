import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-turnip',
  templateUrl: './turnip.component.html',
  styleUrls: ['./turnip.component.css']
})
export class TurnipComponent implements OnInit {
  Update: any;
  timeoutID: any;
  latest;
  newAction = {
    id: {},
    start: {},
    end: '',
  };
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    var start = document.getElementById("start");
    var dis = document.getElementById("display-turnip");
    var finishTime;
    var timerLength = 0;
    dis.innerHTML = "Time: " + timerLength;
    localStorage.clear();
    localStorage.setItem('myTime', '');

    if (localStorage.getItem('myTime')) {
      if (this.Update) {
        this.Update();
      }
    }

    this.Update = () => {
      finishTime = localStorage.getItem('myTime');
      var timeLeft = (+new Date() - finishTime);
      var minutes = Math.floor(timeLeft / 1000 / 60);
      var seconds = Math.round(timeLeft / 1000 - minutes * 60);
      dis.innerHTML = "Time: " + minutes + ":" + seconds;
      this.timeoutID = window.setTimeout(this.Update, 100);
    };

  }

  start() {
    let time = localStorage.getItem('myTime');
    if (time === '') {
      this.http.get('/api/action-latest').subscribe(data => {
        this.latest = data;
        this.newAction.start = new Date();
        if (data == null) {
          this.newAction.id = 0;
        }
        else {
          this.newAction.id = (++this.latest.id).toString();
        }
        this.http.post('/api/action', this.newAction)
          .subscribe(res => {
          }, (err) => {
            console.log(err);
          }
          );
      });
      localStorage.setItem('myTime', (new Date()).getTime().toString());
      if (this.Update) {
        this.Update();
      }

    }
    else {
      localStorage.setItem('myTime', '');
      this.http.get('/api/action-latest').subscribe(data => {
        data["end"] = new Date();
        this.http.put('/api/action/' + data["id"], data)
          .subscribe(res => {
          }, (err) => {
            console.log(err);
          }
          );
      }
      );
      if (this.timeoutID != undefined) {
        window.clearTimeout(this.timeoutID);
      }
    }
  };

}
