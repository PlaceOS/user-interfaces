import { EventFormFilters } from '@placeos/events';

export interface RoomCapacityOption {
    /** Minimum number of people. `-1` is any room size */
    value: number;
    /** Maximum number of people. Empty is no upper limit */
    max?: number;
    /** Translation key of the option label */
    label: string;
    icon: string;
}

/** Room size options of the new meeting flow */
export const ROOM_CAPACITY_OPTIONS: readonly RoomCapacityOption[] = [
    { value: -1, label: 'COMMON.CAPACITY_ANY', icon: 'person' },
    { value: 1, max: 2, label: 'CALENDAR_EVENT.ROOM_SIZE_1_2', icon: 'person' },
    { value: 3, max: 4, label: 'CALENDAR_EVENT.ROOM_SIZE_3_4', icon: 'group' },
    { value: 5, max: 8, label: 'CALENDAR_EVENT.ROOM_SIZE_5_8', icon: 'groups' },
    { value: 9, label: 'CALENDAR_EVENT.ROOM_SIZE_9_PLUS', icon: 'groups' },
];

/** Room filters for the size option with the given minimum capacity */
export function roomCapacityFilters(
    capacity: number,
): Pick<EventFormFilters, 'capacity' | 'capacity_max'> {
    const option = ROOM_CAPACITY_OPTIONS.find((_) => _.value === capacity);
    return { capacity, capacity_max: option?.max };
}
