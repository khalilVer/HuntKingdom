import { TestBed } from '@angular/core/testing';

import { ThreadServiceService } from './thread-service.service';

describe('ThreadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThreadServiceService = TestBed.get(ThreadServiceService);
    expect(service).toBeTruthy();
  });
});
