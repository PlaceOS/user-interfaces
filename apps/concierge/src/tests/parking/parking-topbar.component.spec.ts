import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { ParkingTopbarComponent } from '../../app/parking/parking-topbar.component';
import { ParkingStateService } from '../../app/parking/parking-state.service';
import { DateOptionsComponent } from '../../app/ui/date-options.component';
import { SearchbarComponent } from '../../app/ui/searchbar.component';

describe('ParkingTopbarComponent', () => {
    let spectator: SpectatorRouting<ParkingTopbarComponent>;
    let hide_level_selector_on_booking_list = false;

    const createComponent = createRoutingFactory({
        component: ParkingTopbarComponent,
        declarations: [
            MockComponent(SearchbarComponent),
            MockComponent(DateOptionsComponent),
        ],
        providers: [
            MockProvider(ParkingStateService, {
                levels: of([]),
                options: of({
                    date: Date.now(),
                    search: '',
                    zones: [],
                    period: 'day',
                    request_filter: 'all',
                }),
                spaces: of([]),
                bookings: of([]),
                period: of('day'),
                setOptions: jest.fn(),
                setPeriod: jest.fn(),
                editSpace: jest.fn(),
                downloadSpacesCSV: jest.fn(),
                uploadSpacesCSV: jest.fn(),
                editUser: jest.fn(),
                editFleetVehicle: jest.fn(),
                editReservation: jest.fn(),
            } as any),
            MockProvider(OrganisationService, {
                active_region: of(null),
                active_building: of({ id: 'bld-1', timezone: 'UTC' }),
                initialised: of(true),
                levelWithID: jest.fn(),
                buildings: [],
                building: { id: 'bld-1', timezone: 'UTC' },
                region: null,
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn((name: string) =>
                    name === 'app.parking.hide_level_selector_on_booking_list'
                        ? hide_level_selector_on_booking_list
                        : name === 'app.parking.show_requests'
                          ? false
                          : false,
                ),
            } as any),
            MockProvider(MatDialog, {
                open: jest.fn(),
            }),
        ],
        imports: [MatFormFieldModule, MatSelectModule, FormsModule],
    });

    beforeEach(() => {
        hide_level_selector_on_booking_list = false;
    });

    it('should show the level selector on the booking list by default', () => {
        spectator = createComponent();
        spectator.component.section.set('events');
        spectator.component.view.set('list');

        expect(spectator.component.hide_level_selector_on_booking_list).toBe(
            false,
        );
    });

    it('should hide the level selector on the booking list when enabled', () => {
        hide_level_selector_on_booking_list = true;
        spectator = createComponent();
        spectator.component.section.set('events');
        spectator.component.view.set('list');

        expect(spectator.component.hide_level_selector_on_booking_list).toBe(
            true,
        );
    });

    it('should keep the level selector on other parking views', () => {
        hide_level_selector_on_booking_list = true;
        spectator = createComponent();
        spectator.component.section.set('events');
        spectator.component.view.set('map');

        expect(spectator.component.hide_level_selector_on_booking_list).toBe(
            false,
        );
    });
});
