import { TestBed } from '@angular/core/testing';

import { PokeapiApiService } from './pokeapi-api.service';

describe('PokeapiApiService', () => {
  let service: PokeapiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeapiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
