import { TestBed } from '@angular/core/testing';

import { FavorisService } from './favoris.service';

describe('FavorisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavorisService = TestBed.get(FavorisService);
    expect(service).toBeTruthy();
  });
});
