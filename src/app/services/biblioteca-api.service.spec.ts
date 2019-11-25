import { TestBed } from '@angular/core/testing';

import { BibliotecaApiService } from './biblioteca-api.service';

describe('BibliotecaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BibliotecaApiService = TestBed.get(BibliotecaApiService);
    expect(service).toBeTruthy();
  });
});
