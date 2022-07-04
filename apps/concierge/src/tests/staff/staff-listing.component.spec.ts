import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
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
                    loading: new BehaviorSubject(false),
                    filtered_users: new BehaviorSubject([]),
                    startPolling: jest.fn(),
                    stopPolling: jest.fn(),
                },
            },
        ],
        declarations: [MockComponent(StaffDetailsComponent)],
        imports: [],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it.todo('should allow scrolling to staff groupings');
    it.todo('should allow scrolling to staff groupings');
});
