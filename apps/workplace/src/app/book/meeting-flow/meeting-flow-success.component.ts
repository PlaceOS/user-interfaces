import { Component } from '@angular/core';
import { EventFormService } from '@placeos/events';

@Component({
    selector: 'meeting-flow-success',
    template: `
        <div class="absolute inset-0 bg-white dark:bg-neutral-600 flex flex-col z-50">
            <main
                class="flex-1 flex flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="text-2xl font-medium">{{ "WPA.BOOKING_CONFIRMED" | translate }}</h2>
                <img src="assets/icons/success.svg" />
                <p class="text-center max-w-[512px]" i18n>
                    Your
                    <span *ngIf="space">
                        room booking for
                        {{ space?.level.display_name || space?.level.name }},
                        {{ space?.display_name || space?.name }}
                    </span>
                    <span *ngIf="!space">meeting</span> has been successfully
                    booked for the {{ last_event.date | date: 'mediumDate' }} at
                    {{ last_event.date | date: 'shortTime' }}-{{
                        last_event.date + last_event.duration * 60 * 1000
                            | date: 'shortTime'
                    }}.
                </p>
            </main>
            <footer class="p-2 w-full border-t border-gray-200 dark:bg-neutral-500 mt-4 flex items-center justify-center">
                <a button mat-button class="w-full max-w-[512px]" [routerLink]="['/']">
                    {{ "WPA.BOOKING_DONE_CONTINUE" | translate }}
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

    constructor(private _event_form: EventFormService) {}
}
