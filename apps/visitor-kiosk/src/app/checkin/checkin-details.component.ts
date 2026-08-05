import { Component, computed, inject, OnInit, signal } from '@angular/core';
import {
    email,
    FormField,
    required,
    form as signalForm,
} from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';
import { settingSignal } from '@placeos/common';
import {
    IconComponent,
    TranslatePipe,
    VirtualKeyboardComponent,
} from '@placeos/components';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: '[checkin-details]',
    template: `
        @if (ready_form()) {
            <form
                autocomplete="off"
                class="bg-base-100 relative flex w-xl flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
            >
                <h3 class="m-4 text-2xl">Confirm Details</h3>
                <div field class="flex flex-col">
                    <label form="host">{{ 'FORM.HOST' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            keyboard
                            matInput
                            autocomplete="off"
                            [formField]="form.host"
                            [placeholder]="'FORM.HOST' | translate"
                        />
                        <mat-error>
                            {{ 'FORM.EMAIL_REQUIRED' | translate }}
                        </mat-error>
                    </mat-form-field>
                </div>
                <div field class="flex flex-col">
                    <label form="name">{{ 'FORM.NAME' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            keyboard
                            matInput
                            autocomplete="off"
                            [formField]="form.name"
                            [placeholder]="'FORM.NAME' | translate"
                        />
                        <mat-error>Please enter your full name</mat-error>
                    </mat-form-field>
                </div>
                <div field class="flex flex-col">
                    <label form="email">{{ 'FORM.NAME' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            keyboard
                            matInput
                            autocomplete="off"
                            [formField]="form.email"
                            [placeholder]="'FORM.EMAIL' | translate"
                        />
                        <mat-error>{{
                            'FORM.EMAIL_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div field class="flex flex-col">
                    <label form="email">{{
                        'APP.VISITOR_KIOSK.PHONE' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            keyboard
                            matInput
                            type="tel"
                            autocomplete="off"
                            [formField]="form.phone"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.PHONE' | translate
                            "
                        />
                    </mat-form-field>
                </div>
                <div field class="flex flex-col">
                    <label form="org">{{
                        'COMMON.ORGANISATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            keyboard
                            matInput
                            autocomplete="off"
                            [formField]="form.organisation"
                            [placeholder]="'COMMON.ORGANISATION' | translate"
                        />
                    </mat-form-field>
                </div>
                @if (allow_pass_number()) {
                    <div field class="flex flex-col">
                        <label form="pass">
                            {{ 'BOOKINGS.PASS_NUMBER' | translate }}
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                keyboard
                                matInput
                                autocomplete="off"
                                [formField]="form.pass_number"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_PASS_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                    </div>
                }
                <button
                    next
                    type="button"
                    btn
                    matRipple
                    (click)="updateGuest()"
                >
                    {{ 'APP.VISITOR_KIOSK.CONTINUE' | translate }}
                </button>
                <a
                    icon
                    matRipple
                    class="absolute top-0 right-0"
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
                    class="bg-base-100 flex flex-col items-center space-y-2 rounded-sm p-16 shadow-sm"
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
        TranslatePipe,
        IconComponent,
        MatProgressSpinnerModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        FormField,
        VirtualKeyboardComponent,
    ],
})
export class CheckinDetailsComponent implements OnInit {
    private _checkin = inject(CheckinStateService);
    private _router = inject(Router);

    public readonly form = signalForm(this._checkin.form, (p) => {
        required(p.host, { message: 'Host is required' });
        required(p.name, { message: 'Name is required' });
        required(p.email, { message: 'Email is required' });
        email(p.email, { message: 'Email is invalid' });
        required(p.organisation, { message: 'Organisation is required' });
    });
    public readonly loading = signal(false);
    public readonly ready_form = computed(() => !this.loading());
    public readonly induction_after_details = settingSignal(
        'induction_after_details',
        false,
    );
    public readonly allow_pass_number = settingSignal(
        'allow_pass_number',
        false,
    );
    public readonly induction_enabled = settingSignal(
        'induction_enabled',
        false,
    );
    public readonly induction_details = settingSignal('induction_details');
    public readonly allow_printing_label = settingSignal(
        'allow_printing_label',
        false,
    );
    public readonly allow_user_photo_setting = settingSignal(
        'allow_user_photo',
        false,
    );
    public readonly induction_available = computed(
        () => this.induction_enabled() && this.induction_details(),
    );
    public readonly allow_user_photo = computed(
        () => this.allow_user_photo_setting() && this.allow_printing_label(),
    );

    public async ngOnInit() {
        const form_value = this._checkin.form();
        if (this._checkin.metadata === 'registered') {
            this.updateGuest(false);
        } else {
            !form_value.email ? this.previous() : '';
        }
    }

    public async updateGuest(update = true) {
        this.loading.set(true);
        if (update) await this._checkin.updateGuest();
        if (
            this.induction_after_details() &&
            this.induction_available() &&
            this._checkin.event()?.induction !== 'accepted'
        ) {
            this.loading.set(false);
            this._router.navigate(['/checkin', 'induction']);
            return;
        }
        const result = await this._checkin
            .checkinGuest()
            .then(() => true)
            .catch(() => false);
        this.loading.set(false);
        if (!result) return;
        this._router.navigate([
            '/checkin',
            this.allow_user_photo() ? 'photo' : 'results',
        ]);
    }

    public previous() {
        this._router.navigate(['/checkin', 'scan']);
    }
}
