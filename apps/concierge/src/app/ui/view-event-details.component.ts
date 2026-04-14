import { Component, computed, inject, input } from '@angular/core';
import { addMinutes, format as formatDate } from 'date-fns';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import {
    CalendarEvent,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    IconComponent,
    SanitizePipe,
    UserAvatarComponent,
} from '@placeos/components';
import { SpacePipe } from '@placeos/events';
import { EventsStateService } from '../day-view/events-state.service';

@Component({
    selector: 'view-event-details',
    template: `
        <div
            class="bg-neutral bg-opacity-60 fixed inset-0"
            (click)="close()"
        ></div>
        <div
            name="panel"
            class="bg-base-100 absolute flex flex-col rounded-sm shadow-sm"
            (click)="$event.stopPropagation()"
        >
            <div class="flex-1 overflow-auto p-4">
                <h3 class="mb-1 pl-6">
                    {{ event().organiser?.name || event().host }}
                </h3>
                <div class="text-bold mb-4 pl-6 opacity-60">
                    {{ event().date | date: 'fullDate' }}
                </div>
                <div class="mb-2 flex items-center">
                    <icon class="mr-1">title</icon>
                    <span class="opacity-60">{{ event().title }}</span>
                </div>
                <div class="mb-2 flex items-center">
                    <icon class="mr-1">schedule</icon>
                    <span class="opacity-60">{{ time() }}</span>
                </div>
                <div class="mb-2 flex items-center">
                    <icon class="mr-1">people</icon>
                    <span class="opacity-60"
                        >{{ event().attendees.length }} Attendee{{
                            event().attendees.length === 1 ? '' : 's'
                        }}</span
                    >
                </div>
                <div class="mb-2 flex flex-col">
                    @for (user of event().attendees; track user) {
                        <div
                            class="hover:bg-base-200 mb-1 flex items-center rounded-sm pl-6"
                        >
                            <a-user-avatar
                                class="pr-2 text-sm"
                                [user]="user"
                            ></a-user-avatar>
                            <div class="flex flex-col">
                                <div class="text-sm opacity-80">
                                    {{
                                        user.name ||
                                            user.first_name +
                                                ' ' +
                                                user.last_name
                                    }}
                                </div>
                                <div class="text-xs opacity-60">
                                    {{ user.email }}
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div class="mb-2 flex items-center">
                    <icon class="mr-1">place</icon>
                    <span class="opacity-60"
                        >{{ building.display_name || building.name }},
                        {{
                            (space_id() | space | async)?.display_name ||
                                (space_id() | space | async)?.name
                        }}</span
                    >
                </div>
                @if (refund_deadline) {
                    <div class="mb-2 flex items-center">
                        <icon class="mr-1" [class]="is_refundable ? 'text-success' : 'text-error'">
                            {{ is_refundable ? 'verified' : 'block' }}
                        </icon>
                        <span [class]="is_refundable ? 'text-success' : 'text-error'" class="text-sm font-medium">
                            {{ is_refundable
                                ? 'Refundable until ' + refund_deadline_display
                                : 'Non-refundable (since ' + refund_deadline_display + ')'
                            }}
                        </span>
                    </div>
                }
                <div class="flex items-center">
                    <icon class="mr-1">format_align_left</icon>
                    <span class="opacity-60">Notes</span>
                </div>
                <div class="mb-2 flex items-center pl-6">
                    <span
                        class="opacity-60"
                        [innerHTML]="
                            event().body || '&lt; No notes &gt;' | sanitize
                        "
                    ></span>
                </div>
            </div>
            @if (!is_delegated()) {
                <div
                    name="actions"
                    class="justify-content flex items-center space-x-4 p-4"
                >
                    <button
                        class="inverse flex-1"
                        btn
                        matRipple
                        (click)="remove()"
                    >
                        Remove Booking
                    </button>
                    <button class="flex-1" btn matRipple (click)="edit()">
                        Edit Booking
                    </button>
                </div>
            }
            <button name="close" icon matRipple (click)="close()" aria-label="Close dialog">
                <icon>close</icon>
            </button>
        </div>
    `,
    styles: [
        `
            :host {
                z-index: 999;
            }

            [name='panel'] {
                padding-top: 0;
                width: 26em;
                left: 50%;
                top: 6.5em;
                transform: translateX(-50%);
                max-height: 80vh;
            }

            [name='actions'] {
                border-top: 1px solid #ccc;
            }

            [name='close'] {
                position: absolute;
                top: 0.25em;
                right: 0.25em;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        IconComponent,
        SpacePipe,
        UserAvatarComponent,
        SanitizePipe,
    ],
})
export class ViewEventDetailsComponent {
    private _state = inject(EventsStateService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    /** Event to display */
    public readonly event = input<CalendarEvent>(undefined);
    /** Close displayed event */
    public readonly close = () => this._state.setEvent(null);

    public readonly edit = () => this._state.newBooking(this.event());

    public readonly remove = async () => {
        const close = await this._state.removeBooking(this.event());
        if (close) this.close();
    };

    public get building() {
        return this._org.building;
    }

    public readonly space_id = computed(() => {
        const event = this.event();
        return event?.resources[0]?.id || event?.space?.id || event?.system?.id;
    });

    public readonly time = computed(() => {
        const event = this.event();
        if (!event) return '';
        const date = new Date(event.date);
        return (
            formatDate(date, this.time_format) +
            ' - ' +
            formatDate(addMinutes(date, event.duration), this.time_format)
        );
    });

    public readonly is_delegated = computed(() =>
        this._settings.get('app.delegated'),
    );

    public get time_format() {
        return this._settings.time_format;
    }

    public get refund_deadline(): number | undefined {
        return this.event()?.extension_data?.refund_deadline;
    }

    public get is_refundable(): boolean {
        return !!this.refund_deadline && Date.now() < this.refund_deadline;
    }

    public get refund_deadline_display(): string {
        return this.refund_deadline ? formatDate(this.refund_deadline, 'd MMM yyyy') : '';
    }
}
