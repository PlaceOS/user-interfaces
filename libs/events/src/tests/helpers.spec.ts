import { Space } from '@placeos/spaces';
import { User } from '@placeos/users';
import { format, addMinutes, getUnixTime, addDays } from 'date-fns';
import {
    addToDate,
    checkRulesMatch,
    eventStatus,
    formatRecurrence,
    getFreeTimeSlots,
    getNextFreeTimeSlot,
    rulesForSpace,
    stringToMinutes,
} from '../lib/helpers';

describe('CalendarEvent[Methods]', () => {
    describe('eventStatus', () => {
        it('should get correct event status', () => {
            expect(eventStatus({ resources: [] })).toBe('confirmed');
            expect(
                eventStatus({ resources: [{ response_status: 'accepted' }] })
            ).toBe('confirmed');
            expect(
                eventStatus({ resources: [{ response_status: 'tentative' }] })
            ).toBe('tentative');
            expect(
                eventStatus({ resources: [{ response_status: 'needsAction' }] })
            ).toBe('tentative');
            expect(
                eventStatus({ resources: [{ response_status: 'blah' }] })
            ).toBe('cancelled');
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
                } as any)
            ).toBe(`Daily, until ${format(end, 'MMM do, yyyy')}`);
            expect(
                formatRecurrence({
                    interval: 2,
                    pattern: 'daily',
                    end,
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
                } as any)
            ).toBe(`Weekly, until ${format(end, 'MMM do, yyyy')}`);
            expect(
                formatRecurrence({
                    interval: 2,
                    pattern: 'weekly',
                    end,
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
                } as any)
            ).toBe(`Monthly, until ${format(end, 'MMM do, yyyy')}`);
            expect(
                formatRecurrence({
                    interval: 2,
                    pattern: 'monthly',
                    end,
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

    describe('stringToMinutes', () => {
        it('should get minutes value from string', () => {
            expect(stringToMinutes('1 minute')).toBe(1);
            expect(stringToMinutes('2 minutes')).toBe(2);
            expect(stringToMinutes('1 hour')).toBe(60);
            expect(stringToMinutes('2 hours')).toBe(120);
            expect(stringToMinutes('1 day')).toBe(24 * 60);
            expect(stringToMinutes('2 days')).toBe(2 * 24 * 60);
            expect(stringToMinutes('1 week')).toBe(7 * 24 * 60);
            expect(stringToMinutes('2 weeks')).toBe(14 * 24 * 60);
            expect(stringToMinutes('1 month')).toBe(30 * 24 * 60);
            expect(stringToMinutes('2 months')).toBe(60 * 24 * 60);
        });
    });

    describe('addToDate', () => {
        it('should add string time to date value', () => {
            expect(getUnixTime(addToDate('3 hours'))).toBe(
                getUnixTime(addMinutes(new Date(), 180))
            );
        });
    });

    describe('rulesForSpace', () => {
        it('should get rules for space', () => {
            expect(
                rulesForSpace(
                    {
                        space: new Space({ zones: ['zone-1'] }),
                    } as any,
                    { 'zone-1': { rules: { hidden: true }, conditions: {} } }
                )
            ).toEqual({ auto_approve: true, hidden: true });
            expect(
                rulesForSpace(
                    {
                        space: new Space({ zones: ['zone-1'] }),
                    } as any,
                    {
                        'zone-1': {
                            rules: { hidden: true },
                            conditions: { min_length: '1 minute' },
                        },
                    }
                )
            ).toEqual({ auto_approve: true, hidden: false });
        });
    });

    describe('checkRulesMatch', () => {
        it('should check matches for user groups', () => {
            expect(
                checkRulesMatch({ host: new User() } as any, {
                    rules: {},
                    conditions: { groups: ['test'] },
                })
            ).toBe(false);
            expect(
                checkRulesMatch(
                    { host: new User({ groups: ['test'] }) } as any,
                    {
                        rules: {},
                        conditions: { groups: ['test'] },
                    }
                )
            ).toBe(true);
        });
        it('should check matches for is_before time', () => {
            expect(
                checkRulesMatch(
                    { date: addDays(new Date(), 2), duration: 30 } as any,
                    {
                        rules: {},
                        conditions: { is_before: '1 days' },
                    }
                )
            ).toBe(false);
            expect(
                checkRulesMatch({ date: new Date(), duration: 30 } as any, {
                    rules: {},
                    conditions: { is_before: '1 days' },
                })
            ).toBe(true);
        });
        it('should check matches for is_after time', () => {
            expect(
                checkRulesMatch({ date: new Date(), duration: 30 } as any, {
                    rules: {},
                    conditions: { is_after: '1 days' },
                })
            ).toBe(false);
            expect(
                checkRulesMatch(
                    { date: addDays(new Date(), 2), duration: 30 } as any,
                    {
                        rules: {},
                        conditions: { is_after: '1 days' },
                    }
                )
            ).toBe(true);
        });
        it('should check matches for min_length time', () => {
            expect(
                checkRulesMatch({ duration: 30 } as any, {
                    rules: {},
                    conditions: { min_length: '45 minutes' },
                })
            ).toBe(false);
            expect(
                checkRulesMatch({ duration: 30 } as any, {
                    rules: {},
                    conditions: { min_length: '15 minutes' },
                })
            ).toBe(true);
        });
        it('should check matches for max_length time', () => {
            expect(
                checkRulesMatch({ duration: 30 } as any, {
                    rules: {},
                    conditions: { max_length: '15 minutes' },
                })
            ).toBe(false);
            expect(
                checkRulesMatch({ duration: 30 } as any, {
                    rules: {},
                    conditions: { max_length: '45 minutes' },
                })
            ).toBe(true);
        });
    });
});
