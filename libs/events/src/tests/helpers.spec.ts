import { Space } from '@placeos/spaces';
import { User } from '@placeos/users';
import { format, addMinutes, getUnixTime, addDays } from 'date-fns';
import {
    eventStatus,
    formatRecurrence,
    getFreeTimeSlots,
    getNextFreeTimeSlot,
} from '../lib/helpers';

describe('CalendarEvent[Methods]', () => {
    describe('eventStatus', () => {
        it('should get correct event status', () => {
            expect(eventStatus({ resources: [] })).toBe('approved');
            expect(
                eventStatus({ resources: [{ response_status: 'accepted' }] })
            ).toBe('approved');
            expect(
                eventStatus({ resources: [{ response_status: 'tentative' }] })
            ).toBe('tentative');
            expect(
                eventStatus({ resources: [{ response_status: 'needsAction' }] })
            ).toBe('tentative');
            expect(
                eventStatus({ resources: [{ response_status: 'blah' }] })
            ).toBe('declined');
            expect(
                eventStatus({
                    resources: [
                        { response_status: 'blah' },
                        { response_status: 'tentative' },
                    ],
                })
            ).toBe('tentative');
        });
    });

    describe('formatRecurrence', () => {
        it('should handle no value', () => {
            expect(formatRecurrence({} as any)).toBe('');
        });
        it('should handle daily recurrence', () => {
            const end = new Date();
            expect(
                formatRecurrence({
                    interval: 1,
                    pattern: 'daily',
                    end,
                    occurrences: 1,
                } as any)
            ).toBe(`Daily, until ${format(end, 'MMM do, yyyy')}`);
            expect(
                formatRecurrence({
                    interval: 2,
                    pattern: 'daily',
                    end,
                    occurrences: 1,
                } as any)
            ).toBe(`Every 2 days, until ${format(end, 'MMM do, yyyy')}`);
        });
        it('should handle weekly recurrence', () => {
            const end = new Date();
            expect(
                formatRecurrence({
                    interval: 1,
                    pattern: 'weekly',
                    end,
                    occurrences: 1,
                } as any)
            ).toBe(`Weekly, until ${format(end, 'MMM do, yyyy')}`);
            expect(
                formatRecurrence({
                    interval: 2,
                    pattern: 'weekly',
                    end,
                    occurrences: 1,
                } as any)
            ).toBe(`Every 2 weeks, until ${format(end, 'MMM do, yyyy')}`);
        });
        it('should handle monthly recurrence', () => {
            const end = new Date();
            expect(
                formatRecurrence({
                    interval: 1,
                    pattern: 'monthly',
                    end,
                    occurrences: 1,
                } as any)
            ).toBe(`Monthly, until ${format(end, 'MMM do, yyyy')}`);
            expect(
                formatRecurrence({
                    interval: 2,
                    pattern: 'monthly',
                    end,
                    occurrences: 1,
                } as any)
            ).toBe(`Every 2 months, until ${format(end, 'MMM do, yyyy')}`);
        });
    });

    describe('getFreeTimeSlots', () => {
        it('should return at least one block', () => {
            expect(getFreeTimeSlots([])).toHaveLength(1);
        });

        it('should return the correct number of blocks', () => {
            expect(
                getFreeTimeSlots([{ date: new Date().valueOf(), duration: 60 }])
            ).toHaveLength(2);
            expect(
                getFreeTimeSlots([
                    { date: new Date().valueOf(), duration: 60 },
                    {
                        date: addMinutes(new Date(), 70).valueOf(),
                        duration: 60,
                    },
                ])
            ).toHaveLength(2);
            expect(
                getFreeTimeSlots([
                    { date: new Date().valueOf(), duration: 60 },
                    {
                        date: addMinutes(new Date(), 90).valueOf(),
                        duration: 60,
                    },
                ])
            ).toHaveLength(3);
            expect(
                getFreeTimeSlots([
                    { date: new Date().valueOf(), duration: 60 },
                    {
                        date: addMinutes(new Date(), 90).valueOf(),
                        duration: 60,
                    },
                    {
                        date: addMinutes(new Date(), 160).valueOf(),
                        duration: 60,
                    },
                ])
            ).toHaveLength(3);
        });
    });

    describe('getNextFreeTimeSlot', () => {
        it('should get the next free time slot', () => {
            expect(getNextFreeTimeSlot([]).start).toBe(0);
            // TODO: check various times
        });
    });
});
