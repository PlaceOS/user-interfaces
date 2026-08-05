import { Component, inject, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    AsyncHandler,
    getInvalidSignalFields,
    notifyError,
    saveShortURL,
    ShortURL,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { RichTextInputComponent } from '@placeos/form-fields';

@Component({
    selector: 'short-url-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.URLS_EDIT'
                    : 'APP.CONCIERGE.URLS_ADD'
                ) | translate
            "
            (confirm)="save()"
            [loading]="
                loading() ? ('APP.CONCIERGE.URLS_SAVING' | translate) : ''
            "
        >
            <form>
                <div class="flex flex-col">
                    <label for="name">
                        {{ 'FORM.NAME' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            placeholder="Name"
                            [formField]="form.name"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="uri">
                        {{ 'APP.CONCIERGE.URLS_URI' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'APP.CONCIERGE.URLS_URI' | translate"
                            [formField]="form.uri"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="description">
                        {{ 'COMMON.DESCRIPTION' | translate }}
                    </label>
                    <rich-text-input
                        [formField]="form.description"
                        placeholder="URL description..."
                    ></rich-text-input>
                </div>
                <div class="item-center flex space-x-4 py-4">
                    <settings-toggle
                        class="flex-1"
                        [label]="'COMMON.ENABLED' | translate"
                        [formField]="form.enabled"
                    >
                    </settings-toggle>
                    <div class="flex-1"></div>
                </div>
                <!-- <div class="flex flex-col" *ngIf="form.controls.valid_from">
            <label for="uri" >{{ 'APP.CONCIERGE.VALID_FROM' | translate }}</label>
            <a-date-field formControlName="valid_from"></a-date-field>
          </div>
          <div class="flex flex-col" *ngIf="form.controls.valid_to">
            <label for="uri" >
              {{'COMMON.VALID_UNTIL' | translate}}<span>*</span>
            </label>
            <a-date-field
              formControlName="valid_until"
              [from]="form.value.valid_from"
            ></a-date-field>
          </div> -->
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        SettingsToggleComponent,
        RichTextInputComponent,
        MatFormFieldModule,
        MatInputModule,
        TranslatePipe,
        FormField,
    ],
})
export class ShortUrlModalComponent extends AsyncHandler {
    private _data = inject<ShortURL | undefined>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<ShortUrlModalComponent>>(MatDialogRef);

    public readonly loading = signal(false);

    public readonly model = signal({
        id: this._data?.id || '',
        name: this._data?.name || '',
        description: this._data?.description || '',
        uri: this._data?.uri || '',
        enabled: this._data?.enabled ?? true,
    });

    public readonly form = form(this.model, (p) => {
        required(p.name);
        required(p.uri);
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
        this.loading.set(true);
        const resp = await saveShortURL(data).catch((e) =>
            notifyError(`Error saving Short URL: ${e.message}`),
        );
        if ((resp as any).id) this._dialog_ref.close(resp);
        this.loading.set(false);
    }
}
