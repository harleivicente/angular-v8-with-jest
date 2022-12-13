import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PersonDetailsService } from '../person-details.service';
import { PersonDetailComponent } from './person-detail.component';

describe('PersonDetailComponent', () => {
  let component: PersonDetailComponent;
  let fixture: ComponentFixture<PersonDetailComponent>;
  let getPersonDetailsMock: jest.Mock;

  beforeEach(async () => {

    getPersonDetailsMock = jest.fn();

    await TestBed.configureTestingModule({
      declarations: [ PersonDetailComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: 34 } } } },
        {
          provide: PersonDetailsService,
          useValue: {
            getPersonDetails: getPersonDetailsMock
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailComponent);
    component = fixture.componentInstance;
  });

  it('test', () => {});



});
