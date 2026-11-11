import {
    cycleState,
    defaultStateFor,
    isBookable,
    toFillOpacity,
} from '../app/editor/availability';

describe('isBookable', () => {
    it('counts only rooms and desks', () => {
        const types = ['room', 'desk', 'zone', 'decorative'] as const;
        expect(
            types.filter((object_type) => isBookable({ object_type })),
        ).toEqual(['room', 'desk']);
    });
});

describe('cycleState', () => {
    it('starts an object at its resting state', () => {
        expect(cycleState(undefined, 'room')).toBe(defaultStateFor('room'));
        expect(cycleState(undefined, 'desk')).toBe(defaultStateFor('desk'));
    });

    it('steps through the states of the type and wraps around', () => {
        expect(cycleState('free', 'room')).toBe('checked-in');
        expect(cycleState('out-of-service', 'room')).toBe('free');
        expect(cycleState('unavailable', 'desk')).toBe('available');
    });

    it('starts over when the state belongs to another type', () => {
        expect(cycleState('available', 'room')).toBe('free');
    });
});

describe('toFillOpacity', () => {
    it('turns a hex colour into rgba at the given opacity', () => {
        expect(toFillOpacity('#2563eb', 0.5)).toBe('rgba(37,99,235,0.5)');
        expect(toFillOpacity('2563eb', 1)).toBe('rgba(37,99,235,1)');
    });

    it('reads a part that is not hex as 0', () => {
        expect(toFillOpacity('#zz63eb', 0.2)).toBe('rgba(0,99,235,0.2)');
    });
});
