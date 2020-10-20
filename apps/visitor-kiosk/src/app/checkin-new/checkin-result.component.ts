import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: 'checkin-results',
    template: `
        <div
            class="bg-white rounded shadow overflow-hidden relative flex flex-col items-center my-4 p-4 mx-auto"
            *ngIf="(event | async)"
        >
            <h3 class="text-xl">You are checked in!</h3>
            <p class="text-center my-4">
                Welcome, you have a meeting at
                {{ (event | async)?.event_start || '' | date: 'shortDate' }}
                with {{ (event | async).organiser?.name || '' }}.<br>
                {{ (event | async).organiser?.name || '' }} has been notified
                and will be with you shortly.&nbsp;
                <ng-container *ngIf="!(event | async)?.can_access_lift">
                    Please wait in the lobby.
                </ng-container>
                <ng-container *ngIf="(event | async)?.can_access_lift">
                    Please use the vistor access lift over there.
                </ng-container>
            </p>
            <a button mat-button [routerLink]="['/checkin', 'preferences']">
                Done
            </a>
        </div>
    `,
    styles: [`
        :host {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
        }

        :host > div {
            width: 32rem;
            max-width: calc(100vw - 2rem);
        }

        [button] {
            min-width: 8rem;
        }
    `],
})
export class CheckinResultsComponent {
    public readonly event = this._checkin.event;
    public readonly guest = this._checkin.guest;

    constructor(
        private _checkin: CheckinStateService,
        private _router: Router
    ) {}

    public ngOnInit(): void {
        this.event.pipe(first()).subscribe(_ => !_ ? this.previous() : '')
    }

    public previous(): void {
        this._router.navigate(['/checkin']);
    }
}
