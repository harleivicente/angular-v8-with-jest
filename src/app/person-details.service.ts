import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface PersonDetail {
  personId: number;
  fullName: string;
  dateOfBirth: string;
  currentAddress: string;
  numberOfChildren: number;
}

@Injectable({
  providedIn: 'root'
})
export class PersonDetailsService {

  constructor() {}

  getPersonDetails(personId: number, fullDetails: boolean): Observable<PersonDetail> {

    if (personId === 777) {
      return throwError(() => new Error('Error loading person details'));
    }

    return of({
      personId: 34,
      fullName: 'Person Full Name',
      dateOfBirth: '10/04/1984',
      currentAddress: '12 St John St Denver',
      numberOfChildren: 3,
    }).pipe(
      delay(500)
    );

  }
}
