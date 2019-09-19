import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pin-component',
  templateUrl: './pin-component.component.html',
  styleUrls: ['./pin-component.component.css']
})
export class PinComponentComponent implements OnInit {
  @Output() outpin = new EventEmitter;
  pin = "";
  constructor() { }

  ngOnInit() {
  }

  enterPIN() {
    // console.log('pin entered', this.pin);
    this.outpin.emit(this.pin);
    this.pin = '';
  }

}