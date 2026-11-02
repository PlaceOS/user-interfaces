import { Component, inject, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    AsyncHandler,
    getInvalidSignalFields,
    notifyError,
    OrganisationService,
    Region,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    TranslatePipe,
} from '@placeos/components';
import { addZone, authority, updateZone } from '@placeos/ts-client';
import { errorText } from '../ui/modal-actions';
import { TimezoneFieldComponent } from '../ui/timezone-field.component';

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
                    <label for="region-modal-display-name">
                        {{ 'FORM.DISPLAY_NAME' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            id="region-modal-display-name"
                            matInput
                            [placeholder]="'FORM.DISPLAY_NAME' | translate"
                            [formField]="form.display_name"
                        />
                    </mat-form-field>
                </div>
                <timezone-field
                    field_id="region-modal-display-name-2"
                    [field]="form.timezone"
                />
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        MatFormFieldModule,
        MatInputModule,
        TranslatePipe,
        TimezoneFieldComponent,
        FormField,
    ],
})
export class RegionModalComponent extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _data = inject<Region | undefined>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<RegionModalComponent>>(MatDialogRef);

    public readonly loading = signal(false);

    public readonly model = signal({
        id: this._data?.id || '',
        display_name: this._data?.display_name || '',
        timezone:
            this._data?.timezone ||
            Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone ||
            '',
        parent_id: this._org.organisation.id,
    });

    public readonly form = form(this.model, (p) => {
        required(p.display_name);
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
        const body = {
            ...data,
            name: `REGION ${authority().description} ${data.display_name}`,
        };
        try {
            const resp = await (data.id
                ? updateZone(data.id, body)
                : addZone(body));
            this._dialog_ref.close(resp);
        } catch (e) {
            notifyError(`Failed to save region. ${errorText(e)}`);
        } finally {
            this.loading.set(false);
        }
    }
}
