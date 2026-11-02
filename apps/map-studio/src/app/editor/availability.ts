import { AvailabilityState, MapObject } from '../data/types';

/** Whether PlaceOS can bind a booking to the object: rooms and desks */
export const isBookable = (object: Pick<MapObject, 'object_type'>) =>
    object.object_type === 'room' || object.object_type === 'desk';

/**
 * Converts a `#rrggbb` colour into rgba() at the given opacity. A missing `#`
 * is allowed, and a part that is not hex reads as 0.
 */
export function toFillOpacity(hex: string, opacity: number): string {
    const clean = hex.replace('#', '').slice(0, 6);
    const r = parseInt(clean.slice(0, 2), 16) || 0;
    const g = parseInt(clean.slice(2, 4), 16) || 0;
    const b = parseInt(clean.slice(4, 6), 16) || 0;
    return `rgba(${r},${g},${b},${opacity})`;
}

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

const DESK_STATES: AvailabilityState[] = [
    'available',
    'booked',
    'occupied',
    'restricted',
    'unavailable',
];

const ROOM_STATES: AvailabilityState[] = [
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
