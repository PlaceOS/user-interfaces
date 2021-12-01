import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { TimetableStateService } from '../app/timetable-state.service';

jest.mock('@placeos/ts-client');

import * as placeos from '@placeos/ts-client';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { CalendarEvent } from '@placeos/events';

describe('TimetableStateService', () => {
    let spectator: SpectatorService<TimetableStateService>;
    const createService = createServiceFactory(TimetableStateService);

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should allow listing for space bookings', async () => {
        const binding = { bind: jest.fn(), listen: jest.fn(() => of([{}])) };
        const mod = { binding: jest.fn(() => binding) };
        (placeos as any).getModule = jest.fn(() => mod);
        const obs = spectator.service.bookingsFor('test');
        expect(obs).toBeInstanceOf(Observable);
        expect(placeos.getModule).toBeCalledWith('test', 'Bookings');
        const value = await obs.pipe(take(1)).toPromise();
        expect(value).toHaveLength(1);
        expect(value[0]).toBeInstanceOf(CalendarEvent);
    });
});
