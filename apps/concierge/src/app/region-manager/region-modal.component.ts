import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    AsyncHandler,
    getInvalidFields,
    notifyError,
    OrganisationService,
    Region,
    TIMEZONES_IANA,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { addZone, authority, updateZone } from '@placeos/ts-client';

@Component({
    selector: 'region-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.REGIONS_EDIT'
                    : 'APP.CONCIERGE.REGIONS_NEW'
                ) | translate
            "
            [loading]="
                loading() ? ('APP.CONCIERGE.REGION_SAVING' | translate) : ''
            "
            (confirm)="save()"
        >
            <form [formGroup]="form">
                @if (form.controls.display_name) {
                    <div class="flex flex-col">
                        <label for="display-name">
                            {{ 'FORM.DISPLAY_NAME' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-label>{{ 'FORM.DISPLAY_NAME' | translate }}</mat-label>
                            <input
                                matInput
                                name="display-name"
                                [placeholder]="'FORM.DISPLAY_NAME' | translate"
                                formControlName="display_name"
                            />
                        </mat-form-field>
                    </div>
                }
                <div class="flex flex-col">
                    <label for="display-name">
                        {{ 'COMMON.TIMEZONE' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-label>{{ 'COMMON.TIMEZONE' | translate }}</mat-label>
                        <icon matPrefix class="text-2xl">search</icon>
                        <input
                            matInput
                            formControlName="timezone"
                            [placeholder]="'COMMON.TIMEZONE' | translate"
                            [matAutocomplete]="auto"
                        />
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        @for (tz of filtered_timezones; track tz) {
                            <mat-option [value]="tz">{{ tz }}</mat-option>
                        }
                        @if (!timezones.length) {
                            <mat-option [disabled]="true">
                                {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                            </mat-option>
                        }
                    </mat-autocomplete>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        CommonModule,
        FullscreenModalShellComponent,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        TranslatePipe,
        IconComponent,
        ReactiveFormsModule,
    ],
})
export class RegionModalComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _data = inject<Region | undefined>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<RegionModalComponent>>(MatDialogRef);

    public readonly loading = signal(false);
    public readonly building_list = this._org.building_list;

    public timezones: string[] = [];
    public filtered_timezones: string[] = [];

    public readonly form = new FormGroup({
        id: new FormControl(this._data?.id || ''),
        display_name: new FormControl(this._data?.display_name || '', [
            Validators.required,
        ]),
        timezone: new FormControl(
            Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || '',
        ),
        parent_id: new FormControl(this._org.organisation.id),
    });

    public ngOnInit() {
        this._updateTimezoneList();
        this.subscription(
            'tz-change',
            this.form.valueChanges.subscribe(() => this._updateTimezoneList()),
        );
    }

    public async save() {
        if (!this.form.valid) {
            return notifyError(
                `Some form fields are invalid. [${getInvalidFields(
                    this.form,
                ).join(', ')}]`,
            );
        }
        const data: any = this.form.getRawValue();
        data.tags = ['region'];
        this.loading.set(true);
        const resp = await (
            data.id
                ? updateZone(data.id, {
                      ...data,
                      name: `REGION ${authority().description} ${
                          data.display_name
                      }`,
                  })
                : addZone({
                      ...data,
                      name: `REGION ${authority().description} ${
                          data.display_name
                      }`,
                  })
        )
            .toPromise()
            .catch();
        if (resp.id) this._dialog_ref.close(resp);
        this.loading.set(false);
    }

    private _updateTimezoneList() {
        const timezone = this.form?.value?.timezone || '';
        this.timezones = TIMEZONES_IANA;
        this.filtered_timezones = this.timezones.filter((_) =>
            _.toLowerCase().includes(timezone.toLowerCase()),
        );
    }
}
