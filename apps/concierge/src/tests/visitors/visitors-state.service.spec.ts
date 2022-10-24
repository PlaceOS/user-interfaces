import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MatDialog } from '@angular/material/dialog';
import { of, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { MockProvider } from 'ng-mocks';

import { User } from '@placeos/users';

import { VisitorsStateService } from '../../app/visitors/visitors-state.service';

jest.mock('@placeos/events');
jest.mock('@placeos/bookings');
jest.mock('@placeos/common');

import * as event_mod from '@placeos/events';
import * as booking_mod from '@placeos/bookings';
import * as common_mod from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

describe('VisitorStateService', () => {
    let spectator: SpectatorService<VisitorsStateService>;
    const createService = createServiceFactory({
        service: VisitorsStateService,
        providers: [
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(OrganisationService, {  })
        ]
    });

    beforeEach(() => (spectator = createService()));

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should list visitor events', async () => {
        (event_mod as any).queryEvents = jest.fn(() =>
            of([{ guests: [{}], attendees: [{}, {}] }])
        );
        (booking_mod as any).queryBookings = jest.fn(() =>
            of([{ extension_data: {} }])
        );
        expect(event_mod.queryEvents).not.toBeCalled();
        const events = await spectator.service.events.pipe(take(1)).toPromise();
        expect(events).toHaveLength(1);
        expect(event_mod.queryEvents).toBeCalled();
    });

    it('should allow filtering of visitor events', async () => {
        (event_mod as any).queryEvents = jest.fn(() =>
            of([
                {
                    guests: [{}],
                    attendees: [
                        { name: '', email: '' },
                        { name: '', email: '' },
                    ],
                },
            ])
        );
        expect(event_mod.queryEvents).not.toBeCalled();
        let events = await spectator.service.filtered_events
            .pipe(take(1))
            .toPromise();
        expect(events).toHaveLength(1);
        spectator.service.setSearchString('test');
        events = await spectator.service.filtered_events
            .pipe(take(1))
            .toPromise();
        expect(events).toHaveLength(0);
    });

    it('should allow polling of visitor events', async () => {
        // TODO: Handle base class not being mocked
        // (event_mod as any).queryEvents = jest.fn(() => of([]));
        // expect(event_mod.queryEvents).not.toBeCalled();
        // spectator.service.events.subscribe();
        // await timer(155).toPromise();
        // expect(event_mod.queryEvents).toBeCalledTimes(1);
        // spectator.service.startPolling(300);
        // await timer(455).toPromise();
        // expect(event_mod.queryEvents).toBeCalledTimes(2);
        // spectator.service.stopPolling();
        // await timer(400).toPromise();
        // expect(event_mod.queryEvents).toBeCalledTimes(2);
    });

    it('should allow checking in visitors', async () => {
        (event_mod as any).checkinEventGuest = jest.fn(() => of({}));
        (common_mod as any).notifySuccess = jest.fn(() => null);
        (common_mod as any).unique = jest.fn(() => []);
        expect(event_mod.checkinEventGuest).not.toBeCalled();
        await spectator.service.checkGuestIn(
            { id: '1', resources: [], attendees: [] } as any,
            new User({ email: 'jim' })
        );
        expect(event_mod.checkinEventGuest).toBeCalledWith('1', 'jim', true, {
            system_id: undefined,
        });
    });

    it('should allow checking out visitors', async () => {
        (event_mod as any).checkinEventGuest = jest.fn(() => of({}));
        (common_mod as any).notifySuccess = jest.fn(() => null);
        (common_mod as any).unique = jest.fn(() => []);
        expect(event_mod.checkinEventGuest).not.toBeCalled();
        await spectator.service.checkGuestOut(
            { id: '1', resources: [], attendees: [] } as any,
            new User({ email: 'jim' })
        );
        expect(event_mod.checkinEventGuest).toBeCalledWith('1', 'jim', false, {
            system_id: undefined,
        });
    });

    it('should allow checking in all visitors', async () => {
        (event_mod as any).checkinEventGuest = jest.fn(() => of({}));
        (common_mod as any).notifySuccess = jest.fn(() => null);
        (common_mod as any).unique = jest.fn(() => []);
        expect(event_mod.checkinEventGuest).not.toBeCalled();
        await spectator.service.checkAllGuestsIn({
            id: '1',
            resources: [],
            attendees: [
                new User({ id: 'jim' }),
                new User({ id: 'jon' }),
                new User({ id: 'james' }),
            ],
        } as any);
        expect(event_mod.checkinEventGuest).toBeCalledTimes(3);
    });

    it('should allow checking out all visitors', async () => {
        (event_mod as any).checkinEventGuest = jest.fn(() => of({}));
        (common_mod as any).notifySuccess = jest.fn(() => null);
        (common_mod as any).unique = jest.fn(() => []);
        expect(event_mod.checkinEventGuest).not.toBeCalled();
        await spectator.service.checkAllGuestsOut({
            id: '1',
            resources: [],
            attendees: [
                new User({ id: 'jim', checked_in: true }),
                new User({ id: 'jon', checked_in: true }),
                new User({ id: 'james' }),
            ],
        } as any);
        expect(event_mod.checkinEventGuest).toBeCalledTimes(2);
    });
});
