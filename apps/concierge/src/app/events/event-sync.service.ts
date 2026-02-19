import { Injectable, NgZone } from '@angular/core';

const SYNC_URL = 'http://localhost:3001/api/events/stream';

@Injectable({
    providedIn: 'root',
})
export class EventSyncService {
    private _event_source: EventSource | null = null;

    constructor(private _zone: NgZone) {}

    /** Open SSE connection to the sync server */
    connect(): void {
        if (this._event_source) return;

        try {
            this._event_source = new EventSource(SYNC_URL);

            this._event_source.onmessage = (msg) => {
                try {
                    const data = JSON.parse(msg.data);
                    if (data.type === 'event_added' && data.event) {
                        this._zone.run(() => {
                            console.log(
                                `[EventSync] Event received: ${data.event.title}`,
                            );
                        });
                    }
                } catch {
                    // ignore parse errors
                }
            };

            this._event_source.onerror = () => {
                console.warn('[EventSync] SSE connection error, will retry');
            };

            console.log('[EventSync] Connected to event stream');
        } catch {
            console.warn('[EventSync] Could not connect to sync server');
        }
    }

    /** Close SSE connection */
    disconnect(): void {
        if (this._event_source) {
            this._event_source.close();
            this._event_source = null;
        }
    }
}
