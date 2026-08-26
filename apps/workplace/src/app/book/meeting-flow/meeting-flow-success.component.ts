import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
    BuildingLevel,
    formatRecurrence,
    fromEventRecurrence,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { EventFormService, SpacePipe } from '@placeos/events';

@Component({
    selector: 'meeting-flow-success',
    template: `
        @let details =
            {
                level: level().display_name || level().name,
                space: space().display_name || space().name,
                date: last_event()?.date | date: 'mediumDate',
                time:
                    (last_event()?.date | date: time_format) +
                    ' — ' +
                    (last_event()?.date_end | date: time_format),
            };
        @if (!loading()) {
            <div
                class="bg-base-100 absolute inset-0 z-50 flex flex-col overflow-auto"
            >
                <main
                    class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <h2 class="text-2xl font-medium">
                        {{
                            'BOOKINGS.ITEM_BOOKED'
                                | translate
                                    : { name: 'RESOURCE.ROOM' | translate }
                        }}
                    </h2>
                    <img src="assets/icons/success.svg" />
                    <p class="max-w-lg text-center">
                        @if (last_event()?.all_day) {
                            {{
                                (space().email
                                    ? 'CALENDAR_EVENT.SUCCESS_WITH_SPACE_ALLDAY'
                                    : 'CALENDAR_EVENT.SUCCESS_WITHOUT_SPACE_ALLDAY'
                                ) | translate: details
                            }}
                        }
                        @if (!last_event()?.all_day) {
                            {{
                                (space().email
                                    ? 'CALENDAR_EVENT.SUCCESS_WITH_SPACE'
                                    : 'CALENDAR_EVENT.SUCCESS_WITHOUT_SPACE'
                                ) | translate: details
                            }}
                        }
                    </p>
                    @if (formatted_recurrence()) {
                        <div
                            recurrence
                            class="bg-base-200 flex items-center space-x-2 rounded-lg px-4 py-2"
                        >
                            <icon class="text-xl">update</icon>
                            <div class="text-sm">
                                {{ formatted_recurrence() }}
                            </div>
                        </div>
                    }
                    @if (true) {
                        <p>
                            {{
                                'CALENDAR_EVENT.SUCCESS_WAIT_APPROVED'
                                    | translate
                            }}
                        </p>
                    }
                    <div class="h-4"></div>
                    @if (space().email && allow_desk_booking) {
                        <button
                            btn
                            matRipple
                            class="w-56"
                            [disabled]="desk_loading()"
                            (click)="startDeskBooking()"
                        >
                            @if (desk_loading()) {
                                <icon class="mr-2 animate-spin text-2xl"
                                    >progress_activity</icon
                                >
                            }
                            {{ 'CALENDAR_EVENT.BOOK_NEARBY_DESK' | translate }}
                        </button>
                    }
                </main>
                <footer
                    class="border-base-200 bg-base-100 sticky bottom-0 mt-4 flex w-full items-center justify-center border-t p-2"
                >
                    <a
                        btn
                        name="meeting-created-continue"
                        matRipple
                        class="w-full max-w-lg"
                        [routerLink]="['/']"
                    >
                        {{ 'APP.WORKPLACE.MEETING_FINISHED' | translate }}
                    </a>
                </footer>
            </div>
        }
    `,
    styles: [``],
    imports: [CommonModule, RouterModule, TranslatePipe, IconComponent],
    providers: [SpacePipe],
})
export class MeetingFlowSuccessComponent implements OnInit {
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _router = inject(Router);
    private _space_pipe = inject(SpacePipe);

    public readonly loading = signal(false);
    public readonly desk_loading = signal(false);
    public readonly last_event = this._event_form.last_success;
    public readonly space = signal(new Space());
    public readonly level = computed(() => {
        return this._org.levelWithID(this.space().zones) || new BuildingLevel();
    });
    public readonly formatted_recurrence = computed(() => {
        const event = this.last_event();
        if (!event?.recurrence?.pattern) return '';
        const recurrence_start = event.recurrence.start || event.date;
        return formatRecurrence(
            fromEventRecurrence({
                ...event.recurrence,
                start: recurrence_start,
            }),
            recurrence_start,
        );
    });

    public get allow_desk_booking() {
        return (
            (this._settings.get('app.features') || []).includes('desks') &&
            this._settings.get('app.events.hide_nearby_desks') !== true
        );
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public async ngOnInit() {
        this.loading.set(true);
        const event_space = this.last_event()?.space;
        if (event_space) {
            this.space.set(new Space(event_space));
            try {
                const resolved_space = await this._space_pipe.transform(
                    event_space.email || event_space.id,
                );
                if (
                    resolved_space &&
                    (resolved_space.id ||
                        resolved_space.email !== 'empty.space@place.os')
                ) {
                    this.space.set(new Space(resolved_space));
                }
            } catch {
                /* Falls back to event space details when org data is unavailable */
            }
        }
        setTimeout(() => this.loading.set(false), 500);
    }

    public startDeskBooking() {
        this._router.navigate(['/book', 'desk', 'form'], {
            queryParams: {
                nearby_space: this.space().id || this.space().email,
                date: this.last_event().date,
            },
        });
    }
}
