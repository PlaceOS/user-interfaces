import {
    Component,
    OnChanges,
    SimpleChanges,
    inject,
    input,
} from '@angular/core';
import { addMinutes, differenceInMinutes, format, startOfDay } from 'date-fns';

import { CalendarEvent, SettingsService } from '@placeos/common';
import { EventsStateService } from './events-state.service';

const DAY_IN_MINUTES = 24 * 60;

@Component({
    selector: 'dayview-event',
    template: `
        @if ((ui_options | async)?.show_overflow) {
            <div
                [class]="
                    'overflow-block absolute w-full overflow-hidden rounded-sm ' +
                    type
                "
                [style.top]="overflow_top * 100 + '%'"
                [style.height]="overflow_height * 100 + '%'"
            ></div>
        }
        @if (event()) {
            <div
                event
                matRipple
                [class]="
                    'absolute z-10 overflow-hidden rounded-sm border border-base-200 text-sm shadow-xs hover:z-30 ' +
                    type
                "
                [style.top]="top * 100 + '%'"
                [style.height]="height * 100 + '%'"
                (click)="view(event())"
            >
                <div class="px-2 py-1 font-medium">
                    {{ event().organiser?.name }}
                </div>
                @if (event().duration > 30) {
                    <div class="flex items-center py-1">
                        <icon class="mx-2">title</icon>
                        {{ event().title }}
                    </div>
                }
                @if (event().duration > 60) {
                    <div class="flex items-center py-1">
                        <icon class="mx-2">schedule</icon>
                        {{ time }}
                    </div>
                }
                @if (event().duration > 90) {
                    <div class="flex items-center py-1">
                        <icon class="mx-2">people</icon>
                        {{ event().attendees.length }} Attendee{{
                            event().attendees.length === 1 ? '' : 's'
                        }}
                    </div>
                }
            </div>
        }
        @if (event() && (ui_options | async)?.show_cleaning) {
            <div
                cleaning
                class="absolute z-20 flex w-full overflow-hidden rounded-sm bg-base-100 p-2 shadow-sm hover:h-48!"
                [style.top]="top * 100 + '%'"
                [style.height]="height * 100 + '%'"
            >
                <div
                    [class]="
                        'icon text-pending mr-2 flex h-12 w-12 items-center justify-center rounded-sm text-3xl ' +
                        event().ext('cleaning_status')
                    "
                >
                    <icon>{{
                        event().ext('cleaning_status') === 'done'
                            ? 'done'
                            : 'warning'
                    }}</icon>
                </div>
                <div class="w-1/2 flex-1">
                    {{
                        event().ext('cleaning_status') === 'done'
                            ? 'Finished'
                            : 'Scheduled to'
                    }}
                    clean at
                    {{
                        event().ext('cleaning_time') || event().event_end * 1000
                            | date: time_format
                    }}
                </div>
            </div>
        }
    `,
    styles: [
        `
            [event] {
                background-color: #ccc;
                width: 12rem;
                z-index: 100;
                transition: box-shadow 200ms;
            }

            [event]:hover {
                box-shadow:
                    0 1px 3px 1px rgba(0, 0, 0, 0.2),
                    0 1px 1px 0 rgba(0, 0, 0, 0.14),
                    0 2px 1px -1px rgba(0, 0, 0, 0.12) !important;
                cursor: pointer;
            }

            .overflow-block {
                opacity: 0.3;
                width: 12rem;
            }

            .internal {
                background-color: #1565c0;
                color: #fff;
            }

            .icon {
                background-color: #f0f0f0;
            }

            .icon.done {
                color: #21a453;
            }

            .external {
                background-color: #ad1457;
                color: #fff;
            }

            .cancelled {
                background-color: #ccc;
            }
        `,
    ],
    standalone: false,
})
export class DayviewEventComponent implements OnChanges {
    private _state = inject(EventsStateService);
    private _settings = inject(SettingsService);

    /** Event to display */
    public readonly event = input<CalendarEvent>(undefined);
    /** Top position for the event */
    public top = -999;
    /** Height of the event on the calendar */
    public height = 0;
    /** Top position for the event */
    public overflow_top = -999;
    /** Height of the event on the calendar */
    public overflow_height = 0;

    public readonly ui_options = this._state.options;

    public readonly view = (e) => this._state.setEvent(e);

    public get time() {
        const date = new Date(this.event().date);
        return (
            format(date, this.time_format) +
            ' - ' +
            format(addMinutes(date, this.event().duration), this.time_format)
        );
    }

    public get type() {
        const event = this.event();
        return event.guests.length
            ? 'external'
            : event.status === 'declined'
              ? 'cancelled'
              : 'internal';
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public ngOnChanges(changes: SimpleChanges) {
        const event = this.event();
        if (changes.event && event) {
            const start = startOfDay(new Date(event.date));
            const diff = differenceInMinutes(new Date(event.date), start);
            this.top = diff / DAY_IN_MINUTES;
            this.height = event.duration / DAY_IN_MINUTES;
            this.overflow_top =
                (diff - (event.setup_time || 0)) / DAY_IN_MINUTES;
            this.overflow_height =
                (event.duration +
                    (event.setup_time || 0) +
                    (event.breakdown_time || 0)) /
                DAY_IN_MINUTES;
        }
    }
}
