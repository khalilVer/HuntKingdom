import { TestBed } from '@angular/core/testing';

import { DemandeService } from './demande.service';

describe('DemandeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandeService = TestBed.get(DemandeService);
    expect(service).toBeTruthy();
  });
});
