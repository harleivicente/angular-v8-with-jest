import { Component, Input, OnInit } from '@angular/core';

export interface Person {
  name: string;
  id: number;
  age: number;
  isCustomer: boolean;
}

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() person: Person | undefined;

  constructor() {}

  ngOnInit(): void {}

}
