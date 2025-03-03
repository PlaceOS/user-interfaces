import { Component } from '@angular/core';
import { EnrolmentStateService } from './enrolment-state.service';

@Component({
    selector: 'enrolment-error',
    template: `
        <div
            class="mx-auto my-4 w-[32rem] max-w-[calc(100vw-2rem)] rounded border border-base-200 bg-warning p-4 shadow"
        >
            <h3 class="mb-4 text-center text-xl font-medium">
                Unable to continue
            </h3>
            <p [ngSwitch]="error | async" class="text-center">
                <ng-container *ngSwitchCase="'guest'">
                    Your details could not be retrieved.
                </ng-container>
                <ng-container *ngSwitchCase="'meeting'">
                    Meeting details have changed, please check your calendar for
                    updates and emails for a new enrolment link. If the meeting
                    has been moved you may not receive a new link immediately.
                </ng-container>
                <ng-container *ngSwitchCase="'link'">
                    Your link has expired, please check your calendar for
                    updates and emails for a new enrolment link.
                </ng-container>
                <ng-container *ngSwitchCase="'checked_in'">
                    You are already checked in to the meeting.
                </ng-container>
                <ng-container *ngSwitchCase="'cancelled'">
                    Meeting was cancelled, please check your calendar for
                    updates.
                </ng-container>
            </p>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class EnrolmentErrorComponent {
    public readonly error = this._state.error;

    constructor(private _state: EnrolmentStateService) {}
}
