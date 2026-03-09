import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {
    ApprovalCategory,
    CATEGORY_DISPLAY_NAMES,
    MockApprovalEvent,
} from './event-approvals-mock.data';

const SYNC_URL = 'http://localhost:3001';

@Injectable({ providedIn: 'root' })
export class EventSyncService {
    private _synced_events = new BehaviorSubject<MockApprovalEvent[]>([]);
    private _event_source: EventSource | null = null;
    private _connected = new BehaviorSubject<boolean>(false);

    readonly synced_events$ = this._synced_events.asObservable();
    readonly connected$ = this._connected.asObservable();

    connect(): void {
        if (this._event_source) return;

        try {
            this._event_source = new EventSource(
                `${SYNC_URL}/api/events/stream`,
            );

            this._event_source.onopen = () => {
                this._connected.next(true);
                console.log('[EventSync] Connected to sync server');
            };

            this._event_source.onmessage = (msg) => {
                try {
                    const data = JSON.parse(msg.data);

                    if (data.type === 'event_added') {
                        this._handleEventAdded(data.event);
                    } else if (data.type === 'event_updated') {
                        this._handleEventUpdated(data.event);
                    } else if (data.type === 'status_changed') {
                        this._handleStatusChanged(data);
                    } else if (data.type === 'service_cancelled') {
                        this._handleServiceCancelled(data);
                    }
                } catch (e) {
                    console.warn('[EventSync] Failed to parse SSE:', e);
                }
            };

            this._event_source.onerror = () => {
                this._connected.next(false);
                console.warn(
                    '[EventSync] SSE error, will auto-reconnect',
                );
            };
        } catch (e) {
            console.warn('[EventSync] Could not connect:', e);
        }
    }

    disconnect(): void {
        if (this._event_source) {
            this._event_source.close();
            this._event_source = null;
            this._connected.next(false);
        }
    }

    async fetchEvents(): Promise<void> {
        try {
            const res = await fetch(`${SYNC_URL}/api/events`);
            const data = await res.json();
            const sync_events: any[] = data.events || [];
            const mock_events: MockApprovalEvent[] = [];
            for (const evt of sync_events) {
                mock_events.push(...this.convertSyncEventToMockEvents(evt));
            }
            this._synced_events.next(mock_events);
            console.log(
                `[EventSync] Fetched ${sync_events.length} events → ${mock_events.length} mock entries`,
            );
        } catch (e) {
            console.warn('[EventSync] Failed to fetch events:', e);
        }
    }

    async postStatus(
        event_id: string,
        category: string,
        status: string,
        by_user: string,
    ): Promise<void> {
        await fetch(`${SYNC_URL}/api/events/${event_id}/status`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ category, status, by_user }),
        });
    }

    convertSyncEventToMockEvents(sync_event: any): MockApprovalEvent[] {
        const results: MockApprovalEvent[] = [];
        const tasks: any[] =
            sync_event.workflow?.approval_tasks || [];

        // Create parent venue event
        results.push({
            id: `sync-${sync_event.id}`,
            title: sync_event.title,
            category: 'venue',
            date: sync_event.event_start || sync_event.date,
            duration_minutes: sync_event.duration_minutes || 60,
            location: sync_event.location || '',
            organiser: sync_event.organiser || '',
        });

        // Create child events per approval task
        for (const task of tasks) {
            const category = task.stage.toLowerCase() as ApprovalCategory;
            if (category === 'venue') continue;
            results.push({
                id: `sync-${sync_event.id}-${category}`,
                title: `${sync_event.title} — ${CATEGORY_DISPLAY_NAMES[category] || category}`,
                category,
                date: sync_event.event_start || sync_event.date,
                duration_minutes: sync_event.duration_minutes || 60,
                location: sync_event.location || '',
                organiser: sync_event.organiser || '',
                parent_event: `sync-${sync_event.id}`,
            });
        }

        // Handle ad-hoc services
        const adhoc: any[] = sync_event.adhoc_services || [];
        for (const svc of adhoc) {
            results.push({
                id: `sync-${sync_event.id}-adhoc-${svc.id}`,
                title: `${sync_event.title} — ${svc.name}`,
                category: 'services',
                date: sync_event.event_start || sync_event.date,
                duration_minutes: sync_event.duration_minutes || 60,
                location: sync_event.location || '',
                organiser: sync_event.organiser || '',
                parent_event: `sync-${sync_event.id}`,
                is_adhoc: true,
                added_date: svc.added_at,
            });
        }

        return results;
    }

    private _handleEventAdded(sync_event: any): void {
        if (!sync_event) return;
        const new_entries = this.convertSyncEventToMockEvents(sync_event);
        const current = this._synced_events.getValue();
        // Avoid duplicates
        const existing_ids = new Set(current.map((e) => e.id));
        const to_add = new_entries.filter(
            (e) => !existing_ids.has(e.id),
        );
        if (to_add.length) {
            this._synced_events.next([...current, ...to_add]);
            console.log(
                `[EventSync] Added ${to_add.length} entries from event: ${sync_event.title}`,
            );
        }
    }

    private _handleEventUpdated(sync_event: any): void {
        if (!sync_event) return;
        const new_entries = this.convertSyncEventToMockEvents(sync_event);
        const current = this._synced_events.getValue();
        // Remove old entries for this event, add new ones
        const prefix = `sync-${sync_event.id}`;
        const filtered = current.filter(
            (e) => e.id !== prefix && !e.id.startsWith(`${prefix}-`),
        );
        this._synced_events.next([...filtered, ...new_entries]);
    }

    private _handleStatusChanged(data: any): void {
        // Status is tracked in EventApprovalStateService, not here
        console.log(
            `[EventSync] Status changed: event=${data.event_id} category=${data.category} status=${data.status}`,
        );
    }

    private _handleServiceCancelled(data: any): void {
        const event_id = data.event_id;
        const stage = (data.stage || '').toLowerCase();
        const cancel_id = `sync-${event_id}-${stage}`;

        const current = this._synced_events.getValue();
        // Remove cancelled service from synced events
        const updated = current.filter((e) => e.id !== cancel_id);
        if (updated.length !== current.length) {
            this._synced_events.next(updated);
            console.log(
                `[EventSync] Removed cancelled service: ${cancel_id}`,
            );
        }
    }
}
