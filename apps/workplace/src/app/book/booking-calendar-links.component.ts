import { Component, computed, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent, SafePipe, TranslatePipe } from '@placeos/components';
import {
    CalEvent,
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
} from '@placeos/events';

/**
 * Outlook, Google and iCal buttons that add `event` to a calendar. The
 * success pages of the booking flows show it. `prefix` starts the name of
 * each link, for example `desk` gives `desk-outlook-link`.
 */
@Component({
    selector: 'booking-calendar-links',
    host: { class: 'relative flex flex-col items-center space-y-4 p-4' },
    template: `
        <a
            btn
            matRipple
            [name]="prefix() + '-outlook-link'"
            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
            [href]="outlook_link()"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src="assets/icons/outlook.svg" class="w-6" />
            <span>{{ 'BOOKINGS.LINK_OUTLOOK' | translate }}</span>
        </a>
        <a
            btn
            matRipple
            [name]="prefix() + '-google-link'"
            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
            [href]="google_link()"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src="assets/icons/gcal.svg" class="w-6" />
            <span>{{ 'BOOKINGS.LINK_GOOGLE' | translate }}</span>
        </a>
        <a
            btn
            matRipple
            [name]="prefix() + '-ical-link'"
            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
            [href]="ical_link() | safe: 'url'"
            target="_blank"
            rel="noopener noreferrer"
        >
            <icon class="text-xl">download</icon>
            <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
        </a>
    `,
    imports: [MatRippleModule, IconComponent, TranslatePipe, SafePipe],
})
export class BookingCalendarLinksComponent {
    /** Event to add. No event gives empty links. */
    public readonly event = input.required<CalEvent | null>();
    /** Prefix of the name of each link */
    public readonly prefix = input.required<string>();

    public readonly outlook_link = computed(() => {
        const event = this.event();
        return event ? generateMicrosoftCalendarLink(event) : '';
    });
    public readonly google_link = computed(() => {
        const event = this.event();
        return event ? generateGoogleCalendarLink(event) : '';
    });
    public readonly ical_link = computed(() => {
        const event = this.event();
        return event ? generateCalendarFileLink(event) : '';
    });
}
