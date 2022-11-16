import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-v8-jest-testing';

  person = { name: 'Harlei V.', age: 34, id: 343, isCustomer: false };
}
