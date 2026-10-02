import { inject, Injectable, signal } from '@angular/core';
import {
    AsyncHandler,
    i18n,
    notifyInfo,
    PushNotificationService,
} from '@placeos/common';

import { OrderChanges } from './catering-order-tools';
import { CateringOrdersService } from './catering-orders.service';

const ALERTS_KEY = 'PLACEOS.catering.alerts';

/**
 * Tell staff about new and cancelled orders found by order polling.
 * Plays a chime and shows a message. When the tab is hidden it also sends
 * a browser notification and adds a count to the tab title.
 * Alerts are turned on per device.
 */
@Injectable({
    providedIn: 'root',
})
export class CateringOrderAlertsService extends AsyncHandler {
    private _orders = inject(CateringOrdersService);
    private _push = inject(PushNotificationService);

    private _audio: AudioContext | null = null;
    /** Tab title without the count of unseen changes */
    private _title = '';
    private _unseen = signal(0);

    /** Whether alerts are on for this device */
    public readonly enabled = signal(
        localStorage.getItem(ALERTS_KEY) === 'true',
    );
    /** Number of changes since the tab was last visible */
    public readonly unseen = this._unseen.asReadonly();

    constructor() {
        super();
        this.subscription(
            'changes',
            this._orders.order_changes.subscribe((changes) =>
                this._alert(changes),
            ),
        );
        const on_visible = () => !document.hidden && this._clearBadge();
        document.addEventListener('visibilitychange', on_visible);
        this.subscription('visibility', () =>
            document.removeEventListener('visibilitychange', on_visible),
        );
    }

    /**
     * Turn alerts on or off.
     * Call from a click, so that the browser allows sound and notifications.
     */
    public async setEnabled(state: boolean) {
        this.enabled.set(state);
        localStorage.setItem(ALERTS_KEY, `${state}`);
        if (!state) return;
        await this._audioContext()?.resume();
        await this._push.requestPermission();
    }

    private _alert({ added, cancelled }: OrderChanges) {
        if (!this.enabled()) return;
        const message = [
            added.length
                ? i18n('CATERING.ALERT_NEW', { count: added.length })
                : '',
            cancelled.length
                ? i18n('CATERING.ALERT_CANCELLED', { count: cancelled.length })
                : '',
        ]
            .filter((part) => part)
            .join(' ');
        this._chime();
        notifyInfo(message);
        if (!document.hidden) return;
        this._push.notify(i18n('CATERING.ORDERS'), {
            body: message,
            tag: 'catering-orders',
        });
        this._unseen.update((count) => count + added.length + cancelled.length);
        if (!this._title) this._title = document.title;
        document.title = `(${this._unseen()}) ${this._title}`;
    }

    private _clearBadge() {
        if (!this._unseen()) return;
        this._unseen.set(0);
        document.title = this._title;
        this._title = '';
    }

    /** Play two short rising tones */
    private _chime() {
        const context = this._audioContext();
        if (!context) return;
        const start = context.currentTime;
        [880, 1320].forEach((frequency, index) => {
            const at = start + index * 0.2;
            const oscillator = context.createOscillator();
            const gain = context.createGain();
            oscillator.frequency.value = frequency;
            gain.gain.setValueAtTime(0.2, at);
            gain.gain.exponentialRampToValueAtTime(0.001, at + 0.18);
            oscillator.connect(gain).connect(context.destination);
            oscillator.start(at);
            oscillator.stop(at + 0.2);
        });
    }

    private _audioContext() {
        if (!this._audio && 'AudioContext' in window) {
            this._audio = new AudioContext();
        }
        return this._audio;
    }
}
