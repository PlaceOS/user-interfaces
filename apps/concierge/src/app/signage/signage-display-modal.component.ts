import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { unique } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { addSystem, PlaceSystem, updateSystem } from '@placeos/ts-client';

@Component({
    selector: 'signage-display-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (display.id
                    ? 'APP.CONCIERGE.SIGNAGE_DISPLAYS_EDIT'
                    : 'APP.CONCIERGE.SIGNAGE_DISPLAYS_NEW'
                ) | translate
            "
            (confirm)="save()"
            [loading]="
                loading
                    ? ('APP.CONCIERGE.SIGNAGE_DISPLAYS_SAVING' | translate)
                    : ''
            "
        >
            <form [formGroup]="form">
                <div class="flex flex-col">
                    <label for="name"
                        >{{ 'FORM.NAME' | translate
                        }}<span required>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="name"
                            [placeholder]="'FORM.NAME' | translate"
                            formControlName="name"
                            required
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            name="description"
                            [placeholder]="'COMMON.DESCRIPTION' | translate"
                            formControlName="description"
                            class="min-h-32"
                        ></textarea>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="orientation">{{
                        'APP.CONCIERGE.SIGNAGE_ORIENTATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            name="orientation"
                            formControlName="orientation"
                            [placeholder]="
                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                    | translate
                            "
                        >
                            <mat-option value="unspecified">
                                {{
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                        | translate
                                }}
                            </mat-option>
                            <mat-option value="landscape">{{
                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_LANDSCAPE'
                                    | translate
                            }}</mat-option>
                            <mat-option value="portrait">{{
                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_PORTRAIT'
                                    | translate
                            }}</mat-option>
                            <mat-option value="square">{{
                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_SQUARE'
                                    | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </form>
        </fullscreen-modal-shell>
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
