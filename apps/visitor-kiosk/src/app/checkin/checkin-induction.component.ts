import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';
import {
    OrganisationService,
    SettingsService,
    notifyError,
    notifyInfo,
    notifySuccess,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { first } from 'rxjs/operators';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: '[checkin-induction]',
    template: `
        <div
            class="relative flex w-[32rem] flex-col items-center overflow-hidden rounded bg-base-100 p-4 shadow"
        >
            <p class="my-4">
                {{ 'APP.VISITOR_KIOSK.INDUCTION_MSG' | translate }}
            </p>
            <div
                class="max-h-[50vh] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap rounded border border-base-300 p-4 text-sm opacity-60"
            >
                {{ induction_details }}
            </div>
            <mat-checkbox [(ngModel)]="agree" class="my-4">
                {{ 'APP.VISITOR_KIOSK.ACCEPT_TERMS' | translate }}
            </mat-checkbox>
            <div class="flex items-center justify-center space-x-2">
                <button
                    btn
                    matRipple
                    class="clear w-32 underline"
                    (click)="decline()"
                >
                    {{ 'APP.VISITOR_KIOSK.DECLINE' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!agree"
                    (click)="continue()"
                >
                    {{ 'APP.VISITOR_KIOSK.ACCEPT' | translate }}
                </button>
            </div>
        </div>
    `,
    styles: [],
    imports: [TranslatePipe, MatRippleModule, MatCheckboxModule, FormsModule],
})
export class CheckinInductionComponent {
    private _checkin = inject(CheckinStateService);
    private _router = inject(Router);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly event = this._checkin.event;
    public agree = false;
    public loading = false;

    public get induction_details() {
        return this._settings.get('app.induction_details');
    }

    public get induction_after_details() {
        return this._settings.get('app.induction_after_details');
    }

    public get allow_user_photo() {
        return (
            this._settings.get('app.allow_user_photo') &&
            this._settings.get('app.allow_printing_label') !== false
        );
    }

    public get is_enabled() {
        return (
            this._settings.get('app.induction_enabled') &&
            this._settings.get('app.induction_details')
        );
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        const event = await this.event.pipe(first()).toPromise();
        if (!event) this._router.navigate(['/checkin']);
        if (!this.is_enabled || event.induction === 'accepted') {
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
        if (this.induction_after_details) {
            this._router.navigate([
                '/checkin',
                this.allow_user_photo ? 'photo' : 'results',
            ]);
        } else {
            this._router.navigate(['/checkin', 'details']);
        }
    }
}
