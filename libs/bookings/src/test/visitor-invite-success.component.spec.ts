import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    Booking,
    OrganisationService,
    SettingsService,
    User,
} from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockProvider } from 'ng-mocks';

import { BookingFormService } from '../lib/booking-form.service';
import { VisitorInviteSuccessComponent } from '../lib/visitor-invite-success.component';

describe('VisitorInviteSuccessComponent', () => {
    let spectator: Spectator<VisitorInviteSuccessComponent>;
    const last_success = new Booking({
        id: 'bkn-1',
        asset_id: 'visitor@example.com',
        asset_name: 'Visitor One',
        date: Date.now(),
        duration: 60,
        zones: ['bld-1'],
        user_name: 'Host Name',
        user_email: 'host@example.com',
        description: 'Visit',
        attendees: [new User({ email: 'visitor@example.com' })],
    } as any);
    const building = { id: 'bld-1', name: 'HQ', display_name: 'Head Office' };
    const createComponent = createComponentFactory({
        component: VisitorInviteSuccessComponent,
        shallow: true,
        providers: [
            MockProvider(BookingFormService as any, {
                last_success,
            } as any),
            MockProvider(OrganisationService as any, {
                building,
                buildings: [building],
            } as any),
            {
                provide: SettingsService,
                useValue: createSettingsServiceMock(),
            },
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
        // Ensure calendar links are hidden by default across tests.
        spectator.component.show_links.set(false);
        spectator.detectChanges();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should load the last successful booking on init', () => {
        expect(spectator.component.last_success()).toBe(last_success);
    });

    it('should resolve the building from the booking zones', () => {
        expect(spectator.component.building()).toBe(building);
    });

    it('should hide calendar links by default', () => {
        expect('a[name="desk-outlook-link"]').not.toExist();
    });

    it('should show calendar links when enabled', () => {
        spectator.component.show_links.set(true);
        spectator.detectChanges();
        expect('a[name="desk-outlook-link"]').toExist();
        expect('a[name="desk-google-link"]').toExist();
        expect('a[name="desk-ical-link"]').toExist();
    });

    it('should generate calendar links including the visitor attendee', () => {
        expect(spectator.component.cal_event().attendees).toContain(
            'visitor@example.com',
        );
        expect(spectator.component.outlook_link()).toContain('outlook');
        expect(spectator.component.google_link()).toContain(
            'calendar.google.com',
        );
        expect(spectator.component.ical_link()).toContain(
            'data:text/calendar',
        );
    });

    it('should emit done when the finished button is clicked', () => {
        const done = jest.fn();
        spectator.component.done.subscribe(done);
        spectator.click('.border-t button:first-of-type');
        expect(done).toHaveBeenCalled();
    });

    it('should emit another when the book-another button is clicked', () => {
        const another = jest.fn();
        spectator.component.another.subscribe(another);
        spectator.click('.border-t button:last-of-type');
        expect(another).toHaveBeenCalled();
    });
});
