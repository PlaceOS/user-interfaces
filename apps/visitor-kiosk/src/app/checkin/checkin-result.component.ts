import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CheckinStateService } from './checkin-state.service';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'checkin-results',
    template: `
        <div
            class="bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center my-4 p-4 mx-auto space-y-4"
            *ngIf="event | async"
        >
            <h3 class="text-xl">You are checked in!</h3>
            <p class="text-center">
                Welcome, you have a meeting at
                {{ (event | async)?.date || '' | date: 'mediumDate' }}
                with
                {{
                    (event | async).organiser?.name ||
                        (event | async).user_name ||
                        ''
                }}.<br />
                {{
                    (event | async).organiser?.name ||
                        (event | async).user_name ||
                        ''
                }}
                has been notified and will be with you shortly.&nbsp;
            </p>
            <p *ngIf="!(event | async)?.can_access_lift">
                Please wait in the lobby.
            </p>
            <p *ngIf="(event | async)?.can_access_lift">
                Please use the vistor access lift over there.
            </p>
            <button btn matRipple class="w-32" (click)="next()">Done</button>
        </div>
    `,
    styles: [
        `
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
        `,
    ],
})
export class CheckinResultsComponent implements OnInit {
    public readonly event = this._checkin.event;
    public readonly guest = this._checkin.guest;

    constructor(
        private _checkin: CheckinStateService,
        private _settings: SettingsService,
        private _router: Router
    ) {}

    public ngOnInit(): void {
        this.event.pipe(first()).subscribe((_) => (!_ ? this.previous() : ''));
    }

    public previous(): void {
        this._router.navigate(['/checkin']);
    }

    public next(): void {
        // this._settings.get('app.allow_beverages')
        //     ? this._router.navigate(['/checkin', 'preferences']) :
        this._router.navigate(['/welcome']);
    }
}
