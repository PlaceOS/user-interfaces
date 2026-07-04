import { signal } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ParkingFlowSuccessComponent } from '../../../app/book/parking-flow/parking-flow-success.component';

describe('ParkingFlowSuccessComponent', () => {
    let spectator: SpectatorRouting<ParkingFlowSuccessComponent>;
    let show_links: boolean;

    const last_success: any = {
        title: 'My Parking',
        asset_name: 'Bay 1',
        date: Date.now(),
        duration: 60,
        zones: ['bld-1', 'lvl-1'],
    };

    const createComponent = createRoutingFactory({
        component: ParkingFlowSuccessComponent,
        detectChanges: false,
        providers: [
            MockProvider(BookingFormService, {
                last_success,
            } as any),
            MockProvider(OrganisationService, {
                buildings: [
                    { id: 'bld-1', name: 'HQ', display_name: 'Headquarters' },
                ],
                levelWithID: jest.fn(() => ({
                    id: 'lvl-1',
                    name: 'L1',
                    display_name: 'Level 1',
                })),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(() => show_links),
                time_format: 'h:mm a',
            } as any),
        ],
    });

    beforeEach(() => {
        show_links = false;
        spectator = createComponent();
    });

    it('should resolve the location from the booking building and level', () => {
        expect(spectator.component.location).toBe('Headquarters, Level 1, ');
    });

    it('should return Unknown when there is no successful booking', () => {
        (spectator.component as any)._state.last_success = null;
        expect(spectator.component.location).toBe('Unknown');
    });

    it('should generate calendar links on init', () => {
        spectator.component.ngOnInit();

        expect(spectator.component.outlook_link()).toContain('http');
        expect(spectator.component.google_link()).toContain('http');
        expect(spectator.component.ical_link().length).toBeGreaterThan(0);
    });

    it('should hide the calendar links when the setting is disabled', () => {
        show_links = false;
        spectator.component.ngOnInit();
        spectator.detectChanges();

        expect(spectator.query('a[name="desk-outlook-link"]')).toBeNull();
    });

    it('should show the calendar links when the setting is enabled', () => {
        show_links = true;
        spectator.component.ngOnInit();
        spectator.detectChanges();

        expect(spectator.query('a[name="desk-outlook-link"]')).not.toBeNull();
        expect(spectator.query('a[name="desk-google-link"]')).not.toBeNull();
        expect(spectator.query('a[name="desk-ical-link"]')).not.toBeNull();
    });
});
