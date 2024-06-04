import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogEvent } from '@placeos/common';
import { User } from '@placeos/users';
import { ParkingSpace } from './parking-state.service';

@Component({
    selector: 'parking-space-modal',
    template: `
        <div class="w-[28rem]">
            <header class="flex items-center justify-between px-2 w-full">
                <h2 class="px-2">{{ id ? 'Edit' : 'New' }} Parking Space</h2>
                <button *ngIf="!loading" icon matRipple mat-dialog-close>
                    <app-icon>close</app-icon>
                </button>
            </header>
            <main
                *ngIf="!loading; else load_state"
                class="p-4 flex flex-col"
                [formGroup]="form"
            >
                <label for="name">Parking Space Name/Bay Number</label>
                <mat-form-field appearance="outline">
                    <input matInput name="name" formControlName="name" />
                    <mat-error>A name is required for parking spaces</mat-error>
                </mat-form-field>
                <label for="map-id">Map ID</label>
                <mat-form-field appearance="outline">
                    <input matInput name="map-id" formControlName="map_id" />
                    <mat-error>
                        A map ID is required for parking spaces
                    </mat-error>
                </mat-form-field>
                <label for="user">Assigned User</label>
                <div class="flex items-center space-x-2">
                    <a-user-search-field
                        name="user"
                        formControlName="assigned_user"
                        class="mb-4"
                    ></a-user-search-field>
                    <button
                        btn
                        matRipple
                        class="mb-5"
                        (click)="
                            form.patchValue({
                                assigned_user: null,
                                assigned_to: null,
                                assigned_name: null
                            })
                        "
                    >
                        Clear
                    </button>
                </div>
                <label for="notes">Notes</label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="notes"
                        formControlName="notes"
                    ></textarea>
                </mat-form-field>
                <label for="map-rotation">Map Rotation</label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="map-rotation"
                        formControlName="map_rotation"
                    ></textarea>
                </mat-form-field>
                <div class="flex items-center justify-center space-x-2">
                    <button btn matRipple class="w-32 inverse" mat-dialog-close>
                        Cancel
                    </button>
                    <button btn matRipple class="w-32" (click)="postForm()">
                        Save
                    </button>
                </div>
            </main>
        </div>
        <ng-template #load_state>
            <main
                class="p-8 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>Saving parking space details...</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class ParkingSpaceModalComponent {
    @Output() public readonly event = new EventEmitter<DialogEvent>();
    public loading: boolean;

    public get id() {
        return this._data?.id || '';
    }

    public readonly form = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        map_id: new FormControl('', [Validators.required]),
        assigned_user: new FormControl<User>(null),
        assigned_to: new FormControl(''),
        assigned_name: new FormControl(''),
        notes: new FormControl(''),
        map_rotation: new FormControl(0),
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: ParkingSpace,
        private _dialog_ref: MatDialogRef<ParkingSpaceModalComponent>
    ) {
        if (_data) this.form.patchValue(_data);
    }

    public postForm() {
        if (!this.form.valid) return;
        this.loading = true;
        const value = this.form.value;
        if (value.assigned_user) {
            value.assigned_to = value.assigned_user.email;
            value.assigned_name = value.assigned_user.name;
        }
        this._dialog_ref.disableClose = true;
        this.event.emit({ reason: 'done', metadata: value });
    }
}
