import {
    groupRoomTimelineEvents,
    isActiveRoomTimelineEvent,
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
});
