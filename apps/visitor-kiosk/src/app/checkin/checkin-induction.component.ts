import { Component } from '@angular/core';
import { CheckinStateService } from './checkin-state.service';
import { Router } from '@angular/router';
import {
    SettingsService,
    notifyError,
    notifyInfo,
    notifySuccess,
} from '@placeos/common';
import { first } from 'rxjs/operators';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: '[checkin-induction]',
    template: `
        <div
            class="relative bg-base-100 rounded shadow overflow-hidden flex flex-col items-center w-[32rem] p-4"
        >
            <p class="my-4">
                Please read the induction information below before proceeding
            </p>
            <div
                class="rounded border border-base-300 w-full p-4 opacity-60 text-sm overflow-y-auto overflow-x-hidden max-h-[50vh] whitespace-pre-wrap"
            >
                {{ induction_details }}
            </div>
            <mat-checkbox [(ngModel)]="agree" class="my-4">
                I agree
            </mat-checkbox>
            <div class="flex items-center justify-center space-x-2">
                <button
                    btn
                    matRipple
                    class="w-32 clear underline"
                    (click)="decline()"
                >
                    Decline
                </button>
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!agree"
                    (click)="continue()"
                >
                    Accept
                </button>
            </div>
        </div>
    `,
    styles: [],
})
export class CheckinInductionComponent {
    public readonly event = this._checkin.event;
    public agree = false;
    public loading = false;

    public get induction_details() {
        return this._settings.get('app.induction_details');
    }

    public get induction_after_details() {
        return this._settings.get('app.induction_after_details');
    }

    public get is_enabled() {
        return (
            this._settings.get('app.induction_enabled') &&
            this._settings.get('app.induction_details')
        );
    }

    constructor(
        private _checkin: CheckinStateService,
        private _router: Router,
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {}

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        const event = await this.event.pipe(first()).toPromise();
        if (!event) this._router.navigate(['/checkin']);
        if (!this.is_enabled || event.induction) {
            if (this.induction_after_details) {
                this._router.navigate(['/checkin', 'results']);
            } else {
                this._router.navigate(['/checkin', 'details']);
            }
        }
    }

    public async decline() {
        this.loading = true;
        await this._checkin.declineInduction().catch((err) => {
            notifyError('Error declining induction', err);
            throw err;
        });
        this._checkin.setError('You have declined the induction.');
        notifyInfo('Induction declined successfully');
        this._router.navigate(['/checkin', 'error']);
    }

    public async continue() {
        this.loading = true;
        await this._checkin.completeInduction().catch((err) => {
            notifyError('Error completing induction', err);
            throw err;
        });
        notifySuccess('Induction completed successfully');
        this._router.navigate(['/checkin', 'details']);
    }
}
