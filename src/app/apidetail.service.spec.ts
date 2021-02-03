import { TestBed } from '@angular/core/testing';

import { ApidetailService } from './apidetail.service';

describe('ApidetailService', () => {
  let service: ApidetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApidetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
