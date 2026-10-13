import { isActiveRoomTimelineEvent } from '../../app/day-view/room-timeline.utilities';

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
});
