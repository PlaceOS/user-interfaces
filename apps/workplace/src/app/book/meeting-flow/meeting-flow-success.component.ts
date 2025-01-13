import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingFormService, findNearbyFeature } from '@placeos/bookings';
import {
    currentUser,
    i18n,
    notifyError,
    SettingsService,
} from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { SpacePipe } from '@placeos/spaces';
import { set } from 'date-fns';
import { take } from 'rxjs/operators';

@Component({
    selector: 'meeting-flow-success',
    template: `
        <div
            class="absolute inset-0 bg-base-100 flex flex-col z-50 overflow-auto"
        >
            <main
                class="flex-1 flex flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="text-2xl font-medium">
                    {{ 'WPA.BOOKING_CONFIRMED' | translate }}
                </h2>
                <img src="assets/icons/success.svg" />
                <p class="text-center max-w-[32rem]">
                    @let details =
                        {
                            level: level?.display_name || level?.name,
                            space: space?.display_name || space?.name,
                            date: last_event.date | date: 'mediumDate',
                            time:
                                last_event.date
                                | date
                                    : time_format +
                                          '-' +
                                          last_event.date +
                                          last_event.duration * 60 * 1000
                                | date: time_format,
                        };
                    <ng-container *ngIf="last_event?.all_day">
                        {{
                            (space
                                ? 'CALENDAR_EVENT.SUCCESS_WITH_SPACE_ALLDAY'
                                : 'CALENDAR_EVENT.SUCCESS_WITHOUT_SPACE_ALLDAY'
                            ) | translate: details
                        }}
                    </ng-container>
                    <ng-container *ngIf="!last_event?.all_day">
                        {{
                            (space
                                ? 'CALENDAR_EVENT.SUCCESS_WITH_SPACE'
                                : 'CALENDAR_EVENT.SUCCESS_WITHOUT_SPACE'
                            ) | translate: details
                        }}
                    </ng-container>
                </p>
                <p *ngIf="true">
                    {{ 'CALENDAR_EVENT.SUCCESS_WAIT_APPROVED' | translate }}
                </p>
                <div class="h-4"></div>
                <button
                    btn
                    matRipple
                    class="w-48"
                    *ngIf="space?.email && allow_desk_booking"
                    (click)="startDeskBooking()"
                >
                    {{ 'CALENDAR_EVENT.BOOK_NEARBY_DESK' | translate }}
                </button>
            </main>
            <footer
                class="sticky bottom-0 bg-base-100 p-2 w-full border-t border-base-200 mt-4 flex items-center justify-center"
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
    `,
    styles: [``],
    standalone: false
})
export class MeetingFlowSuccessComponent {
    private _space_pipe: SpacePipe = new SpacePipe(this._org);

    public get allow_desk_booking() {
        return this._settings.get('app.features').includes('desks');
    }

    public get last_event() {
        return this._event_form.last_success;
    }

    public get space() {
        return this.last_event.space;
    }

    public get level() {
        return this._org.levelWithID(this.space?.zones);
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public startDeskBooking() {
        this._router.navigate(['/book', 'new-desks', 'form']);
        setTimeout(async () => {
            this._booking_form.newForm();
            const space = await this._space_pipe.transform(
                this.space.id || this.space.email,
            );
            const level = this._org.levelWithID(space?.zones);
            this._booking_form.setOptions({ type: 'desk', zone_id: level?.id });
            this._booking_form.form.patchValue({
                date: set(this.last_event.date, {
                    hours: 8,
                    minutes: 0,
                }).valueOf(),
                duration: 10 * 60,
                all_day: this.last_event.all_day,
                booking_type: 'desk',
                user: currentUser(),
            });
            const resources = await this._booking_form.available_resources
                .pipe(take(1))
                .toPromise();
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
                date: set(this.last_event.date, {
                    hours: 8,
                    minutes: 0,
                }).valueOf(),
                duration: 10 * 60,
                all_day: this.last_event.all_day,
                booking_type: 'desk',
                asset_id: nearby,
                asset_name: resource.name,
                resources: [resource],
            });
        }, 50);
    }

    constructor(
        private _event_form: EventFormService,
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _booking_form: BookingFormService,
        private _router: Router,
    ) {}
}
