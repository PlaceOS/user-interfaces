import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { BookLockerFlowSuccessComponent } from '../../../app/book/locker-flow/locker-flow-success.component';

describe('BookLockerFlowSuccessComponent', () => {
    let spectator: SpectatorRouting<BookLockerFlowSuccessComponent>;
    let settings: Record<string, any>;
    const last_success: Record<string, any> = {
        asset_id: 'locker-1',
        asset_name: 'E-043',
        date: new Date('2026-04-08T09:00:00.000Z').valueOf(),
        duration: 60,
        zones: ['bld-1', 'lvl-1'],
    };

    const createComponent = createRoutingFactory({
        component: BookLockerFlowSuccessComponent,
        detectChanges: false,
        providers: [
            MockProvider(BookingFormService, {
                last_success,
                openBookingLinkModal: vi.fn(),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn((key: string) => settings[key]),
                time_format: 'h:mm a',
            } as any),
            MockProvider(OrganisationService, {
                buildings: [
                    { id: 'bld-1', name: 'HQ', display_name: 'Headquarters' },
                ],
                levelWithID: vi.fn(() => ({
                    id: 'lvl-1',
                    name: 'Level 1',
                    display_name: 'L1',
                })),
            } as any),
        ],
    });

    beforeEach(() => {
        settings = {};
        spectator = createComponent();
    });

    it('should create', () => expect(spectator.component).toBeTruthy());

    it('should populate calendar links on init', () => {
        spectator.component.ngOnInit();
        // The real link builders run (they are pure string builders), so assert
        // each surfaces a truthy link rather than a stubbed URL.
        expect(spectator.component.outlook_link()).toBeTruthy();
        expect(spectator.component.google_link()).toContain('google.com');
        expect(spectator.component.ical_link()).toContain('text/calendar');
    });

    it('should build the location from building and level', () => {
        expect(spectator.component.location).toContain('Headquarters');
        expect(spectator.component.location).toContain('L1');
    });

    it('should report "Unknown" when there is no last event', () => {
        (spectator.inject(BookingFormService) as any).last_success = null;
        expect(spectator.component.location).toBe('Unknown');
    });

    it('should show calendar links only when enabled by settings', () => {
        expect(spectator.component.show_links).toBeFalsy();
        settings['app.lockers.show_calendar_links'] = true;
        expect(spectator.component.show_links).toBe(true);
    });

    it('should expose the configured time format', () => {
        expect(spectator.component.time_format).toBe('h:mm a');
    });
});
