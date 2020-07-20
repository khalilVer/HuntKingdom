import { TestBed } from '@angular/core/testing';

import { ForumServiceService } from './forum-service.service';

describe('ForumServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForumServiceService = TestBed.get(ForumServiceService);
    expect(service).toBeTruthy();
  });
});
