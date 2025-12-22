import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    BuildingLevel,
    getInvalidFields,
    i18n,
    notifyError,
    OrganisationService,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { addZone, authority, updateZone } from '@placeos/ts-client';

@Component({
    selector: 'level-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.LEVELS_EDIT'
                    : 'APP.CONCIERGE.LEVELS_NEW'
                ) | translate
            "
            [loading]="
                loading() ? ('APP.CONCIERGE.LEVELS_SAVING' | translate) : ''
            "
            (confirm)="save()"
        >
            <form system [formGroup]="form">
                @if (form.controls.parent_id) {
                    <div class="flex flex-col">
                        <label
                            for="zone"
                            [class.error]="
                                form.controls.parent_id.invalid &&
                                form.controls.parent_id.touched
                            "
                        >
                            {{ 'RESOURCE.BUILDING' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                formControlName="parent_id"
                                [placeholder]="
                                    'COMMON.BUILDING_SELECT' | translate
                                "
                            >
                                @for (
                                    building of building_list | async;
                                    track building
                                ) {
                                    <mat-option [value]="building.id">
                                        {{
                                            building.display_name ||
                                                building.name
                                        }}
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-error>{{
                                'APP.CONCIERGE.LEVELS_BUILDING_REQUIRED'
                                    | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.display_name) {
                    <div class="flex flex-col">
                        <label for="display-name">{{
                            'FORM.DISPLAY_NAME' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="display-name"
                                [placeholder]="'FORM.DISPLAY_NAME' | translate"
                                formControlName="display_name"
                            />
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.parking) {
                    <div class="flex space-x-4 pb-4">
                        <settings-toggle
                            class="flex-1"
                            [name]="
                                'APP.CONCIERGE.LEVELS_HAS_PARKING' | translate
                            "
                            formControlName="parking"
                        >
                        </settings-toggle>
                        <div class="flex-1"></div>
                    </div>
                }
                @if (form.controls.map_id) {
                    <div class="flex flex-col">
                        <label for="map-id">{{
                            'APP.CONCIERGE.LEVELS_MAP_URL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="map-id"
                                [placeholder]="
                                    'APP.CONCIERGE.LEVELS_MAP_URL_PLACEHOLDER'
                                        | translate
                                "
                                formControlName="map_id"
                            />
                        </mat-form-field>
                    </div>
                }
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        CommonModule,
        FullscreenModalShellComponent,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        SettingsToggleComponent,
        MatSelectModule,
        TranslatePipe,
    ],
})
export class LevelModalComponent {
    private _org = inject(OrganisationService);
    private _data = inject<BuildingLevel | undefined>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<LevelModalComponent>>(MatDialogRef);

    public readonly loading = signal(false);
    public readonly building_list = this._org.building_list;

    public readonly form = new FormGroup({
        id: new FormControl(this._data?.id || ''),
        display_name: new FormControl(this._data?.display_name || '', [
            Validators.required,
        ]),
        parent_id: new FormControl(this._data?.parent_id || '', [
            Validators.required,
        ]),
        map_id: new FormControl(this._data?.map_id || '', [
            Validators.required,
        ]),
        parking: new FormControl(
            this._data?.tags?.includes('parking') || false,
        ),
    });

    public async save() {
        if (!this.form.valid) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        }
        this.loading.set(true);
        const data: any = this.form.getRawValue();
        data.tags = data.parking ? ['level', 'parking'] : ['level'];
        const resp = await (
            data.id
                ? updateZone(data.id, {
                      ...data,
                      name: `LEVEL ${authority().description} ${data.display_name}`,
                  })
                : addZone({
                      ...data,
                      name: `LEVEL ${authority().description} ${data.display_name}`,
                  })
        )
            .toPromise()
            .catch();
        if (resp.id) this._dialog_ref.close(resp);
        this.loading.set(false);
    }
}
