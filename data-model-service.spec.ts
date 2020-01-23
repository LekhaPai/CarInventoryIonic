import { TestBed } from '@angular/core/testing';

import { DataModelServiceService } from './data-model-servic';

describe('DataModelServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataModelServiceService = TestBed.get(DataModelServiceService);
    expect(service).toBeTruthy();
  });
});
