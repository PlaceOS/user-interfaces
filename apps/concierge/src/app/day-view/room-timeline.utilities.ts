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
