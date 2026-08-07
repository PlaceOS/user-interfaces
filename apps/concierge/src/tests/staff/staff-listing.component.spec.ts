import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';
import { StaffDetailsComponent } from '../../app/staff/staff-details.component';
import { StaffListingComponent } from '../../app/staff/staff-listing.component';
import { StaffStateService } from '../../app/staff/staff-state.service';

describe('StaffListingComponent', () => {
    let spectator: Spectator<StaffListingComponent>;
    const createComponent = createComponentFactory({
        component: StaffListingComponent,
        providers: [
            {
                provide: StaffStateService,
                useValue: {
                    loading: signal(false),
                    filtered_users: signal([]),
                    user_events: signal({}),
                    startPolling: vi.fn(),
                    stopPolling: vi.fn(),
                },
            },
        ],
        declarations: [MockComponent(StaffDetailsComponent)],
        imports: [],
    });

    beforeEach(() => (spectator = createComponent()));

    // The component schedules a 30ms timer that reads the document. This file
    // finishes well inside that window, so without an explicit destroy the
    // timer outlives the test environment and throws `document is not defined`
    // during teardown, failing the whole run with every test passing.
    afterEach(() => spectator?.fixture?.destroy());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it.todo('should allow scrolling to staff groupings');
    it.todo('should allow scrolling to staff groupings');
});
