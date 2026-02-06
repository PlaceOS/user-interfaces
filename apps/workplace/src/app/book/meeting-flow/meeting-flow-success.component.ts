import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BookingFormService, findNearbyFeature } from '@placeos/bookings';
import {
    Booking,
    BuildingLevel,
    currentUser,
    formatRecurrence,
    fromEventRecurrence,
    i18n,
    notifyError,
    OrganisationService,
    settingSignal,
    SettingsService,
    Space,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { EventFormService, SpacePipe } from '@placeos/events';
import { set } from 'date-fns';
import { firstValueFrom, skip } from 'rxjs';

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
                    @if (last_event()?.recurrence?.pattern) {
                        <div
                            class="bg-base-200 flex items-center space-x-2 rounded-lg px-4 py-2"
                        >
                            <icon class="text-xl">update</icon>
                            <div class="text-sm">
                                {{ formatted_recurrence }}
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
                    @if (space().email && allow_desk_booking()) {
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
})
export class MeetingFlowSuccessComponent implements OnInit {
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _booking_form = inject(BookingFormService);
    private _router = inject(Router);

    private _space_pipe: SpacePipe = new SpacePipe(this._org);

    public readonly loading = signal(false);
    public readonly desk_loading = signal(false);
    public readonly last_event = this._event_form.last_success;
    public readonly allow_desk_booking = computed(() =>
        settingSignal('features', [])()?.includes('desks'),
    );
    public readonly space = computed(
        () => this.last_event()?.space || new Space(),
    );
    public readonly level = computed(
        () => this._org.levelWithID(this.space().zones) || new BuildingLevel(),
    );

    public get time_format() {
        return this._settings.time_format;
    }

    public get formatted_recurrence() {
        const event = this.last_event();
        if (!event?.recurrence?.pattern) return '';

        return formatRecurrence(
            fromEventRecurrence({
                ...event.recurrence,
                start: event.date || event.recurrence.start,
            }),
        );
    }

    public ngOnInit() {
        this.loading.set(true);
        setTimeout(() => this.loading.set(false), 500);
    }

    public async startDeskBooking() {
        this.desk_loading.set(true);
        if (!this.space().email) {
            return notifyError(
                'Unable to book nearby desk when no room in meeting',
            );
        }
        try {
            const event = this.last_event();
            const date = set(event.date, {
                hours: 8,
                minutes: 0,
            }).valueOf();

            // Resolve space and level before setting up the form
            const space = await this._space_pipe.transform(
                this.space().email || this.space().id,
            );
            const level = this._org.levelWithID(space?.zones);
            console.log('Space:', space, level, this.space());

            // Pass correct date/duration via Booking so newForm's internal
            // timeout('date') doesn't overwrite with defaults
            this._booking_form.newForm(
                'desk',
                new Booking({
                    date,
                    duration: 8 * 60,
                    all_day: event.all_day,
                    booking_type: 'desk',
                }),
            );
            this._booking_form.setOptions({
                type: 'desk',
                zone_id: level?.id,
            });
            this._booking_form.form.patchValue({ user: currentUser() });

            // Activate the available_resources pipeline (it only queries
            // when subscribed) and detect stale shareReplay(1) cache.
            let has_cached = false;
            const warmup = this._booking_form.available_resources.subscribe(
                () => {
                    has_cached = true;
                },
            );
            // shareReplay replays synchronously, so has_cached is set by now
            warmup.unsubscribe();
            const resources = await firstValueFrom(
                this._booking_form.available_resources.pipe(
                    skip(has_cached ? 1 : 0),
                ),
            );
            const bookable_desks = resources
                .map((_) => _.map_id || _.id)
                .filter((i) => i);
            const nearby = await findNearbyFeature(
                level.map_id,
                space?.map_id,
                bookable_desks,
            );
            if (!nearby) {
                notifyError(i18n('APP.WORKPLACE.MEETING_DESK_ERROR'));
                this._router.navigate(['/book', 'desk', 'form']);
                return;
            }
            const resource = resources.find((_) => _.map_id === nearby);
            this._booking_form.form.patchValue({
                asset_id: nearby,
                asset_name: resource.name,
                resources: [resource],
            });
            this._router.navigate(['/book', 'desk', 'form']);
        } catch (e) {
            notifyError(i18n('APP.WORKPLACE.MEETING_DESK_ERROR'));
            this._router.navigate(['/book', 'desk', 'form']);
        } finally {
            this.desk_loading.set(false);
        }
    }
}
