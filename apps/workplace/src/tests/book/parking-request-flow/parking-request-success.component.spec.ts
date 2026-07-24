import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ParkingRequestSuccessComponent } from '../../../app/book/parking-request-flow/parking-request-success.component';

describe('ParkingRequestSuccessComponent', () => {
    let spectator: SpectatorRouting<ParkingRequestSuccessComponent>;
    let show_links: boolean;

    const last_success: any = {
        title: 'Parking Request',
        date: Date.now(),
        duration: 60,
        zones: ['bld-1'],
    };

    const createComponent = createRoutingFactory({
        component: ParkingRequestSuccessComponent,
        detectChanges: false,
        providers: [
            MockProvider(BookingFormService, {
                last_success,
            } as any),
            MockProvider(OrganisationService, {
                buildings: [
                    { id: 'bld-1', name: 'HQ', display_name: 'Headquarters' },
                ],
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn(() => show_links),
                time_format: 'h:mm a',
            } as any),
        ],
    });

    beforeEach(() => {
        show_links = false;
        spectator = createComponent();
    });

    it('should resolve the location from the booking building', () => {
        expect(spectator.component.location).toBe('Headquarters');
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

        expect(
            spectator.query('a[name="parking-request-outlook-link"]'),
        ).toBeNull();
    });

    it('should show the calendar links when the setting is enabled', () => {
        show_links = true;
        spectator.component.ngOnInit();
        spectator.detectChanges();

        expect(
            spectator.query('a[name="parking-request-outlook-link"]'),
        ).not.toBeNull();
        expect(
            spectator.query('a[name="parking-request-google-link"]'),
        ).not.toBeNull();
        expect(
            spectator.query('a[name="parking-request-ical-link"]'),
        ).not.toBeNull();
    });
});
