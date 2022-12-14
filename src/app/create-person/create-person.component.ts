import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn
} from '@angular/forms';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {
  saving = false;
  successful?: boolean = undefined;

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10)
    ]),
    age: new FormControl('', [ IsNumberValidator ]),
    gender: new FormControl('FEMALE')
  });

  constructor(private personService: PersonService) {}

  ngOnInit(): void {}

  get nameError() {
    return !this.form.get('name').valid;
  }

  get ageError() {
    return !this.form.get('age').valid;
  }

  savePerson() {
    this.saving = true;
    const values = this.form.getRawValue();

    this.personService.createPerson(values).subscribe({
      error: () => {
        this.saving = false;
        this.successful = false;
      },
      complete: () => {
        this.saving = false;
        this.successful = true;
      }
    });
  }
}

const IsNumberValidator: ValidatorFn = (control) => {
  const value = control.value;
  const isNumberError = !value || isNaN(value);

  if (isNumberError) {
    return { isNumberError: true };
  } else {
    return null;
  }
};
