import { TestBed } from '@angular/core/testing';

import { CommandeServiceService } from './commande-service.service';

describe('CommandeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommandeServiceService = TestBed.get(CommandeServiceService);
    expect(service).toBeTruthy();
  });
});
