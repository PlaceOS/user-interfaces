import { Component, computed, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from '@placeos/components';
import { BookingLinkService, isParkingRequest } from './booking-link.service';

/**
 * Booking that is linked to the Outlook event, with Remove, Update when the
 * event time changed, and the last error. Used by the desk and parking tabs.
 */
@Component({
    selector: 'linked-booking',
    template: `
        @if (link().booking(); as booking) {
            <section
                class="border-base-300 space-y-2 rounded-lg border p-3"
                aria-label="Booking on this event"
            >
                <div class="flex items-start gap-2">
                    <div class="min-w-0 flex-1">
                        <div class="text-xs opacity-60">On this event</div>
                        <h3 class="truncate font-medium">{{ name() }}</h3>
                        <div
                            class="text-sm"
                            [class.text-success]="status() === 'Reserved'"
                            [class.text-warning]="status() !== 'Reserved'"
                        >
                            {{ status() }}
                        </div>
                        @if (booking.extension_data?.plate_number; as plate) {
                            <div class="text-xs opacity-60">
                                Plate number {{ plate }}
                            </div>
                        }
                    </div>
                    <button
                        btn
                        matRipple
                        class="inverse h-9 min-h-0 text-sm"
                        [disabled]="saving()"
                        (click)="link().remove()"
                    >
                        Remove
                    </button>
                </div>
                @if (link().out_of_sync()) {
                    <div
                        class="bg-warning-light flex items-center gap-2 rounded p-2 text-sm"
                    >
                        <icon class="text-warning">warning</icon>
                        <span class="flex-1">
                            The event time changed. The booking is still for the
                            old time.
                        </span>
                        <button
                            btn
                            matRipple
                            class="h-8 min-h-0 text-sm"
                            [disabled]="saving()"
                            (click)="link().update()"
                        >
                            Update
                        </button>
                    </div>
                }
            </section>
        }
        @if (link().error()) {
            <div role="alert" class="text-error flex items-start gap-2 text-sm">
                <icon>error</icon>
                <span class="flex-1">{{ link().error() }}</span>
                <button
                    icon
                    matRipple
                    aria-label="Close message"
                    (click)="link().clearError()"
                >
                    <icon>close</icon>
                </button>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: contents;
            }
        `,
    ],
    imports: [MatRippleModule, IconComponent],
})
export class LinkedBookingComponent {
    public readonly link = input.required<BookingLinkService>();

    public readonly saving = computed(() => this.link().state() === 'saving');
    public readonly name = computed(() => {
        const booking = this.link().booking();
        if (!booking) return '';
        return isParkingRequest(booking)
            ? 'Parking request'
            : booking.asset_name || booking.asset_id;
    });
    public readonly status = computed(() => {
        const booking = this.link().booking();
        if (!booking) return '';
        if (isParkingRequest(booking))
            return 'Requested. The parking team assigns a space.';
        return booking.approved ? 'Reserved' : 'Reserved. Approval pending.';
    });
}
