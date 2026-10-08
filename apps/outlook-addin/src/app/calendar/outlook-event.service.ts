import { computed, Injectable, signal } from '@angular/core';
import {
    AsyncHandler,
    CalendarEvent,
    currentUser,
    errorMessage,
    log,
    ResourceResponseStatus,
} from '@placeos/common';
import { showEvent } from '@placeos/events';
import { OutlookEvent } from './outlook-event';
import {
    hasOfficeAppointment,
    MemoryItemAdapter,
    OfficeItemAdapter,
    OutlookItemAdapter,
} from './outlook-item.adapter';

/**
 * State of the Outlook appointment that the calendar task pane is attached
 * to. Components read `event()` and never ask the user for the title, date or
 * time again. Call `refresh()` before any action that commits a booking.
 */
@Injectable({ providedIn: 'root' })
export class OutlookEventService extends AsyncHandler {
    private _adapter: OutlookItemAdapter = hasOfficeAppointment()
        ? new OfficeItemAdapter()
        : new MemoryItemAdapter();
    private _listening = false;
    private _refresh_count = 0;

    private readonly _event = signal<OutlookEvent | null>(null);
    private readonly _saved_event = signal<CalendarEvent | null>(null);
    private readonly _loading = signal(false);
    private readonly _error = signal('');
    private readonly _item_version = signal(0);

    /** Current details of the Outlook event */
    public readonly event = this._event.asReadonly();
    /** PlaceOS copy of the saved event, when the event is saved */
    public readonly saved_event = this._saved_event.asReadonly();
    public readonly loading = this._loading.asReadonly();
    public readonly error = this._error.asReadonly();
    /**
     * Number that changes when a pinned task pane moves to a different
     * Outlook item. State that belongs to one item resets on a change.
     */
    public readonly item_version = this._item_version.asReadonly();
    /** Whether the pane runs inside Outlook, not the in-memory sample */
    public readonly is_outlook = !(this._adapter instanceof MemoryItemAdapter);
    /** Room response status from Exchange, grouped by lower-case email */
    public readonly room_responses = computed(() => {
        const map: Record<string, ResourceResponseStatus> = {};
        for (const space of this._saved_event()?.resources || []) {
            if (space.email)
                map[space.email.toLowerCase()] = space.response_status;
        }
        return map;
    });

    /** Replace the item adapter. Used by tests. */
    public useAdapter(adapter: OutlookItemAdapter) {
        this._adapter = adapter;
        this._listening = false;
    }

    /** Start listening for Outlook changes and read the event */
    public async init() {
        if (!this._listening) {
            this._listening = true;
            this._adapter.onChange(() =>
                this.timeout('outlook-change', () => this.refresh(), 200),
            );
            this._adapter.onItemChange(() => {
                this._item_version.update((v) => v + 1);
                this.timeout('outlook-change', () => this.refresh(), 200);
            });
            // Outlook has no event for subject changes. Read again when the
            // user returns to the task pane.
            window.addEventListener('focus', () =>
                this.timeout('outlook-focus', () => this.refresh(), 200),
            );
        }
        await this.refresh();
    }

    /**
     * Read the latest event details from Outlook. Returns `null` when Outlook
     * cannot read the event, so callers never act on old details.
     */
    public async refresh(): Promise<OutlookEvent | null> {
        const count = ++this._refresh_count;
        this._loading.set(true);
        try {
            const [details, item_id] = await Promise.all([
                this._adapter.read(),
                this._adapter.itemId(),
            ]);
            const saved = item_id ? await this._loadSaved(item_id) : null;
            const event: OutlookEvent = {
                ...details,
                item_id,
                all_day: details.all_day ?? savedAllDay(saved, details),
            };
            // A newer refresh started while this one waited. Return this read
            // to the caller, but let the newer refresh set the state.
            if (count !== this._refresh_count) return event;
            this._saved_event.set(saved);
            this._event.set(event);
            this._error.set('');
            return event;
        } catch (error) {
            log('Outlook', 'Unable to read the Outlook event', error, 'warn');
            this._error.set(
                errorMessage(error) || 'Unable to read the Outlook event.',
            );
            return null;
        } finally {
            if (count === this._refresh_count) this._loading.set(false);
        }
    }

    /**
     * Return the Exchange item ID. Saves a new event first. Outlook does not
     * send invitations when it saves a new appointment.
     */
    public async ensureSaved() {
        const item_id =
            (await this._adapter.itemId()) || (await this._adapter.save());
        await this.refresh();
        return item_id;
    }

    /** REST/Graph ID of the saved item */
    public restId(item_id = this._event()?.item_id || '') {
        return item_id ? this._adapter.restId(item_id) : '';
    }

    public async addRoom(email: string) {
        await this._adapter.addRoom(email);
        await this.refresh();
    }

    public async removeRoom(email: string) {
        await this._adapter.removeRoom(email);
        await this.refresh();
    }

    public getProperty(key: string) {
        return this._adapter.getProperty(key);
    }

    public setProperty(key: string, value: string) {
        return this._adapter.setProperty(key, value);
    }

    /** Load the saved event from the user's calendar through PlaceOS */
    private async _loadSaved(item_id: string) {
        const calendar = currentUser()?.email;
        if (!calendar) return null;
        return showEvent(this._adapter.restId(item_id), { calendar }).catch(
            () => null,
        );
    }
}

/**
 * Use the all-day flag of the saved event only when the saved times are the
 * same as the times in Outlook. Otherwise the saved copy is out of date and
 * the flag is unknown.
 */
function savedAllDay(
    saved: CalendarEvent | null,
    details: Pick<OutlookEvent, 'start' | 'end'>,
): boolean | null {
    if (!saved) return null;
    const saved_start = saved.event_start * 1000;
    const saved_end = saved.event_end * 1000;
    return saved_start === details.start && saved_end === details.end
        ? saved.all_day
        : null;
}
