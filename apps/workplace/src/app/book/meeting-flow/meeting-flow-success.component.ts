import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BookingFormService, findNearbyFeature } from '@placeos/bookings';
import {
    currentUser,
    i18n,
    nextValueFrom,
    notifyError,
    SettingsService,
} from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { SpacePipe } from '@placeos/spaces';
import { set } from 'date-fns';

@Component({
    selector: 'meeting-flow-success',
    template: `
        @let details =
            {
                level: level?.display_name || level?.name,
                space: space?.display_name || space?.name,
                date: last_event()?.date | date: 'mediumDate',
                time:
                    (last_event()?.date | date: time_format) +
                    ' — ' +
                    (last_event()?.date_end | date: time_format),
            };
        @if (!loading()) {
            <div
                class="absolute inset-0 z-50 flex flex-col overflow-auto bg-base-100"
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
                    <p class="max-w-[32rem] text-center">
                        @if (last_event()?.all_day) {
                            {{
                                (space
                                    ? 'CALENDAR_EVENT.SUCCESS_WITH_SPACE_ALLDAY'
                                    : 'CALENDAR_EVENT.SUCCESS_WITHOUT_SPACE_ALLDAY'
                                ) | translate: details
                            }}
                        }
                        @if (!last_event()?.all_day) {
                            {{
                                (space
                                    ? 'CALENDAR_EVENT.SUCCESS_WITH_SPACE'
                                    : 'CALENDAR_EVENT.SUCCESS_WITHOUT_SPACE'
                                ) | translate: details
                            }}
                        }
                    </p>
                    @if (true) {
                        <p>
                            {{
                                'CALENDAR_EVENT.SUCCESS_WAIT_APPROVED'
                                    | translate
                            }}
                        </p>
                    }
                    <div class="h-4"></div>
                    @if (space?.email && allow_desk_booking) {
                        <button
                            btn
                            matRipple
                            class="w-48"
                            (click)="startDeskBooking()"
                        >
                            {{ 'CALENDAR_EVENT.BOOK_NEARBY_DESK' | translate }}
                        </button>
                    }
                </main>
                <footer
                    class="sticky bottom-0 mt-4 flex w-full items-center justify-center border-t border-base-200 bg-base-100 p-2"
                >
                    <a
                        btn
                        name="meeting-created-continue"
                        matRipple
                        class="w-full max-w-[32rem]"
                        [routerLink]="['/']"
                    >
                        {{ 'APP.WORKPLACE.MEETING_FINISHED' | translate }}
                    </a>
                </footer>
            </div>
        }
    `,
    styles: [``],
    standalone: false,
})
export class MeetingFlowSuccessComponent implements OnInit {
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _booking_form = inject(BookingFormService);
    private _router = inject(Router);

    private _space_pipe: SpacePipe = new SpacePipe(this._org);

    public readonly loading = signal(false);
    public readonly last_event = this._event_form.last_success;

    public get allow_desk_booking() {
        return this._settings.get('app.features').includes('desks');
    }

    public get space() {
        return this.last_event()?.space;
    }

    public get level() {
        return (
            this._org.levelWithID(this.space?.zones) ||
            this._org.levelsForBuilding()[0]
        );
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public ngOnInit() {
        this.loading.set(true);
        setTimeout(() => this.loading.set(false), 500);
    }

    public startDeskBooking() {
        this._router.navigate(['/book', 'desks', 'form']);
        setTimeout(async () => {
            this._booking_form.newForm('desk');
            const space = await this._space_pipe.transform(
                this.space.id || this.space.email,
            );
            const level = this._org.levelWithID(space?.zones);
            this._booking_form.setOptions({ type: 'desk', zone_id: level?.id });
            this._booking_form.form.patchValue({
                date: set(this.last_event().date, {
                    hours: 8,
                    minutes: 0,
                }).valueOf(),
                duration: 10 * 60,
                all_day: this.last_event().all_day,
                booking_type: 'desk',
                user: currentUser(),
            });
            const resources = await nextValueFrom(
                this._booking_form.available_resources,
            );
            const bookable_desks = resources
                .map((_) => _.map_id || _.id)
                .filter((i) => i);
            const nearby = await findNearbyFeature(
                level.map_id,
                space?.map_id,
                bookable_desks,
            );
            if (!nearby)
                return notifyError(i18n('APP.WORKPLACE.MEETING_DESK_ERROR'));
            const resource = resources.find((_) => _.map_id === nearby);
            this._booking_form.form.patchValue({
                date: set(this.last_event().date, {
                    hours: 8,
                    minutes: 0,
                }).valueOf(),
                duration: 10 * 60,
                all_day: this.last_event().all_day,
                booking_type: 'desk',
                asset_id: nearby,
                asset_name: resource.name,
                resources: [resource],
            });
        }, 50);
    }
}
