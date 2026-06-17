import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    AsyncHandler,
    getInvalidSignalFields,
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
                (model().id
                    ? 'APP.CONCIERGE.REGIONS_EDIT'
                    : 'APP.CONCIERGE.REGIONS_NEW'
                ) | translate
            "
            [loading]="
                loading() ? ('APP.CONCIERGE.REGION_SAVING' | translate) : ''
            "
            (confirm)="save()"
        >
            <form>
                <div class="flex flex-col">
                    <label for="display-name">
                        {{ 'FORM.DISPLAY_NAME' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'FORM.DISPLAY_NAME' | translate"
                            [formField]="form.display_name"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="display-name">
                        {{ 'COMMON.TIMEZONE' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <icon matPrefix class="text-2xl">search</icon>
                        <input
                            matInput
                            [formField]="form.timezone"
                            [placeholder]="'COMMON.TIMEZONE' | translate"
                            [matAutocomplete]="auto"
                        />
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        @for (tz of filtered_timezones(); track tz) {
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        FullscreenModalShellComponent,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        TranslatePipe,
        IconComponent,
        FormField,
    ],
})
export class RegionModalComponent extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _data = inject<Region | undefined>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<RegionModalComponent>>(MatDialogRef);

    public readonly loading = signal(false);
    public readonly timezones = TIMEZONES_IANA;

    public readonly model = signal({
        id: this._data?.id || '',
        display_name: this._data?.display_name || '',
        timezone: Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || '',
        parent_id: this._org.organisation.id,
    });

    public readonly form = form(this.model, (p) => {
        required(p.display_name);
    });

    public readonly filtered_timezones = computed(() => {
        const timezone = (this.model().timezone || '').toLowerCase();
        return this.timezones.filter((_) => _.toLowerCase().includes(timezone));
    });

    public async save() {
        this.form().markAsTouched();
        if (!this.form().valid()) {
            return notifyError(
                `Some form fields are invalid. [${getInvalidSignalFields(
                    this.form,
                    this.model,
                ).join(', ')}]`,
            );
        }
        const data: any = this.model();
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
        ).catch();
        if (resp.id) this._dialog_ref.close(resp);
        this.loading.set(false);
    }
}
