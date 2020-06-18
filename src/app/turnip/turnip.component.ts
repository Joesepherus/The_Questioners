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
  isDivVisible: boolean = true;
  newAction = {
    id: {},
    title: '',
    start: {},
    end: '',
  };
  inputReadonly: boolean = false;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    var start = document.getElementById("start");
    var dis = document.getElementById("display-turnip");
    var finishTime;
    var timerLength = 0;
    dis.innerHTML = "Time: " + timerLength;

    this.Update = () => {
      finishTime = localStorage.getItem('myTime');
      var timeLeft = (+new Date() - finishTime);
      var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      if (days) {
        dis.innerHTML = "Time: " + days + "d" + hours + "h" + ":" + minutes + "m" + ":" + seconds + "s";
      }
      dis.innerHTML = "Time: " + hours + "h" + ":" + minutes + "m" + ":" + seconds + "s";
      this.timeoutID = window.setTimeout(this.Update, 500);
    };

    let time = localStorage.getItem('myTime');
    if (time !== undefined && time !== "" && time !== null && time !== '') {
      this.newAction.title = localStorage.getItem('actionTitle');
      this.inputReadonly = true;
      if (this.Update) {
        this.Update();
      }
    }
    else {
      // localStorage.clear();
      localStorage.setItem('myTime', '');
    }

  }

  showDiv() {
    if (this.isDivVisible == false) {
      this.isDivVisible = true;
    }
    else {
      this.isDivVisible = false;
    }
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
      localStorage.setItem('actionTitle', this.newAction.title);
      this.inputReadonly = true;
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
