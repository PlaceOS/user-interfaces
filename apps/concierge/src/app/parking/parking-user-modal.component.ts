import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncHandler, DialogEvent, User } from '@placeos/common';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { UserSearchFieldComponent } from '@placeos/form-fields';
import { ParkingUser } from './parking-state.service';

@Component({
    selector: 'parking-user-modal',
    template: `
        <div class="w-md">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 min-h-12 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
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
                            class="bg-secondary text-secondary-content h-12 w-12 min-w-12 rounded-sm"
                            matTooltip="Clear Selected User"
                            (click)="
                                form.patchValue({
                                    user: null,
                                    email: null,
                                    name: null,
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
                                    formControlName="car_colour"
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
                    class="border-base-300 flex items-center justify-end space-x-2 border-t px-4 py-2"
                >
                    <button btn matRipple class="w-32" (click)="postForm()">
                        {{ 'COMMON.SAVE' | translate }}
                    </button>
                </footer>
            }
        </div>
    `,
    styles: [``],
    imports: [
        IconComponent,
        TranslatePipe,
        MatProgressSpinnerModule,
        MatRippleModule,
        SettingsToggleComponent,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        MatTooltipModule,
        UserSearchFieldComponent,
        MatDialogModule,
    ],
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
        car_colour: new FormControl(''),
        notes: new FormControl(''),
        deny: new FormControl(false),
    });

    constructor() {
        super();
        const _data = this._data;

        if (_data) {
            this.form.patchValue({
                ..._data,
                car_colour:
                    (_data as any).car_colour || (_data as any).car_color || '',
            });
        }
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
