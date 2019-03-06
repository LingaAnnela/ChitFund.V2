import { TestBed } from '@angular/core/testing';

import { ChitfundService } from './chitfund.service';

describe('ChitfundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChitfundService = TestBed.get(ChitfundService);
    expect(service).toBeTruthy();
  });
});
