import { MatProgressBarModule } from '@angular/material/progress-bar';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { StaffListingComponent } from '../../app/staff/staff-listing.component';
import { StaffStateService } from '../../app/staff/staff-state.service';
import { StaffComponent } from '../../app/staff/staff.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { StaffTopbarComponent } from '../../app/staff/staff-topbar.component';
import { SidebarComponent } from '../../app/ui/sidebar.component';

describe('StaffComponent', () => {
    let spectator: Spectator<StaffComponent>;
    const createComponent = createComponentFactory({
        component: StaffComponent,
        providers: [
            {
                provide: StaffStateService,
                useValue: {
                    loading: new BehaviorSubject(false),
                    startPolling: jest.fn(),
                    stopPolling: jest.fn(),
                },
            },
        ],
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
            MockComponent(StaffListingComponent),
            MockComponent(StaffTopbarComponent),
            MockComponent(SidebarComponent),
        ],
        imports: [MatProgressBarModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
