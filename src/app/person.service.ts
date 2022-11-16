import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum GENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export interface PersonSaveDto {
  name: string;
  gender: GENDER;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() {}

  createPerson(person: PersonSaveDto): Observable<boolean> {

    return new Observable(observer => {
      setTimeout(() => {

        observer.error(new Error('Unable to save new person'));
        // observer.next(true);

      }, 800);
    });
  }
}
