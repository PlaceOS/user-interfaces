import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';
import { nextValueFrom, SettingsService } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { first } from 'rxjs/operators';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: '[checkin-details]',
    template: `
        @if ((form | async) && !loading) {
            <form
                [formGroup]="form | async"
                class="relative flex w-xl flex-col items-center overflow-hidden rounded-sm bg-base-100 p-4 shadow-sm"
            >
                <h3 class="m-4 text-2xl">Confirm Details</h3>
                <div field class="flex flex-col">
                    <label form="host">{{
                        'APP.VISITOR_KIOSK.HOST' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="host"
                            formControlName="host"
                            [placeholder]="'APP.VISITOR_KIOSK.HOST' | translate"
                        />
                        <mat-error>
                            {{ 'APP.VISITOR_KIOSK.EMAIL_REQUIRED' | translate }}
                        </mat-error>
                    </mat-form-field>
                </div>
                <div field class="flex flex-col">
                    <label form="name">{{
                        'APP.VISITOR_KIOSK.NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            formControlName="name"
                            [placeholder]="'APP.VISITOR_KIOSK.NAME' | translate"
                        />
                        <mat-error>Please enter your full name</mat-error>
                    </mat-form-field>
                </div>
                <div field class="flex flex-col">
                    <label form="email">{{
                        'APP.VISITOR_KIOSK.NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="email"
                            formControlName="email"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.EMAIL' | translate
                            "
                        />
                        <mat-error>{{
                            'APP.VISITOR_KIOSK.EMAIL_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div field class="flex flex-col">
                    <label form="email">{{
                        'APP.VISITOR_KIOSK.PHONE' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="phone"
                            type="tel"
                            formControlName="phone"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.PHONE' | translate
                            "
                        />
                    </mat-form-field>
                </div>
                <div field class="flex flex-col">
                    <label form="org">{{
                        'APP.VISITOR_KIOSK.ORGANISATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="org"
                            formControlName="organisation"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.ORGANISATION' | translate
                            "
                        />
                    </mat-form-field>
                </div>
                @if (allow_pass_number) {
                    <div field class="flex flex-col">
                        <label form="pass">
                            {{ 'BOOKINGS.VISITOR_PASS' | translate }}
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="pass"
                                formControlName="pass_number"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_PASS_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                    </div>
                }
                <button next btn matRipple (click)="updateGuest()">
                    {{ 'APP.VISITOR_KIOSK.CONTINUE' | translate }}
                </button>
                <a
                    icon
                    matRipple
                    class="absolute right-0 top-0"
                    [routerLink]="['/welcome']"
                >
                    <icon>close</icon>
                </a>
            </form>
        } @else {
            <div
                class="absolute inset-0 flex flex-col items-center justify-center"
            >
                <div
                    class="flex flex-col items-center space-y-2 rounded-sm bg-base-100 p-16 shadow-sm"
                >
                    <mat-spinner [diameter]="48"></mat-spinner>
                    <div class="my-4 text-lg">
                        {{ 'APP.VISITOR_KIOSK.CHECKIN_LOADING' | translate }}
                    </div>
                </div>
            </div>
        }
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
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatProgressSpinnerModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
})
export class CheckinDetailsComponent implements OnInit {
    private _checkin = inject(CheckinStateService);
    private _router = inject(Router);
    private _settings = inject(SettingsService);

    public readonly form = this._checkin.form;

    public loading = false;

    public get induction_after_details() {
        return this._settings.get('app.induction_after_details');
    }

    public get allow_pass_number() {
        return this._settings.get('app.allow_pass_number');
    }

    public get allow_user_photo() {
        return (
            this._settings.get('app.allow_user_photo') &&
            this._settings.get('app.allow_printing_label') !== false
        );
    }

    public async ngOnInit() {
        const form = await nextValueFrom(this.form.pipe(first()));
        const event = await nextValueFrom(this._checkin.event.pipe(first()));
        if (this._checkin.metadata === 'registered') {
            this.updateGuest(false);
        } else {
            !form || !form.value.email ? this.previous() : '';
        }
    }

    public async updateGuest(update = true) {
        this.loading = true;
        if (update) await this._checkin.updateGuest();
        const result = await this._checkin
            .checkinGuest()
            .then(() => true)
            .catch(() => false);
        this.loading = false;
        if (!result) return;
        if (this.induction_after_details) {
            this._router.navigate(['/checkin', 'induction']);
        } else {
            this._router.navigate([
                '/checkin',
                this.allow_user_photo ? 'photo' : 'results',
            ]);
        }
    }

    public previous() {
        this._router.navigate(['/checkin', 'scan']);
    }
}
