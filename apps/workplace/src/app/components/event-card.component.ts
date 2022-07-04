import { Component, Input } from '@angular/core';
import { CalendarEvent } from '@placeos/events';
import { addMinutes, format, formatDuration, isSameDay } from 'date-fns';

@Component({
    selector: 'event-card',
    template: `
        <h4 class="mb-2 flex items-center" *ngIf="event" date>
            <span *ngIf="show_day" day>{{ day }}, </span>
            {{ event?.date | date: 'h:mm a' }}
            <span class="text-xs px-2">({{ event?.date | date: 'z' }})</span>
        </h4>
        <a
            matRippleColor
            details
            class="w-full"
            [routerLink]="['/schedule', 'view', event?.id, 'event']"
            *ngIf="event"
        >
            <div class="w-full bg-white rounded shadow py-2 relative">
                <h4 class="px-2">{{ event?.title }}</h4>
                <div class="flex m-2">
                    <div
                        class="flex items-center bg-opacity-30 rounded-2xl p-1 text-sm space-x-2 pr-2 font-medium"
                        [class.bg-green-600]="event?.status === 'approved'"
                        [class.bg-yellow-500]="event?.status === 'tentative'"
                        [class.bg-red-600]="event?.status === 'declined'"
                        [class.bg-gray-200]="!event?.status"
                    >
                        <div
                            class="rounded-full h-5 w-5 flex items-center justify-center text-white"
                            [class.bg-success]="event?.status === 'approved'"
                            [class.bg-pending]="event?.status === 'tentative'"
                            [class.bg-error]="event?.status === 'declined'"
                            [class.bg-gray-200]="!event?.status"
                        >
                            <app-icon>
                                {{
                                    event?.status === 'approved'
                                        ? 'done'
                                        : event?.status === 'tentative'
                                        ? 'warning'
                                        : 'close'
                                }}
                            </app-icon>
                        </div>
                        <div class="pr-1">{{ period }}</div>
                    </div>
                </div>
                <div
                    class="flex flex-wrap flex-col sm:flex-row sm:divide-x divide-gray-200 py-2 space-y-2 sm:space-y-0"
                >
                    <div class="flex items-center px-2">
                        <app-icon>meeting_room</app-icon>
                        <div class="mx-2 truncate">
                            {{
                                event?.space?.level?.display_name ||
                                    event?.space?.level?.name
                            }},
                            {{
                                event?.space?.display_name || event?.space?.name
                            }}
                        </div>
                    </div>
                    <div class="flex items-center px-2" *ngIf="location">
                        <app-icon>place</app-icon>
                        <div class="mx-2 truncate">{{ location }}</div>
                    </div>
                    <div class="flex items-center px-2">
                        <app-icon>person_outline</app-icon>
                        <div class="mx-2">
                            {{
                                event?.organiser?.name ||
                                    event?.organiser?.email
                            }}
                        </div>
                    </div>
                    <div
                        class="flex items-center px-2"
                        *ngIf="event?.ext('catering')?.length"
                    >
                        <app-icon>restaurant</app-icon>
                        <div class="mx-2">Catered</div>
                    </div>
                    <div class="flex items-center px-2">
                        <app-icon>people</app-icon>
                        <div class="mx-2">
                            {{ event?.attendees?.length }}
                            {{
                                event?.attendees?.length === 1
                                    ? 'Person'
                                    : 'People'
                            }}
                        </div>
                    </div>
                </div>
                <app-icon
                    class="absolute top-1/2 right-1 text-4xl -translate-y-1/2"
                >
                    chevron_right
                </app-icon>
                <div
                    class="absolute bottom-2 right-2 sm:bottom-auto sm:top-2 text-sm sm:text-base flex items-center pr-4"
                    *ngIf="event?.attendees?.length"
                >
                    <div
                        class="h-10 w-6"
                        *ngFor="
                            let user of event?.attendees
                                | slice
                                    : 0
                                    : (event?.attendees?.length === 6 ? 6 : 5)
                        "
                    >
                        <a-user-avatar [user]="user"></a-user-avatar>
                    </div>
                    <div class="h-10 w-6" *ngIf="event?.attendees?.length > 6">
                        <div
                            class="bg-secondary rounded-full h-10 w-10 border-2 border-white flex items-center justify-center text-white"
                        >
                            +{{ event?.attendees?.length - 5 }}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    `,
    styles: [
        `
            :host {
                display: block;
                width: 100%;
            }
        `,
    ],
})
export class EventCardComponent {
    @Input() public event: CalendarEvent;
    @Input() public show_day: boolean = false;

    public get day() {
        const date = this.event?.date || Date.now();
        const is_today = isSameDay(Date.now(), date);
        return `${is_today ? 'Today' : format(date, 'EEEE')}`;
    }

    public get location() {
        return '';
    }

    public get period() {
        const start = this.event?.date || Date.now();
        const duration = this.event?.duration || 60;
        const end = addMinutes(start, duration);
        const dur = formatDuration({
            hours: Math.floor(duration / 60),
            minutes: duration % 60,
        })
            .replace(' hour', 'hr')
            .replace(' minute', 'min');
        return `${format(start, 'h:mm a')} - ${format(end, 'h:mm a')} (${dur})`;
    }
}
