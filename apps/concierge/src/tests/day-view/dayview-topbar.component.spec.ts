import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';

import { DayviewTopbarComponent } from '../../app/day-view/dayview-topbar.component';
import { EventsStateService } from '../../app/day-view/events-state.service';
import { DateOptionsComponent } from '../../app/ui/date-options.component';
import { SettingsService } from '@placeos/common';

describe('DayviewTopbarComponent', () => {
    let spectator: SpectatorRouting<DayviewTopbarComponent>;
    const createComponent = createRoutingFactory({
        component: DayviewTopbarComponent,
        providers: [
            MockProvider(OrganisationService, {
                initialised: of(true),
                active_levels: new BehaviorSubject([]),
                levelWithID: jest.fn(),
            }),
            MockProvider(EventsStateService, {
                setFilters: jest.fn(),
                setDate: jest.fn(),
                setZones: jest.fn(),
                newBooking: jest.fn(),
            }),
            MockProvider(SettingsService, { time_format: 'h:mm a' }),
        ],
        declarations: [
            MockComponent(DateOptionsComponent),
            MockComponent(IconComponent),
        ],
        imports: [
            MatFormFieldModule,
            MatSelectModule,
            MatSlideToggleModule,
            FormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should handle query parameters', () => {
        expect(spectator.component.zones).toEqual([]);
        spectator.setRouteQueryParam('zone_ids', 'zone-1234,zone-2345');
        spectator.detectChanges();
        expect(spectator.component.zones).toEqual(['zone-1234', 'zone-2345']);
    });

    it('should allow user to make new bookings', () => {
        spectator.click('button[new]');
        expect(
            spectator.inject(EventsStateService).newBooking
        ).toHaveBeenCalled();
    });
});
