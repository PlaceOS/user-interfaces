import { CalendarEvent, Space } from '@placeos/common';
import { setHours, startOfDay } from 'date-fns';

import {
    groupRoomTimelineEvents,
    isActiveRoomTimelineEvent,
    timelineEvents,
    timelineLength,
    timelineOffset,
} from '../../app/day-view/room-timeline.utilities';

describe('room-timeline.utilities', () => {
    describe('isActiveRoomTimelineEvent', () => {
        const base = () => ({
            deleted: false,
            rejected: false,
            type: 'internal',
            status: 'confirmed',
            state: 'active',
        });

        it('should return true for a normal active event', () => {
            expect(isActiveRoomTimelineEvent(base() as any)).toBe(true);
        });

        it('should return false when the event is deleted', () => {
            expect(
                isActiveRoomTimelineEvent({ ...base(), deleted: true } as any),
            ).toBe(false);
        });

        it('should return false when the event is rejected', () => {
            expect(
                isActiveRoomTimelineEvent({ ...base(), rejected: true } as any),
            ).toBe(false);
        });

        it('should return false when the type is cancelled', () => {
            expect(
                isActiveRoomTimelineEvent({
                    ...base(),
                    type: 'cancelled',
                } as any),
            ).toBe(false);
        });

        it('should return false when the status is cancelled or declined', () => {
            expect(
                isActiveRoomTimelineEvent({
                    ...base(),
                    status: 'cancelled',
                } as any),
            ).toBe(false);
            expect(
                isActiveRoomTimelineEvent({
                    ...base(),
                    status: 'declined',
                } as any),
            ).toBe(false);
        });

        it('should return false when the state is cancelled', () => {
            expect(
                isActiveRoomTimelineEvent({
                    ...base(),
                    state: 'cancelled',
                } as any),
            ).toBe(false);
        });
    });

    describe('groupRoomTimelineEvents', () => {
        it('should match by resource or system ID and email, in input order', () => {
            const multi = {
                id: 'e1',
                resources: [
                    { id: 'r1', email: 'r1@x' },
                    { id: 'other', email: 'r2@x' },
                ],
            };
            const by_system = {
                id: 'e2',
                resources: [],
                system: { id: 'r2', email: 'sys@x' },
            };
            const unrelated = {
                id: 'e3',
                resources: [{ id: 'r9', email: 'r9@x' }],
                system: { id: 'r9', email: 'r9@x' },
            };
            const map = groupRoomTimelineEvents(
                [
                    { id: 'r1', email: 'r1@x' },
                    { id: 'r2', email: 'r2@x' },
                    { id: 'r3', email: 'r3@x' },
                ],
                [multi, by_system, unrelated] as any,
            );

            expect(map['r1'].map((e) => e.id)).toEqual(['e1']);
            expect(map['r2'].map((e) => e.id)).toEqual(['e1', 'e2']);
            expect(map['r3']).toEqual([]);
        });
    });

    describe('timelineEvents', () => {
        const HOUR = 60 * 60 * 1000;
        const window = { start: 10 * HOUR, end: 18 * HOUR };
        const event = (id: string, start: number, end: number) =>
            new CalendarEvent({
                id,
                date: start,
                duration: (end - start) / 60_000,
                resources: [new Space({ id: 'sp1', email: 'sp1@x' })],
            });

        it('should keep events that overlap the window, edges included', () => {
            const map = timelineEvents(
                [{ id: 'sp1', email: 'sp1@x' }],
                [
                    event('before', 8 * HOUR, 9 * HOUR),
                    event('ends-at-start', 9 * HOUR, 10 * HOUR),
                    event('inside', 12 * HOUR, 13 * HOUR),
                    event('starts-at-end', 18 * HOUR, 19 * HOUR),
                    event('after', 19 * HOUR, 20 * HOUR),
                ],
                window,
            );

            expect(map['sp1'].map((e) => e.id)).toEqual([
                'ends-at-start',
                'inside',
                'starts-at-end',
            ]);
        });
    });

    describe('timelineOffset and timelineLength', () => {
        const day = startOfDay(Date.now()).valueOf();

        it('should clamp a start before the shown hours to zero', () => {
            const before = setHours(day, 7).valueOf();
            expect(timelineOffset(before, day, 9, 8, '')).toBe(0);
            expect(
                timelineOffset(setHours(day, 13).valueOf(), day, 9, 8, ''),
            ).toBe(50);
        });

        it('should cap a length longer than the shown hours at 100 percent', () => {
            expect(timelineLength(120, 8)).toBe(25);
            expect(timelineLength(24 * 60, 8)).toBe(100);
        });
    });
});
