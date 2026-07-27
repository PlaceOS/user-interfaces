import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { showBooking } from '@placeos/bookings';
import { Booking, BookingHistory, BookingHistoryState } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';

@Component({
    selector: 'booking-history-modal',
    template: `
        <header
            class="bg-base-200 flex h-14 w-full flex-none items-center justify-between p-2"
        >
            <h2 class="truncate px-2 text-xl font-medium">
                {{
                    'APP.CONCIERGE.BOOKING_HISTORY_HEADER'
                        | translate
                            : {
                                  name:
                                      booking().user_name ||
                                      booking().user_email,
                              }
                }}
            </h2>
            <button icon default matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="relative min-h-48 flex-1 overflow-auto p-4">
            @if (loading()) {
                <div class="absolute inset-0 flex items-center justify-center">
                    <mat-spinner diameter="32" />
                </div>
            } @else if (!history().length) {
                <div
                    class="flex min-h-40 items-center justify-center text-sm opacity-60"
                >
                    {{ 'APP.CONCIERGE.BOOKING_HISTORY_EMPTY' | translate }}
                </div>
            } @else {
                <ol class="flex flex-col gap-2">
                    @for (item of history(); track item.time + item.state) {
                        <li
                            class="border-base-300 flex items-start gap-3 rounded-lg border p-3"
                        >
                            <div
                                class="bg-base-200 flex h-9 w-9 flex-none items-center justify-center rounded-full"
                            >
                                <icon>{{ stateIcon(item.state) }}</icon>
                            </div>
                            <div class="min-w-0 flex-1">
                                <div class="font-medium">
                                    {{ stateLabel(item.state) | translate }}
                                </div>
                                <div class="text-xs opacity-60">
                                    {{ item.time * 1000 | date: 'medium' }}
                                </div>
                                @if (item.source) {
                                    <div class="mt-1 text-xs opacity-60">
                                        {{
                                            'COMMON.TOOLTIP_SOURCE'
                                                | translate
                                                    : { source: item.source }
                                        }}
                                    </div>
                                }
                            </div>
                        </li>
                    }
                </ol>
            }
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                max-height: 80vh;
                overflow: hidden;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class BookingHistoryModalComponent {
    private _data = inject<{ booking: Booking }>(MAT_DIALOG_DATA);

    public readonly booking = signal(this._data.booking);
    public readonly history = signal<BookingHistory[]>([]);
    public readonly loading = signal(true);

    constructor() {
        this.loadHistory();
    }

    public async loadHistory() {
        this.loading.set(true);
        const booking = await showBooking(this.booking().id).catch(() =>
            this.booking(),
        );
        this.booking.set(booking);
        this.history.set(
            [...(booking.history || [])].sort((a, b) => b.time - a.time),
        );
        this.loading.set(false);
    }

    public stateIcon(state: BookingHistoryState) {
        switch (state) {
            case 'reserved':
                return 'event_available';
            case 'checked_in':
                return 'login';
            case 'checked_out':
                return 'logout';
            case 'no_show':
                return 'person_off';
            case 'rejected':
                return 'cancel';
            case 'cancelled':
                return 'event_busy';
            case 'ended':
                return 'event';
            default:
                return 'history';
        }
    }

    public stateLabel(state: BookingHistoryState) {
        switch (state) {
            case 'reserved':
                return 'COMMON.STATUS_RESERVED';
            case 'checked_in':
                return 'COMMON.CHECKED_IN';
            case 'checked_out':
                return 'COMMON.CHECKED_OUT';
            case 'no_show':
                return 'APP.CONCIERGE.BOOKING_HISTORY_STATE_NO_SHOW';
            case 'rejected':
                return 'APP.CONCIERGE.REPORTS_REJECTED';
            case 'cancelled':
                return 'COMMON.TYPE_CANCELLED';
            case 'ended':
                return 'APP.CONCIERGE.BOOKING_STATUS_ENDED';
            default:
                return 'COMMON.UNKNOWN';
        }
    }
}
