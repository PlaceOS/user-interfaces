import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { addDays, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { of } from 'rxjs';

import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

jest.mock('@placeos/events');
jest.mock('@placeos/bookings');

import * as booking_mod from '@placeos/bookings';
import * as event_mod from '@placeos/events';

describe('ScheduleStateService', () => {
    let spectator: SpectatorService<ScheduleStateService>;
    const createService = createServiceFactory({
        service: ScheduleStateService,
    });

    beforeEach(() => {
        jest.useFakeTimers();
        (booking_mod as any).queryBookings = jest.fn(() => of([{ id: '1' }]));
        (event_mod as any).queryEvents = jest.fn(() => of([{ id: '1' }]));
        spectator = createService();
        spectator.service.setOptions({ start: 0 });
        spectator.service.events.subscribe();
    });

    afterEach(() => jest.useRealTimers());

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should allow polling of events and bookings', () => {
        jest.runOnlyPendingTimers();
        expect(booking_mod.queryBookings).toHaveBeenCalledTimes(1);
        expect(event_mod.queryEvents).toHaveBeenCalledTimes(1);
        spectator.service.startPolling();
        jest.runOnlyPendingTimers();
        jest.runOnlyPendingTimers();
        expect(booking_mod.queryBookings).toHaveBeenCalledTimes(2);
        expect(event_mod.queryEvents).toHaveBeenCalledTimes(2);
        spectator.service.stopPolling();
    });

    it('should allow customising request options', () => {
        expect(booking_mod.queryBookings).not.toBeCalled();
        expect(event_mod.queryEvents).not.toBeCalled();
        const start = addDays(0, 1).valueOf();
        spectator.service.setOptions({ start });
        jest.runOnlyPendingTimers();
        expect(event_mod.queryEvents).toBeCalledWith({
            period_start: getUnixTime(startOfDay(start)),
            period_end: getUnixTime(addDays(endOfDay(start), 6)),
        });
    });
});
