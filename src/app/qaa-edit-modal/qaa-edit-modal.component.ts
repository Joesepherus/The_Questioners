import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qaa-edit-modal',
  templateUrl: './qaa-edit-modal.component.html',
  styleUrls: ['./qaa-edit-modal.component.css']
})
export class QaaEditModalComponent implements OnInit {
  @Input() qaaAll: any;
  @Input() qaa = {};

  constructor() { }

  ngOnInit() {
  }

}
