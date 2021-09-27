import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { PanelStateService } from '../../app/panel-state.service';
import { BehaviorSubject } from 'rxjs';
import { PanelBookingListComponent } from '../../app/panel/panel-booking-list.component';
import { addMinutes, subMinutes } from 'date-fns';

describe('PanelBookingListComponent', () => {
    let spectator: Spectator<PanelBookingListComponent>;
    const createComponent = createComponentFactory({
        component: PanelBookingListComponent,
        providers: [
            {
                provide: PanelStateService,
                useValue: {
                    bookings: new BehaviorSubject([]),
                    settings: new BehaviorSubject({}),
                },
            },
        ],
    });

    beforeEach(() => {
        jest.useFakeTimers();
        spectator = createComponent();
    });

    afterEach(() => {
        (spectator.inject(PanelStateService).bookings as any).next([]);
        jest.useRealTimers();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show next/current booking', () => {
        expect('p').toContainText('No upcoming events');
        const service = spectator.inject(PanelStateService);
        (service.bookings as any).next([
            { title: 'An Event', date: new Date() },
        ]);
        spectator.detectChanges();
        expect('p').not.toContainText('No upcoming events');
        expect('h2').toContainText('Current');
        expect('[current]').toContainText('An Event');
    });

    it('should show upcoming bookings', () => {
        expect('p').toContainText('No upcoming events');
        const service = spectator.inject(PanelStateService);
        (service.bookings as any).next([
            { title: 'An Event', date: new Date() },
        ]);
        spectator.detectChanges();
        expect('p').not.toContainText('No upcoming events');
        expect('h2').not.toContainText('Upcoming');
        expect('[upcoming]').not.toExist();
        (service.bookings as any).next([
            { title: 'An Event', date: new Date() },
            { title: 'Upcoming Event', date: addMinutes(new Date(), 60) },
        ]);
        spectator.detectChanges();
        expect('h2').toContainText('Upcoming');
        expect('[upcoming]').toContainText('Upcoming Event');
    });

    it('should show correct status of current booking', () => {
        jest.clearAllTimers();
        expect('h2 span').not.toExist();
        const service = spectator.inject(PanelStateService);
        (service.bookings as any).next([
            { date: addMinutes(new Date(), 30), duration: 60 },
        ]);
        spectator.detectChanges();
        jest.runOnlyPendingTimers();
        spectator.detectChanges();
        expect('h2 span').toContainText('Starting in');
        (service.bookings as any).next([
            { date: subMinutes(new Date(), 30), duration: 60 },
        ]);
        spectator.detectChanges();
        jest.runOnlyPendingTimers();
        spectator.detectChanges();
        expect('h2 span').toContainText('In Progress');
        (service.bookings as any).next([
            { date: addMinutes(new Date(), 75), duration: 60 },
        ]);
        spectator.detectChanges();
        jest.runOnlyPendingTimers();
        spectator.detectChanges();
        expect('h2 span').not.toExist();
    });
});
