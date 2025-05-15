import { addMinutes } from 'date-fns';
import {
    eventStatus,
    getFreeTimeSlots,
    getNextFreeTimeSlot,
} from '../lib/helpers';

describe('CalendarEvent[Methods]', () => {
    describe('eventStatus', () => {
        it('should get correct event status', () => {
            expect(eventStatus({ resources: [] })).toBe('approved');
            expect(
                eventStatus({ resources: [{ response_status: 'accepted' }] }),
            ).toBe('approved');
            expect(
                eventStatus({ resources: [{ response_status: 'tentative' }] }),
            ).toBe('tentative');
            expect(
                eventStatus({
                    resources: [{ response_status: 'needsAction' }],
                }),
            ).toBe('tentative');
            expect(
                eventStatus({ resources: [{ response_status: 'blah' }] }),
            ).toBe('declined');
            expect(
                eventStatus({
                    resources: [
                        { response_status: 'blah' },
                        { response_status: 'tentative' },
                    ],
                }),
            ).toBe('tentative');
        });
    });

    describe('getFreeTimeSlots', () => {
        it('should return at least one block', () => {
            expect(getFreeTimeSlots([])).toHaveLength(1);
        });

        it('should return the correct number of blocks', () => {
            expect(
                getFreeTimeSlots([
                    { date: new Date().valueOf(), duration: 60 },
                ]),
            ).toHaveLength(2);
            expect(
                getFreeTimeSlots([
                    { date: new Date().valueOf(), duration: 60 },
                    {
                        date: addMinutes(new Date(), 70).valueOf(),
                        duration: 60,
                    },
                ]),
            ).toHaveLength(2);
            expect(
                getFreeTimeSlots([
                    { date: new Date().valueOf(), duration: 60 },
                    {
                        date: addMinutes(new Date(), 90).valueOf(),
                        duration: 60,
                    },
                ]),
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
                ]),
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
