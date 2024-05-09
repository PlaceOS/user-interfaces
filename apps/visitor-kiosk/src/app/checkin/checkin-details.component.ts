import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CheckinStateService } from './checkin-state.service';
import { SettingsService, notifyError } from '@placeos/common';

@Component({
    selector: '[checkin-details]',
    template: `
        <form
            *ngIf="(form | async) && !loading; else load_state"
            [formGroup]="form | async"
            class="bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center w-[36rem] p-4"
        >
            <h3 class="text-2xl m-4">Confirm Details</h3>
            <div field class="flex flex-col">
                <label form="host">Host</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="host"
                        formControlName="host"
                        placeholder="Host's Email Address"
                    />
                    <mat-error>
                        The email address of your host is required
                    </mat-error>
                </mat-form-field>
            </div>
            <div field class="flex flex-col">
                <label form="name">Name</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="name"
                        formControlName="name"
                        placeholder="Full Name"
                    />
                    <mat-error>Please enter your full name</mat-error>
                </mat-form-field>
            </div>
            <div field class="flex flex-col">
                <label form="email">Email</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="email"
                        formControlName="email"
                        placeholder="Email Address"
                    />
                    <mat-error>A valid email address is required</mat-error>
                </mat-form-field>
            </div>
            <div field class="flex flex-col">
                <label form="email">Phone Number</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="phone"
                        type="tel"
                        formControlName="phone"
                        placeholder="Phone Number"
                    />
                </mat-form-field>
            </div>
            <div field class="flex flex-col">
                <label form="org">Organisation / Company</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="org"
                        formControlName="organisation"
                        placeholder="Organisation / Company"
                    />
                </mat-form-field>
            </div>
            <button next btn matRipple (click)="updateGuest()">Next</button>
            <a
                icon
                matRipple
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <app-icon>close</app-icon>
            </a>
        </form>
        <ng-template #load_state>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center"
            >
                <div
                    class="flex flex-col items-center space-y-2 bg-base-100 rounded shadow p-16"
                >
                    <mat-spinner [diameter]="48"></mat-spinner>
                    <div class="my-4 text-lg">
                        Updating data and checking in...
                    </div>
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            form {
                width: 32rem;
                max-width: calc(100vw - 2rem);
            }

            [field] {
                width: calc(100% - 2rem);
            }

            button {
                margin-bottom: 1rem;
                width: 8rem;
            }
        `,
    ],
})
export class CheckinDetailsComponent implements OnInit {
    public readonly form = this._checkin.form;

    public loading = false;

    public get induction_after_details() {
        return this._settings.get('app.induction_after_details');
    }

    constructor(
        private _checkin: CheckinStateService,
        private _router: Router,
        private _settings: SettingsService
    ) {}

    public ngOnInit(): void {
        this.form
            .pipe(first())
            .subscribe((_) => (!_ || !_.value.email ? this.previous() : ''));
    }

    public async updateGuest() {
        this.loading = true;
        await this._checkin.updateGuest();
        await this._checkin.checkinGuest()?.catch((e) => {
            // console.log(e);
            // notifyError(
            //     `Error checking in: ${
            //         e.message || e.error || e.statusText || e
            //     }`
            // );
            this.loading = false;
            throw e;
        });
        this.loading = false;
        if (this.induction_after_details) {
            this._router.navigate(['/checkin', 'induction']);
        } else {
            this._router.navigate(['/checkin', 'results']);
        }
    }

    public previous() {
        this._router.navigate(['/checkin', 'scan']);
    }
}
