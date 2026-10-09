import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    Booking,
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { VisitorFlowSuccessComponent } from '../../../app/book/visitor-flow-new/visitor-flow-success.component';

describe('VisitorFlowSuccessComponent', () => {
    let spectator: SpectatorRouting<VisitorFlowSuccessComponent>;
    let clear_form: any;
    const buildings = [
        { id: 'bld-1', name: 'HQ', display_name: 'Head Office' },
        { id: 'bld-2', name: 'Annex', display_name: 'The Annex' },
    ];

    const makeBooking = () =>
        ({
            id: 'booking-1',
            asset_id: 'visitor@external.com',
            asset_name: 'Visitor One',
            user_email: 'host@place.tech',
            user_name: 'Host Person',
            description: 'A visit',
            attendees: [{ email: 'colleague@place.tech' }],
            zones: ['bld-2'],
            date: Date.parse('2026-07-04T10:00:00Z'),
        }) as any as Booking;

    let last_success: Booking;
    let last_count: number;

    const createComponent = createRoutingFactory({
        component: VisitorFlowSuccessComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            MockProvider(SettingsService, { time_format: 'shortTime' } as any),
            {
                provide: OrganisationService,
                useValue: {
                    waitUntilInitialised: vi.fn(() => Promise.resolve()),
                    building: buildings[0],
                    buildings,
                },
            },
            {
                provide: BookingFormService,
                useFactory: () => ({
                    get last_success() {
                        return last_success;
                    },
                    get last_count() {
                        return last_count;
                    },
                    clearForm: (...args: any[]) => clear_form(...args),
                }),
            },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        clear_form = vi.fn();
        last_success = makeBooking();
        last_count = 3;
        settingSignal('bookings.multiple_visitors', false).set(false);
        settingSignal('visitors.show_calendar_links', false).set(false);
        spectator = createComponent({ detectChanges: false });
    });

    it('loads the last successful booking and count on init', async () => {
        await spectator.component.ngOnInit();
        expect(spectator.component.last_success()).toEqual(last_success);
        expect(spectator.component.count()).toBe(3);
    });

    it('defaults the count to one when the form has no recorded count', async () => {
        last_count = 0;
        await spectator.component.ngOnInit();
        expect(spectator.component.count()).toBe(1);
    });

    it('resolves the building from the booking zones', async () => {
        await spectator.component.ngOnInit();
        expect(spectator.component.building()).toEqual(buildings[1]);
    });

    it('falls back to the active building before a booking loads', () => {
        expect(spectator.component.building()).toEqual(buildings[0]);
    });

    it('builds calendar links once a booking is loaded', async () => {
        await spectator.component.ngOnInit();
        expect(spectator.component.cal_event()).toBeTruthy();
        expect(spectator.component.cal_event().attendees).toContain(
            'visitor@external.com',
        );
        expect(spectator.component.outlook_link()).toContain('http');
        expect(spectator.component.google_link()).toContain('http');
        expect(spectator.component.ical_link()).toContain('data:text/calendar');
    });

    it('produces no calendar links when no booking is loaded', () => {
        expect(spectator.component.cal_event()).toBeNull();
        expect(spectator.component.outlook_link()).toBe('');
        expect(spectator.component.google_link()).toBe('');
        expect(spectator.component.ical_link()).toBe('');
    });

    it('reports single-visitor mode by default', () => {
        expect(spectator.component.multiple()).toBe(false);
    });

    it('reports multi-visitor mode when the setting is enabled', () => {
        settingSignal('bookings.multiple_visitors', false).set(true);
        expect(spectator.component.multiple()).toBe(true);
    });

    it('hides calendar links unless enabled', async () => {
        await spectator.component.ngOnInit();
        spectator.detectChanges();
        expect(spectator.query('[name="visitor-outlook-link"]')).not.toExist();
    });

    it('shows calendar links when enabled', async () => {
        settingSignal('visitors.show_calendar_links', false).set(true);
        await spectator.component.ngOnInit();
        spectator.detectChanges();
        expect(spectator.query('[name="visitor-outlook-link"]')).toExist();
        expect(spectator.query('[name="visitor-google-link"]')).toExist();
        expect(spectator.query('[name="visitor-ical-link"]')).toExist();
    });

    it('navigates home when finishing', () => {
        const router = spectator.inject(Router);
        const navigate = vi.spyOn(router, 'navigate').mockResolvedValue(true);
        spectator.component.done();
        expect(navigate).toHaveBeenCalledWith(['/']);
    });

    it('clears the form and restarts the flow when booking another', () => {
        const router = spectator.inject(Router);
        const navigate = vi.spyOn(router, 'navigate').mockResolvedValue(true);
        spectator.component.bookAnother();
        expect(clear_form).toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith(['/book/visitor/form']);
    });
});
