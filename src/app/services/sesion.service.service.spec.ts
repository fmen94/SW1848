import { TestBed } from '@angular/core/testing';

import { SesionService } from './sesion.service.service';

describe('Sesion.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SesionService = TestBed.get(SesionService);
    expect(service).toBeTruthy();
  });
});
