import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsyncHandler, DialogEvent } from '@placeos/common';
import { User } from '@placeos/users';
import { ParkingUser } from './parking-state.service';

@Component({
    selector: 'parking-user-modal',
    template: `
        <div class="w-[28rem]">
            <header class="flex items-center justify-between px-2 w-full">
                <h2 class="px-2">{{ id ? 'Edit' : 'New' }} Parking User</h2>
                <button *ngIf="!loading" icon matRipple mat-dialog-close>
                    <app-icon>close</app-icon>
                </button>
            </header>
            <main
                *ngIf="!loading; else load_state"
                class="p-4 flex flex-col max-h-[65vh] overflow-auto"
                [formGroup]="form"
            >
                <div class="flex items-center space-x-2 mb-4">
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
                        <app-icon className="material-symbols-outlined">
                            person_cancel
                        </app-icon>
                    </button>
                </div>
                <label for="name">Name</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="name"
                        formControlName="name"
                        placeholder="Name"
                    />
                    <mat-error>A name is required</mat-error>
                </mat-form-field>
                <label for="email">Email</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="email"
                        formControlName="email"
                        placeholder="Email"
                    />
                    <mat-error>An email is required</mat-error>
                </mat-form-field>
                <div class="flex items-center space-x-2">
                    <div class="flex-1 w-1/3">
                        <label for="plate-number">Car Number Plate</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="plate-number"
                                formControlName="plate_number"
                                placeholder="Car Plate Number"
                            />
                        </mat-form-field>
                    </div>
                    <div class="flex-1 w-1/3">
                        <label for="car-color">Car Colour</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="car-color"
                                formControlName="car_color"
                                placeholder="Car Colour"
                            />
                        </mat-form-field>
                    </div>
                </div>
                <label for="notes">Notes</label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="notes"
                        formControlName="notes"
                        placeholder="User's Notes"
                    ></textarea>
                </mat-form-field>
                <div class="px-2 pb-2">
                    <mat-checkbox
                        name="deny"
                        formControlName="deny"
                        i18n="@@deny"
                    >
                        Deny User Parking Access
                    </mat-checkbox>
                </div>
            </main>
            <footer
                *ngIf="!loading"
                class="flex items-center justify-end space-x-2 p-2 border-t border-base-200"
            >
                <button btn matRipple class="w-32 inverse" mat-dialog-close>
                    Cancel
                </button>
                <button btn matRipple class="w-32" (click)="postForm()">
                    Save
                </button>
            </footer>
        </div>
        <ng-template #load_state>
            <main
                class="p-8 flex flex-col items-center justify-center user-y-2"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>Saving parking user details...</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class ParkingUserModalComponent extends AsyncHandler {
    @Output() public readonly event = new EventEmitter<DialogEvent>();
    public loading: boolean = false;

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

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: ParkingUser,
        private _dialog_ref: MatDialogRef<ParkingUserModalComponent>
    ) {
        super();
        if (_data) this.form.patchValue(_data);
        console.log('User Modal', this.form.value, _data);
    }

    public ngOnInit() {
        this.subscription(
            'user',
            this.form.valueChanges.subscribe((value) => {
                if (value.user) {
                    this.form.patchValue({
                        email: value.user.email,
                        name: value.user.name,
                    });
                }
            })
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
