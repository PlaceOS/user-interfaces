import { AvailabilityState } from '../data/types';

/** Colour each availability state paints objects in preview mode */
export const STATE_COLORS: Record<AvailabilityState, string> = {
    available: '#4CAF50',
    booked: '#FF9800',
    occupied: '#F44336',
    free: '#4CAF50',
    'checked-in': '#2196F3',
    pending: '#FF9800',
    'out-of-service': '#9E9E9E',
    restricted: '#795548',
    unavailable: '#9E9E9E',
};

export const DESK_STATES: AvailabilityState[] = [
    'available',
    'booked',
    'occupied',
    'restricted',
    'unavailable',
];

export const ROOM_STATES: AvailabilityState[] = [
    'free',
    'checked-in',
    'pending',
    'booked',
    'out-of-service',
];

export const ALL_STATES = Object.keys(STATE_COLORS) as AvailabilityState[];

/** States that make sense for a given object type */
export function getStatesForType(object_type: string): AvailabilityState[] {
    if (object_type === 'room') return ROOM_STATES;
    if (object_type === 'desk') return DESK_STATES;
    return ALL_STATES;
}

/** Next state in the cycle for this object type */
export function cycleState(
    current: AvailabilityState | undefined,
    object_type: string,
): AvailabilityState {
    const states = getStatesForType(object_type);
    if (!current) return states[0];
    const index = states.indexOf(current);
    return states[(index + 1) % states.length];
}

export function getAvailabilityColor(
    state: AvailabilityState | undefined,
): string | undefined {
    return state ? STATE_COLORS[state] : undefined;
}

/** Resting state an object of this type should show */
export function defaultStateFor(object_type: string): AvailabilityState {
    return object_type === 'room' ? 'free' : 'available';
}
