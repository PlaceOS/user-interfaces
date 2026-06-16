import {
    queryCalendarAvailability,
    queryCalendars,
    querySpaceCalendarAvailability,
    querySpaceFreeBusy,
} from '../lib/calendar.fn';

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    get: jest.fn(),
}));

import { Calendar } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

describe('Calendar API Methods', () => {
    beforeEach(() => jest.clearAllMocks());

    describe('queryCalendars', () => {
        it('should GET calendars from API', async () => {
            jest.mocked(ts_client.get).mockResolvedValue([{}] as any);
            const list = await queryCalendars();
            expect(list).toHaveLength(1);
            expect(list[0]).toBeInstanceOf(Calendar);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/calendars`,
            );
        });
    });
    describe('queryCalendarAvailabilty', () => {
        it('should GET calendar availability from API', async () => {
            jest.mocked(ts_client.get).mockResolvedValue([{}] as any);
            const list = await queryCalendarAvailability({
                period_start: 1,
                period_end: 2,
            });
            expect(list).toHaveLength(1);
            expect(list[0]).toBeInstanceOf(Calendar);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/calendars/availability?period_start=1&period_end=2`,
            );
        });
    });
    describe('querySpaceAvailability', () => {
        it('should GET space availability from API', async () => {
            jest.mocked(ts_client.get).mockResolvedValue([
                { resource: { bookable: true } },
            ] as any);
            const list = await querySpaceCalendarAvailability({
                period_start: 1,
                period_end: 2,
            });
            expect(list).toHaveLength(1);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/calendars/availability?period_start=1&period_end=2`,
            );
        });
    });
    describe('querySpaceFreeBusy', () => {
        it('should GET space availability status from API', async () => {
            jest.mocked(ts_client.get).mockResolvedValue([
                { resource: { bookable: true } },
            ] as any);
            const list = await querySpaceFreeBusy({
                period_start: 1,
                period_end: 2,
            });
            expect(list).toHaveLength(1);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/calendars/free_busy?period_start=1&period_end=2`,
            );
        });
    });
});
