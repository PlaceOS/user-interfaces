import { inject, Injectable } from '@angular/core';
import { CalendarEvent, Space } from '@placeos/common';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { updateSpaceList } from '@placeos/events';
import { addMinutes, getUnixTime, isPast } from 'date-fns';

import {
    CATEGORY_DISPLAY_NAMES,
    EventRole,
    MockApprovalEvent,
    MOCK_APPROVAL_EVENTS,
} from './event-approvals-mock.data';
import { EventSyncService } from './event-sync.service';

type ActionStatus = 'approved' | 'declined';

function _autoApprovePastEvents(): Record<string, ActionStatus> {
    const statuses: Record<string, ActionStatus> = {};
    for (const evt of MOCK_APPROVAL_EVENTS) {
        const event_end = addMinutes(evt.date, evt.duration_minutes);
        if (isPast(event_end)) {
            statuses[evt.id] = 'approved';
        }
    }
    return statuses;
}

@Injectable({
    providedIn: 'root',
})
export class EventApprovalStateService {
    private _sync = inject(EventSyncService);

    private _status = new BehaviorSubject<Record<string, ActionStatus>>(
        _autoApprovePastEvents(),
    );
    private _role = new BehaviorSubject<EventRole>('global_admin');

    public readonly status$ = this._status.asObservable();
    public readonly role$ = this._role.asObservable();

    /** Merged list of mock + synced events from eventmocks */
    public readonly all_events$ = combineLatest([
        this._sync.synced_events$,
        of(MOCK_APPROVAL_EVENTS),
    ]).pipe(map(([synced, mock]) => [...mock, ...synced]));

    constructor() {
        this._sync.connect();
        this._sync.fetchEvents();
    }

    public get status(): Record<string, ActionStatus> {
        return this._status.getValue();
    }

    public get role(): EventRole {
        return this._role.getValue();
    }

    public setRole(role: EventRole): void {
        this._role.next(role);
    }

    public setStatus(event_id: string, status: ActionStatus): void {
        this._status.next({
            ...this._status.getValue(),
            [event_id]: status,
        });

        // If this is a synced event, POST to sync server
        if (event_id.startsWith('sync-')) {
            const parts = event_id.replace('sync-', '').split('-');
            const original_event_id = parts[0];
            const category = parts.slice(1).join('-') || 'venue';
            this._sync
                .postStatus(
                    original_event_id,
                    category,
                    status,
                    'Concierge Admin',
                )
                .catch((err) =>
                    console.warn('[Sync] Failed to post status:', err),
                );
        }
    }

    /** Force all observables to re-evaluate (e.g. after adding mock events) */
    public refresh(): void {
        this._status.next({ ...this._status.getValue() });
    }

    public readonly approved_calendar_events$ = combineLatest([
        this._status,
        this.all_events$,
    ]).pipe(
        map(([statuses, all]) => {
            const approved_ids = Object.entries(statuses)
                .filter(([_, s]) => s === 'approved')
                .map(([id]) => id);
            const approved_events = approved_ids
                .map((id) => all.find((e) => e.id === id))
                .filter(Boolean);

            // Group by parent: standalone events + children under their parent
            const parent_map = new Map<string, MockApprovalEvent[]>();

            for (const evt of approved_events) {
                const key = evt.parent_event || evt.id;
                if (!parent_map.has(key)) {
                    parent_map.set(key, []);
                }
                parent_map.get(key).push(evt);
            }

            const calendar_events: CalendarEvent[] = [];

            for (const [parent_id, children] of parent_map) {
                const parent = all.find((e) => e.id === parent_id);
                const primary = parent || children[0];
                const approved_services = children.map(
                    (c) => CATEGORY_DISPLAY_NAMES[c.category],
                );
                if (
                    parent &&
                    !children.includes(parent) &&
                    approved_ids.includes(parent.id)
                ) {
                    // parent is already in children list via the loop above
                }
                calendar_events.push(
                    this._toCalendarEvent(primary, approved_services),
                );
            }

            return calendar_events;
        }),
    );

    /** All events as CalendarEvents with correct approval status */
    public readonly all_calendar_events$ = combineLatest([
        this._status,
        this.all_events$,
    ]).pipe(
        map(([statuses, all]) => {
            return all.map((event) => {
                const status = statuses[event.id];
                const response_status =
                    status === 'approved'
                        ? 'accepted'
                        : status === 'declined'
                          ? 'declined'
                          : 'tentative';
                return this._toCalendarEvent(
                    event,
                    [],
                    response_status,
                );
            });
        }),
    );

    /** Root/standalone events grouped with children's requirement statuses */
    public readonly grouped_calendar_events$ = combineLatest([
        this._status,
        this.all_events$,
    ]).pipe(
        map(([statuses, all]) => {
            const root_events = all.filter(
                (e) => !e.parent_event,
            );

            return root_events.map((parent) => {
                const children = all.filter(
                    (e) => e.parent_event === parent.id,
                );

                const requirements: Record<string, string | null> = {
                    venue: null,
                    dining: null,
                    av_tech: null,
                    safety: null,
                    events: null,
                    parking: null,
                    setup: null,
                    services: null,
                };

                requirements[parent.category] =
                    statuses[parent.id] || 'pending';

                for (const child of children) {
                    requirements[child.category] =
                        statuses[child.id] || 'pending';
                }

                const active = Object.values(requirements).filter(
                    Boolean,
                );
                let response_status = 'tentative';
                if (
                    active.length &&
                    active.every((s) => s === 'approved')
                ) {
                    response_status = 'accepted';
                } else if (active.some((s) => s === 'declined')) {
                    response_status = 'declined';
                }

                return this._toCalendarEvent(
                    parent,
                    [],
                    response_status,
                    requirements,
                );
            });
        }),
    );

    /** Unique Space objects for all mock event locations */
    public mockSpaces(): Space[] {
        const seen = new Set<string>();
        return MOCK_APPROVAL_EVENTS.map((event) => {
            const room_email =
                event.location
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, '.') + '@ucla.edu';
            if (seen.has(room_email)) return null;
            seen.add(room_email);
            return new Space({
                id: room_email,
                name: event.location,
                display_name: event.location,
                email: room_email,
                bookable: true,
            });
        }).filter(Boolean);
    }

    private _toCalendarEvent(
        mock: MockApprovalEvent,
        approved_services: string[],
        response_status: string = 'accepted',
        requirements?: Record<string, string | null>,
    ): CalendarEvent {
        const start_seconds = getUnixTime(mock.date);
        const organiser_email =
            mock.organiser
                .toLowerCase()
                .replace(/[^a-z0-9]/g, '.') + '@ucla.edu';
        const room_email =
            mock.location
                .toLowerCase()
                .replace(/[^a-z0-9]/g, '.') + '@ucla.edu';

        let body = '';
        if (requirements) {
            const icon = (name: string, color: string) =>
                `<span class="material-symbols-rounded" style="font-size:16px;vertical-align:middle;color:${color}">${name}</span>`;
            const STATUS_LABEL: Record<string, string> = {
                approved: `${icon('done', '#16a34a')} Approved`,
                declined: `${icon('close', '#dc2626')} Declined`,
                pending: `${icon('schedule', '#ca8a04')} Pending`,
            };
            const items = Object.entries(requirements)
                .filter(([_, status]) => status !== null)
                .map(
                    ([cat, status]) =>
                        `<li>${CATEGORY_DISPLAY_NAMES[cat] || cat} — ${STATUS_LABEL[status] || status}</li>`,
                )
                .join('');
            body = `<p><strong>Services</strong></p><ul>${items}</ul>`;
        } else {
            const services_html = approved_services
                .map((s) => `<li>${s} — Confirmed</li>`)
                .join('');
            body = `<p><strong>Approved Services</strong></p><ul>${services_html}</ul>`;
        }

        // Pre-populate the space cache so the modal resolves the room
        updateSpaceList([
            new Space({
                id: room_email,
                name: mock.location,
                display_name: mock.location,
                email: room_email,
            }),
        ]);

        return new CalendarEvent({
            id: mock.id,
            title: mock.title,
            event_start: start_seconds,
            event_end: start_seconds + mock.duration_minutes * 60,
            host: organiser_email,
            location: mock.location,
            body,
            attendees: [
                {
                    name: mock.organiser,
                    email: organiser_email,
                } as any,
                {
                    name: mock.location,
                    email: room_email,
                    resource: true,
                    display_name: mock.location,
                    response_status,
                } as any,
            ],
            extension_data: {
                shared_event: true,
                category: mock.category,
                attendance_type: 'ONSITE',
                ...(requirements ? { requirements } : {}),
            },
        });
    }
}
