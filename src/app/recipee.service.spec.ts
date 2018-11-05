import { TestBed, inject } from '@angular/core/testing';

import { RecipeeService } from './recipee.service';

describe('RecipeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeeService]
    });
  });

  it('should be created', inject([RecipeeService], (service: RecipeeService) => {
    expect(service).toBeTruthy();
  }));
});
