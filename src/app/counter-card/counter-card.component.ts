import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-card',
  templateUrl: './counter-card.component.html',
  styleUrls: ['./counter-card.component.scss']
})
export class CounterCardComponent implements OnInit {
  value = 0;

  constructor() {}

  ngOnInit(): void {}

  increment() {
    this.value = this.value + 1;
  }

}
