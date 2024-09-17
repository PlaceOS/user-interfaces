import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { unique } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { addSystem, PlaceSystem, updateSystem } from '@placeos/ts-client';

@Component({
    selector: 'signage-display-modal',
    template: `
        <header
            class="flex items-center justify-between border-b border-base-300 p-2"
        >
            <h1 class="p-2 font-medium text-xl">
                {{ display.id ? 'Edit' : 'New' }} Display
            </h1>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            [formGroup]="form"
            class="p-4 flex flex-col w-[32rem] max-w-[calc(100vw-2rem)]"
            *ngIf="!loading; else load_state"
        >
            <div class="flex flex-col">
                <label for="name">Name<span required>*</span></label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        name="name"
                        placeholder="Name"
                        formControlName="name"
                        required
                    />
                    <mat-error>Name is required</mat-error>
                </mat-form-field>
            </div>
            <div class="flex flex-col">
                <label for="description">Description</label>
                <mat-form-field appearance="outline" class="w-full">
                    <textarea
                        matInput
                        name="description"
                        placeholder="Description"
                        formControlName="description"
                        class="min-h-32"
                    ></textarea>
                </mat-form-field>
            </div>
            <div class="flex flex-col">
                <label for="orientation">Orientation</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-select
                        name="orientation"
                        formControlName="orientation"
                        placeholder="Unspecified"
                    >
                        <mat-option value="unspecified">
                            Unspecified
                        </mat-option>
                        <mat-option value="landscape">Landscape</mat-option>
                        <mat-option value="portrait">Portrait</mat-option>
                        <mat-option value="square">Square</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
        </main>
        <footer
            *ngIf="!loading"
            class="flex justify-end p-4 border-t border-base-200"
        >
            <button btn matRipple class="w-32" (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <main class="flex flex-col items-center justify-center p-8">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="mt-4">Saving display...</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class SignageDisplayModalComponent {
    public loading = false;
    public readonly display = this._data.display;

    public readonly form = new FormGroup({
        id: new FormControl(this._data.display?.id || ''),
        name: new FormControl(this._data.display?.display_name || '', [
            Validators.required,
        ]),
        description: new FormControl(this._data.display?.description || ''),
        orientation: new FormControl(
            this._data.display?.orientation || 'unspecified',
        ),
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { display?: PlaceSystem },
        private _dialog_ref: MatDialogRef<SignageDisplayModalComponent>,
        private _org: OrganisationService,
    ) {}

    public async save() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (this.form.invalid) return;
        this.loading = true;
        const form_value = this.form.getRawValue();
        const new_display = new PlaceSystem({
            ...form_value,
            name: `SIGNAGE ${form_value.name}`,
            display_name: form_value.name,
            signage: true,
            zones: unique(
                [
                    this._org.organisation.id,
                    this._org.region?.id,
                    this._org.building?.id,
                    ...this.display.zones,
                ].filter((_) => !!_),
            ),
        });
        const method = this.display.id
            ? updateSystem(this.display.id, new_display)
            : addSystem(new_display);
        const result = await method.toPromise();
        this._dialog_ref.close(result);
    }
}
