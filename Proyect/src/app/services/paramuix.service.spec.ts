import { TestBed } from '@angular/core/testing';

import { ParamuixService } from './paramuix.service';

describe('ParamuixService', () => {
  let service: ParamuixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamuixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
