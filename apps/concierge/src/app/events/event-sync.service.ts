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
    private _synced_statuses = new BehaviorSubject<
        Record<string, 'approved' | 'declined'>
    >({});
    private _event_source: EventSource | null = null;
    private _connected = new BehaviorSubject<boolean>(false);
    /** Raw sync event data keyed by original event ID, for accessing quote/pricing data */
    private _raw_sync_events = new Map<string, any>();
    /** Last cancellation event with refund info, for finance service to react to */
    private _last_cancellation = new BehaviorSubject<{
        event_id: string;
        stage: string;
        cancel_id: string;
        refund_issued: number;
        cancelled_at: number;
    } | null>(null);

    readonly synced_events$ = this._synced_events.asObservable();
    readonly synced_statuses$ = this._synced_statuses.asObservable();
    readonly connected$ = this._connected.asObservable();
    /** Emits when a service is cancelled, with refund details */
    readonly cancellation$ = this._last_cancellation.asObservable();

    /** Get raw sync event data by original event ID (for quote/pricing lookup) */
    getRawSyncEvent(original_event_id: string): any {
        return this._raw_sync_events.get(original_event_id) || null;
    }

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
            let all_statuses: Record<string, 'approved' | 'declined'> =
                {};
            for (const evt of sync_events) {
                this._raw_sync_events.set(evt.id, evt);
                mock_events.push(...this.convertSyncEventToMockEvents(evt));
                Object.assign(all_statuses, this.extractStatuses(evt));
            }
            this._synced_events.next(mock_events);
            this._synced_statuses.next(all_statuses);
            console.log(
                `[EventSync] Fetched ${sync_events.length} events → ${mock_events.length} mock entries, ${Object.keys(all_statuses).length} statuses`,
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

    /** Add a MockApprovalEvent to the local synced events list reactively */
    addLocalEvent(event: MockApprovalEvent): void {
        const current = this._synced_events.getValue();
        this._synced_events.next([...current, event]);
    }

    /** POST an ad-hoc service to the sync server */
    async postAdhocService(
        event_id: string,
        service: { id: string; name: string; category: string; added_at: number; unit_price?: number },
    ): Promise<void> {
        try {
            await fetch(
                `${SYNC_URL}/api/events/${event_id}/adhoc-service`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(service),
                },
            );
        } catch (e) {
            console.warn('[EventSync] Failed to post adhoc service:', e);
        }
    }

    /**
     * Extract approval statuses from a sync event's workflow tasks.
     * Returns a map of concierge event ID → 'approved' | 'declined'.
     */
    extractStatuses(
        sync_event: any,
    ): Record<string, 'approved' | 'declined'> {
        const statuses: Record<string, 'approved' | 'declined'> = {};
        const tasks: any[] =
            sync_event.workflow?.approval_tasks || [];

        for (const task of tasks) {
            const category = task.stage.toLowerCase();
            const s = task.status;
            // Map cancelled to declined for concierge's approval state
            const mapped = s === 'cancelled' ? 'declined' : s;
            if (mapped === 'approved' || mapped === 'declined') {
                if (category === 'venue') {
                    statuses[`sync-${sync_event.id}`] = mapped;
                } else {
                    statuses[`sync-${sync_event.id}-${category}`] = mapped;
                }
            }
        }
        return statuses;
    }

    convertSyncEventToMockEvents(sync_event: any): MockApprovalEvent[] {
        const results: MockApprovalEvent[] = [];
        const tasks: any[] =
            sync_event.workflow?.approval_tasks || [];
        const event_date =
            sync_event.event_start ||
            sync_event.date ||
            sync_event.workflow?.submitted_at ||
            Date.now();

        // Find refund_deadline from the VENUE task, or calculate a default (14 days before event)
        const venue_task = tasks.find((t: any) => t.stage.toLowerCase() === 'venue');
        const venue_refund_deadline = venue_task?.refund_deadline
            || (event_date - 14 * 24 * 60 * 60 * 1000);

        // Create parent venue event
        results.push({
            id: `sync-${sync_event.id}`,
            title: sync_event.title,
            category: 'venue',
            date: event_date,
            duration_minutes: sync_event.duration_minutes || 60,
            location: sync_event.location || '',
            organiser: sync_event.organiser || '',
            refund_deadline: venue_refund_deadline,
        });

        // Create child events per approval task (skip cancelled ones)
        for (const task of tasks) {
            const category = task.stage.toLowerCase() as ApprovalCategory;
            if (category === 'venue') continue;
            if (task.status === 'cancelled') continue;
            // Use task's refund_deadline, or default to 7 days before event
            const child_refund_deadline = task.refund_deadline
                || (event_date - 7 * 24 * 60 * 60 * 1000);
            results.push({
                id: `sync-${sync_event.id}-${category}`,
                title: `${sync_event.title} — ${CATEGORY_DISPLAY_NAMES[category] || category}`,
                category,
                date: event_date,
                duration_minutes: sync_event.duration_minutes || 60,
                location: sync_event.location || '',
                organiser: sync_event.organiser || '',
                parent_event: `sync-${sync_event.id}`,
                refund_deadline: child_refund_deadline,
            });
        }

        // Handle ad-hoc services
        const adhoc: any[] = sync_event.adhoc_services || [];
        for (const svc of adhoc) {
            results.push({
                id: `sync-${sync_event.id}-adhoc-${svc.id}`,
                title: `${sync_event.title} — ${svc.name}`,
                category: 'services',
                date: event_date,
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
        this._raw_sync_events.set(sync_event.id, sync_event);
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
        this._raw_sync_events.set(sync_event.id, sync_event);
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
        const event_id = data.event_id;
        const category = (data.category || '').toLowerCase();
        const status = data.status;

        if (status === 'approved' || status === 'declined') {
            const concierge_id =
                category === 'venue'
                    ? `sync-${event_id}`
                    : `sync-${event_id}-${category}`;
            const current = this._synced_statuses.getValue();
            this._synced_statuses.next({
                ...current,
                [concierge_id]: status,
            });
        }
        console.log(
            `[EventSync] Status changed: event=${event_id} category=${category} status=${status}`,
        );
    }

    private _handleServiceCancelled(data: any): void {
        const event_id = data.event_id;
        const stage = (data.stage || '').toLowerCase();
        const cancel_id = `sync-${event_id}-${stage}`;
        const refund_issued = data.refund_issued || 0;

        const current = this._synced_events.getValue();
        // Remove cancelled service from synced events
        const updated = current.filter((e) => e.id !== cancel_id);
        if (updated.length !== current.length) {
            this._synced_events.next(updated);
            console.log(
                `[EventSync] Removed cancelled service: ${cancel_id} (refund: $${refund_issued})`,
            );
        }

        // Update synced statuses to reflect the cancellation as 'declined'
        const current_statuses = this._synced_statuses.getValue();
        this._synced_statuses.next({
            ...current_statuses,
            [cancel_id]: 'declined',
        });

        // Store refund info for finance service to pick up
        this._last_cancellation.next({
            event_id,
            stage,
            cancel_id,
            refund_issued,
            cancelled_at: data.cancelled_at || Date.now(),
        });
    }
}
