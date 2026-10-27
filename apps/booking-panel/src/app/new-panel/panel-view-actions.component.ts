import { Component, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { PanelStateService } from '../panel-state.service';
import {
    canExtend,
    EXTEND_MINUTES,
    freeMinutes,
    quickBookDurations,
} from './helpers';

/**
 * Buttons for opt-in panel actions: quick booking, meeting extension
 * and room services. Each group needs its feature in `app.features`.
 */
@Component({
    selector: 'panel-view-actions',
    template: `
        <div class="flex flex-wrap items-center justify-center gap-3 p-2">
            @for (minutes of quick_book; track minutes) {
                <button
                    btn
                    matRipple
                    quick-book
                    class="h-12 min-w-24 text-lg"
                    [disabled]="busy()"
                    (click)="quickBook(minutes)"
                >
                    {{
                        'APP.BOOKING_PANEL.BOOK_MINUTES'
                            | translate: { minute: minutes }
                    }}
                </button>
            }
            @if (can_extend) {
                <button
                    btn
                    matRipple
                    extend
                    class="h-12 min-w-24 text-lg"
                    [disabled]="busy()"
                    (click)="extend()"
                >
                    {{
                        'APP.BOOKING_PANEL.EXTEND_MINUTES'
                            | translate: { minute: extend_minutes }
                    }}
                </button>
            }
            @if (services) {
                @if (control_ui) {
                    <button
                        btn
                        matRipple
                        room-control
                        class="h-12 space-x-2 text-lg"
                        (click)="viewControl()"
                    >
                        <icon>tune</icon>
                        <span>{{
                            'APP.BOOKING_PANEL.ROOM_CONTROL' | translate
                        }}</span>
                    </button>
                }
                @if (catering_ui) {
                    <button
                        btn
                        matRipple
                        catering
                        class="h-12 space-x-2 text-lg"
                        (click)="viewCatering()"
                    >
                        <icon>restaurant</icon>
                        <span>{{ 'RESOURCE.CATERING' | translate }}</span>
                    </button>
                }
                <button
                    btn
                    matRipple
                    call-waiter
                    class="h-12 space-x-2 text-lg"
                    (click)="callWaiter()"
                >
                    <icon>room_service</icon>
                    <span>{{
                        'APP.BOOKING_PANEL.CALL_WAITER' | translate
                    }}</span>
                </button>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    imports: [MatRippleModule, IconComponent, TranslatePipe],
})
export class PanelViewActionsComponent {
    private _state = inject(PanelStateService);

    public readonly extend_minutes = EXTEND_MINUTES;
    /** Whether a quick booking or extension request is in progress */
    public readonly busy = signal(false);

    private get _can_book() {
        return this._state.setting('disable_book_now') !== true;
    }

    /** Quick book durations. Hidden when the booking form needs a host. */
    public get quick_book() {
        if (
            !this._state.hasFeature('quick_book') ||
            !this._can_book ||
            this._state.setting('disable_book_now_host') === false ||
            this._state.status() !== 'free'
        ) {
            return [];
        }
        const free = freeMinutes(
            this._state.bookings(),
            this._state.clock(),
            this._state.setting('max_duration') || 480,
        );
        return quickBookDurations(
            free,
            this._state.setting('min_duration') || 15,
        );
    }

    public get can_extend() {
        const current = this._state.current();
        return (
            this._state.hasFeature('extend_meeting') &&
            this._can_book &&
            this._state.status() === 'busy' &&
            !!current?.id &&
            canExtend(current, this._state.bookings())
        );
    }

    public get services() {
        return this._state.hasFeature('room_services');
    }

    public get control_ui() {
        return this._state.setting('control_ui');
    }

    public get catering_ui() {
        return this._state.setting('catering_ui');
    }

    public quickBook(minutes: number) {
        return this._run(() => this._state.quickBook(minutes));
    }

    public extend() {
        return this._run(() => this._state.extendMeeting());
    }

    /** Run one request at a time, so a double tap does not book twice */
    private async _run(request: () => Promise<unknown>) {
        if (this.busy()) return;
        this.busy.set(true);
        try {
            await request();
        } finally {
            this.busy.set(false);
        }
    }

    public viewControl() {
        this._state.viewControl();
    }

    public viewCatering() {
        this._state.viewCatering();
    }

    public callWaiter() {
        this._state.confirmWaiter();
    }
}
