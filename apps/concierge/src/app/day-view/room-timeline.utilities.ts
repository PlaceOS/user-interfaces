import { CalendarEvent } from '@placeos/common';

export function isActiveRoomTimelineEvent(event: CalendarEvent): boolean {
    const state = (event as any).state;
    const status = (event as any).status;
    return (
        !event.deleted &&
        !(event as any).rejected &&
        event.type !== 'cancelled' &&
        status !== 'cancelled' &&
        status !== 'declined' &&
        state !== 'cancelled'
    );
}

interface TimelineSpace {
    id: string;
    email?: string;
}

/**
 * Group events by the spaces that they book. An event matches a space when a
 * resource or the system has the ID or email of the space. An event with
 * many rooms is in the list of each room. Each list keeps the input order.
 *
 * Builds lookup maps once, so the cost is near events + spaces + matches,
 * not spaces * events.
 */
export function groupRoomTimelineEvents(
    spaces: TimelineSpace[],
    events: CalendarEvent[],
): Record<string, CalendarEvent[]> {
    // Map keys can be undefined, which keeps the result of the old
    // `item.email === space.email` check when both emails are missing
    const by_id = new Map<unknown, number[]>();
    const by_email = new Map<unknown, number[]>();
    const add = (map: Map<unknown, number[]>, key: unknown, index: number) => {
        const list = map.get(key);
        if (!list) map.set(key, [index]);
        else if (list[list.length - 1] !== index) list.push(index);
    };
    events.forEach((event, index) => {
        for (const item of event.resources || []) {
            add(by_id, item.id, index);
            add(by_email, item.email, index);
        }
        add(by_id, event.system?.id, index);
        add(by_email, event.system?.email, index);
    });
    const event_map: Record<string, CalendarEvent[]> = {};
    for (const space of spaces) {
        const indexes = new Set([
            ...(by_id.get(space.id) || []),
            ...(by_email.get(space.email) || []),
        ]);
        event_map[space.id] = [...indexes]
            .sort((a, b) => a - b)
            .map((index) => events[index]);
    }
    return event_map;
}
