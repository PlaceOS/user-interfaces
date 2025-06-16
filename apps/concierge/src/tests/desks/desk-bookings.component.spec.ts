import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ActionIconComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { SettingsService } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';
import { DeskBookingsComponent } from '../../app/desks/desk-bookings.component';
import { DesksStateService } from '../../app/desks/desks-state.service';

describe('DeskBookingsComponent', () => {
    let spectator: Spectator<DeskBookingsComponent>;
    const createComponent = createComponentFactory({
        component: DeskBookingsComponent,
        providers: [
            MockProvider(DesksStateService, {
                setFilters: jest.fn(),
                bookings: new BehaviorSubject([]),
                filters: new BehaviorSubject({}),
            }),
            MockProvider(SettingsService, { time_format: 'h:mm a' }),
        ],
        declarations: [
            MockComponent(ActionIconComponent),
            MockComponent(IconComponent),
            MockComponent(SimpleTableComponent),
        ],
        imports: [MatMenuModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
