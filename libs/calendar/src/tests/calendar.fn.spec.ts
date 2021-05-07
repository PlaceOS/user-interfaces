import { of } from 'rxjs';

import { Space } from '@placeos/spaces';
import {
    queryCalendarAvailability,
    queryCalendars,
    querySpaceAvailability,
    querySpaceFreeBusy,
} from '../lib/calendar.fn';

jest.mock('@placeos/ts-client');

import * as ts_client from '@placeos/ts-client';
import { Calendar } from '../lib/calendar.class';

describe('Calendar API Methods', () => {
    describe('queryCalendars', () => {
        it('should GET calendars from API', async () => {
            (ts_client as any).get = jest.fn(() => of([{}]));
            const list = await queryCalendars().toPromise();
            expect(list).toHaveLength(1);
            expect(list[0]).toBeInstanceOf(Calendar);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/calendars`
            );
            (ts_client as any).get.mockReset();
        });
    });
    describe('queryCalendarAvailabilty', () => {
        it('should GET calendar availability from API', async () => {
            (ts_client as any).get = jest.fn(() => of([{}]));
            const list = await queryCalendarAvailability({
                period_start: 1,
                period_end: 2,
            }).toPromise();
            expect(list).toHaveLength(1);
            expect(list[0]).toBeInstanceOf(Calendar);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/calendars/availability?period_start=1&period_end=2`
            );
            (ts_client as any).get.mockReset();
        });
    });
    describe('querySpaceAvailability', () => {
        it('should GET space availability from API', async () => {
            (ts_client as any).get = jest.fn(() =>
                of([{ resource: { bookable: true } }])
            );
            const list = await querySpaceAvailability({
                period_start: 1,
                period_end: 2,
            }).toPromise();
            expect(list).toHaveLength(1);
            expect(list[0]).toBeInstanceOf(Space);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/calendars/availability?period_start=1&period_end=2`
            );
            (ts_client as any).get.mockReset();
        });
    });
    describe('querySpaceFreeBusy', () => {
        it('should GET space availability status from API', async () => {
            (ts_client as any).get = jest.fn(() =>
                of([{ resource: { bookable: true } }])
            );
            const list = await querySpaceFreeBusy({
                period_start: 1,
                period_end: 2,
            }).toPromise();
            expect(list).toHaveLength(1);
            expect(list[0]).toBeInstanceOf(Space);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/calendars/free_busy?period_start=1&period_end=2`
            );
            (ts_client as any).get.mockReset();
        });
    });
});
