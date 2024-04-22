import { Component } from '@angular/core';
import { CheckinStateService } from './checkin-state.service';
import { Router } from '@angular/router';
import { SettingsService, notifyError, notifySuccess } from '@placeos/common';
import { first } from 'rxjs/operators';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: '[checkin-induction]',
    template: `
        <div
            class="relative bg-base-100 rounded shadow overflow-hidden flex flex-col items-center w-[32rem] p-4"
        >
            <p class="mt-8 mb-4">
                Please read the induction information below before proceeding.
            </p>
            <div
                class="rounded bg-base-200 w-full p-4 text-sm overflow-y-auto overflow-x-hidden max-h-[50vh] whitespace-pre-wrap"
            >
                {{ induction_details }}
            </div>
            <mat-checkbox [(ngModel)]="agree" class="my-4">
                I agree
            </mat-checkbox>
            <button
                btn
                matRipple
                class="w-32"
                [disabled]="!agree"
                (click)="continue()"
            >
                Continue
            </button>
            <button
                icon
                matRipple
                class="absolute top-1 right-1"
                (click)="previous()"
            >
                <app-icon>close</app-icon>
            </button>
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

    constructor(
        private _checkin: CheckinStateService,
        private _router: Router,
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {}

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        const event = await this.event.pipe(first()).toPromise();
        if (!event) this.previous();
        if (!this._settings.get('app.induction_details') || event.induction) {
            this._router.navigate(['/checkin', 'details']);
        }
    }

    public previous(): void {
        this._router.navigate(['/checkin']);
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
