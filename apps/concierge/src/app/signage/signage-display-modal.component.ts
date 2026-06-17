import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { OrganisationService, unique } from '@placeos/common';
import {
    FullscreenModalShellComponent,
    TranslatePipe,
} from '@placeos/components';
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
                loading()
                    ? ('APP.CONCIERGE.SIGNAGE_DISPLAYS_SAVING' | translate)
                    : ''
            "
        >
            <form>
                <div class="flex flex-col">
                    <label for="name"
                        >{{ 'FORM.NAME' | translate
                        }}<span required>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [placeholder]="'FORM.NAME' | translate"
                            [formField]="form.name"
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
                            [placeholder]="'COMMON.DESCRIPTION' | translate"
                            [formField]="form.description"
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
                            [formField]="form.orientation"
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        FullscreenModalShellComponent,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        FormField,
        TranslatePipe,
    ],
})
export class SignageDisplayModalComponent {
    private _data = inject<{
        display?: PlaceSystem;
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<SignageDisplayModalComponent>>(MatDialogRef);
    private _org = inject(OrganisationService);

    public readonly loading = signal(false);
    public readonly display = this._data.display;

    public readonly model = signal({
        id: this._data.display?.id || '',
        name: this._data.display?.display_name || '',
        description: this._data.display?.description || '',
        orientation: this._data.display?.orientation || 'unspecified',
    });
    public readonly form = form(this.model, (p) => {
        required(p.name);
    });

    public async save() {
        this.form().markAsTouched();
        if (!this.form().valid()) return;
        this.loading.set(true);
        const form_value = this.model();
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
        const result = await method;
        this._dialog_ref.close(result);
    }
}
