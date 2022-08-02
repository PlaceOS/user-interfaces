import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    ActionIconComponent,
    CustomTableComponent,
    IconComponent,
} from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { DeskBookingsComponent } from '../../app/desks/desk-bookings.component';
import { DesksStateService } from '../../app/desks/desks-state.service';

describe('DeskBookingsComponent', () => {
    let spectator: Spectator<DeskBookingsComponent>;
    const createComponent = createComponentFactory({
        component: DeskBookingsComponent,
        providers: [
            {
                provide: DesksStateService,
                useValue: {
                    setFilters: jest.fn(),
                    bookings: new BehaviorSubject([]),
                    filters: new BehaviorSubject({}),
                },
            },
        ],
        declarations: [
            MockComponent(CustomTableComponent),
            MockComponent(ActionIconComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatMenuModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

});
