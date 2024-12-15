import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { getInvalidFields, i18n, notifyError } from '@placeos/common';
import { BuildingLevel, OrganisationService } from '@placeos/organisation';
import { addZone, authority, updateZone } from '@placeos/ts-client';

@Component({
    selector: 'level-modal',
    template: `
        <header>
            <h2>
                {{
                    (form.value.id
                        ? 'APP.CONCIERGE.LEVELS_EDIT'
                        : 'APP.CONCIERGE.LEVELS_NEW'
                    ) | translate
                }}
            </h2>
            <button btn icon mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="max-h-[65vh] overflow-y-auto overflow-x-hidden p-4"
            *ngIf="!loading; else load_state"
        >
            <form
                system
                class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]"
                *ngIf="form"
                [formGroup]="form"
            >
                <div class="flex flex-col" *ngIf="form.controls.parent_id">
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
                            [placeholder]="'COMMON.BUILDING_SELECT' | translate"
                        >
                            <mat-option
                                *ngFor="let building of building_list | async"
                                [value]="building.id"
                            >
                                {{ building.display_name || building.name }}
                            </mat-option>
                        </mat-select>
                        <mat-error>{{
                            'APP.CONCIERGE.LEVELS_BUILDING_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col" *ngIf="form.controls.display_name">
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
                <div class="flex space-x-4 pb-4" *ngIf="form.controls.parking">
                    <settings-toggle
                        class="flex-1"
                        [name]="'APP.CONCIERGE.LEVELS_HAS_PARKING' | translate"
                        formControlName="parking"
                    >
                    </settings-toggle>
                    <div class="flex-1"></div>
                </div>
                <div class="flex flex-col" *ngIf="form.controls.map_id">
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
            </form>
        </main>
        <footer
            class="p-2 flex justify-end border-t border-base-200"
            *ngIf="!loading"
        >
            <button btn class="w-32" (click)="save()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
        <ng-template #load_state>
            <div class="flex flex-col items-center justify-center w-64 h-64">
                <mat-spinner diameter="32"></mat-spinner>
                <p class="mt-4">
                    {{ 'APP.CONCIERGE.LEVELS_SAVING' | translate }}
                </p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class LevelModalComponent {
    public loading = false;
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

    constructor(
        private _org: OrganisationService,
        @Inject(MAT_DIALOG_DATA) private _data: BuildingLevel | undefined,
        private _dialog_ref: MatDialogRef<LevelModalComponent>,
    ) {}

    public async save() {
        if (!this.form.valid) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        }
        this.loading = true;
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
        this.loading = false;
    }
}
