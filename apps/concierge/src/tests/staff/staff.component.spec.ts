import { signal } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';
import { StaffListingComponent } from '../../app/staff/staff-listing.component';
import { StaffStateService } from '../../app/staff/staff-state.service';
import { StaffTopbarComponent } from '../../app/staff/staff-topbar.component';
import { StaffComponent } from '../../app/staff/staff.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';

describe('StaffComponent', () => {
    let spectator: Spectator<StaffComponent>;
    const createComponent = createComponentFactory({
        component: StaffComponent,
        providers: [
            {
                provide: StaffStateService,
                useValue: {
                    loading: signal(false),
                    startPolling: vi.fn(),
                    stopPolling: vi.fn(),
                },
            },
        ],
        declarations: [
            mockComponent(ApplicationTopbarComponent),
            mockComponent(ApplicationSidebarComponent),
            mockComponent(StaffListingComponent),
            mockComponent(StaffTopbarComponent),
        ],
        imports: [MatProgressBarModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
