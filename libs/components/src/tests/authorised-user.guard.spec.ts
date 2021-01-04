import { TestBed, async, inject } from '@angular/core/testing';

import { AuthorisedAdminGuard } from './authorised-admin.guard';

describe('AuthorisedAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorisedAdminGuard]
    });
  });

  it('should ...', inject([AuthorisedAdminGuard], (guard: AuthorisedAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
