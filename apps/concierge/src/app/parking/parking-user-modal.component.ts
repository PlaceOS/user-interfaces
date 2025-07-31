import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AsyncHandler, DialogEvent } from '@placeos/common';
import { User } from '@placeos/users';
import { ParkingUser } from './parking-state.service';

@Component({
    selector: 'parking-user-modal',
    template: `
        <div class="w-[28rem]">
            <header class="flex w-full items-center justify-between px-2">
                <h2 class="px-2">
                    {{
                        (id
                            ? 'APP.CONCIERGE.PARKING_USER_EDIT'
                            : 'APP.CONCIERGE.PARKING_USER_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading) {
                <main
                    class="flex max-h-[65vh] flex-col overflow-auto p-4"
                    [formGroup]="form"
                >
                    <div class="mb-4 flex space-x-2">
                        <a-user-search-field
                            name="user"
                            formControlName="user"
                            class="flex-1"
                        ></a-user-search-field>
                        <button
                            icon
                            matRipple
                            class="h-12 w-12 min-w-12 rounded bg-secondary text-secondary-content"
                            matTooltip="Clear Selected User"
                            (click)="
                                form.patchValue({
                                    user: null,
                                    email: null,
                                    name: null,
                                    phone: null,
                                })
                            "
                        >
                            <icon className="material-symbols-outlined">
                                person_cancel
                            </icon>
                        </button>
                    </div>
                    <label for="name">{{ 'FORM.NAME' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            formControlName="name"
                            placeholder="Name"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <label for="email">{{ 'FORM.EMAIL' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="email"
                            formControlName="email"
                            [placeholder]="'FORM.EMAIL' | translate"
                        />
                        <mat-error>{{
                            'FORM.EMAIL_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="plate-number">{{
                                'EXPLORE.PARKING_PLATE_NUMBER' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="plate-number"
                                    formControlName="plate_number"
                                    [placeholder]="
                                        'EXPLORE.PARKING_PLATE_NUMBER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label for="car-color">{{
                                'APP.CONCIERGE.PARKING_CAR_COLOUR' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="car-color"
                                    formControlName="car_color"
                                    [placeholder]="
                                        'APP.CONCIERGE.PARKING_CAR_COLOUR'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            name="notes"
                            formControlName="notes"
                            [placeholder]="'FORM.NOTES' | translate"
                        ></textarea>
                    </mat-form-field>
                    <div class="mb-4 flex items-center">
                        <settings-toggle
                            class="flex-1"
                            [name]="
                                'APP.CONCIERGE.PARKING_USER_DENY_PLACEHOLER'
                                    | translate
                            "
                            formControlName="deny"
                        >
                        </settings-toggle>
                    </div>
                </main>
            } @else {
                <main
                    class="user-y-2 flex flex-col items-center justify-center p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.PARKING_USER_SAVE' | translate }}</p>
                </main>
            }
            @if (!loading) {
                <footer
                    class="flex items-center justify-end space-x-2 border-t border-base-200 p-2"
                >
                    <button btn matRipple class="w-32" (click)="postForm()">
                        {{ 'COMMON.SAVE' | translate }}
                    </button>
                </footer>
            }
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class ParkingUserModalComponent extends AsyncHandler implements OnInit {
    private _data = inject<ParkingUser>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<ParkingUserModalComponent>>(MatDialogRef);

    @Output() public readonly event = new EventEmitter<DialogEvent>();
    public loading = false;

    public get id() {
        return this._data?.id || '';
    }

    public readonly form = new FormGroup({
        id: new FormControl(''),
        user: new FormControl<User>(null),
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        plate_number: new FormControl(''),
        car_color: new FormControl(''),
        notes: new FormControl(''),
        deny: new FormControl(false),
    });

    constructor() {
        super();
        const _data = this._data;

        if (_data) this.form.patchValue(_data);
    }

    public ngOnInit() {
        this.subscription(
            'user',
            this.form.valueChanges.subscribe((value) => {
                if (
                    value.user?.id &&
                    value.user?.email !== this.form.value.email
                ) {
                    this.form.patchValue({
                        email: value.user.email,
                        name: value.user.name,
                    });
                }
            }),
        );
    }

    public postForm() {
        if (!this.form.valid) return;
        this.loading = true;
        const value = this.form.value;
        if (value.user) {
            value.email = value.user.email;
            value.name = value.user.name;
        }
        this._dialog_ref.disableClose = true;
        this.event.emit({ reason: 'done', metadata: value });
    }
}
