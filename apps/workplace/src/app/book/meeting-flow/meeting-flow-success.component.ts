import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingFormService, findNearbyFeature } from '@placeos/bookings';
import { currentUser, notifyError, SettingsService } from '@placeos/common';
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
                <p class="text-center max-w-[32rem]" i18n>
                    Your
                    <span *ngIf="space">
                        room booking for
                        {{ level?.display_name || level?.name
                        }}<span *ngIf="level">,</span>
                        {{ space?.display_name || space?.name }}
                    </span>
                    <span *ngIf="!space">meeting</span> has been successfully
                    booked for {{ last_event.date | date: 'mediumDate'
                    }}<span *ngIf="!last_event?.all_day">
                        at {{ last_event.date | date: time_format }}-{{
                            last_event.date + last_event.duration * 60 * 1000
                                | date: time_format
                        }}</span
                    >.
                </p>
                <p *ngIf="true">
                    Please allow up to 5 minutes for you booking to be approved.
                </p>
                <div class="h-4"></div>
                <button
                    btn
                    matRipple
                    class="w-48"
                    *ngIf="space?.email && allow_desk_booking"
                    (click)="startDeskBooking()"
                >
                    Book nearby desk
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
                    {{ 'WPA.BOOKING_DONE_CONTINUE' | translate }}
                </a>
            </footer>
        </div>
    `,
    styles: [``],
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
            if (!nearby) return notifyError('No available desks nearby');
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
