import { TestBed } from '@angular/core/testing';

import { PersonDetailsService } from './person-details.service';

describe('PersonDetailsService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonDetailsService = TestBed.get(PersonDetailsService);
    expect(service).toBeTruthy();
  });

});
