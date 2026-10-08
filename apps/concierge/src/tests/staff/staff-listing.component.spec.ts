import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { StaffUser } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { StaffListingComponent } from '../../app/staff/staff-listing.component';
import { StaffStateService } from '../../app/staff/staff-state.service';

describe('StaffListingComponent', () => {
    let spectator: Spectator<StaffListingComponent>;
    const state = {
        user_events: signal<Record<string, boolean>>({}),
        loading: signal(false),
        users_loading: signal(false),
        users_error: signal(false),
        filtered_users: signal<StaffUser[]>([]),
        loadUsers: vi.fn(),
    };

    const createComponent = createComponentFactory({
        component: StaffListingComponent,
        shallow: true,
        detectChanges: false,
        providers: [MockProvider(StaffStateService, state as any)],
    });

    beforeEach(() => {
        state.loading.set(false);
        state.users_loading.set(false);
        state.users_error.set(false);
        state.filtered_users.set([]);
        state.loadUsers.mockClear();
        spectator = createComponent();
    });

    it('should list users by their first letter', () => {
        state.filtered_users.set([
            new StaffUser({ name: 'Jane Doe', email: 'jane@place.tech' }),
        ]);
        spectator.detectChanges();
        expect('[group]').toExist();
        expect('staff-details').toExist();
        expect('load-error').not.toExist();
    });

    it('should show the retry control in place of the list when the directory failed', () => {
        state.users_error.set(true);
        spectator.detectChanges();
        expect('load-error').toExist();
        expect('[group]').not.toExist();
        expect('.inset-0 > p').not.toExist();
    });

    it('should load the directory again on retry', () => {
        state.users_error.set(true);
        spectator.detectChanges();
        spectator.click('load-error button');
        expect(state.loadUsers).toHaveBeenCalledTimes(1);
    });

    it('should show progress rather than the empty state while the directory loads', () => {
        state.users_loading.set(true);
        spectator.detectChanges();
        expect('mat-progress-bar').toExist();
        expect('.inset-0 > p').not.toExist();
        expect('load-error').not.toExist();
    });

    it('should show the empty state once the directory has loaded nothing', () => {
        spectator.detectChanges();
        expect('.inset-0 > p').toExist();
        expect('mat-progress-bar').not.toExist();
    });
});
