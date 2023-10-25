import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';

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

    constructor(
        private _event_form: EventFormService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {}
}
