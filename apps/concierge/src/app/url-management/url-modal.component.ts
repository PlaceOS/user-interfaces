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
import {
    AsyncHandler,
    ShortURL,
    getInvalidFields,
    notifyError,
    saveShortURL,
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
                (form.value.id
                    ? 'APP.CONCIERGE.URLS_EDIT'
                    : 'APP.CONCIERGE.URLS_ADD'
                ) | translate
            "
            (confirm)="save()"
            [loading]="
                loading() ? ('APP.CONCIERGE.URLS_SAVING' | translate) : ''
            "
        >
            <form [formGroup]="form">
                @if (form.controls.name) {
                    <div class="flex flex-col">
                        <label for="name">
                            {{ 'FORM.NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="name"
                                placeholder="Name"
                                formControlName="name"
                            />
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.uri) {
                    <div class="flex flex-col">
                        <label for="uri">
                            {{ 'APP.CONCIERGE.URLS_URI' | translate
                            }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="uri"
                                [placeholder]="
                                    'APP.CONCIERGE.URLS_URI' | translate
                                "
                                formControlName="uri"
                            />
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.description) {
                    <div class="flex flex-col">
                        <label for="description">
                            {{ 'COMMON.DESCRIPTION' | translate }}
                        </label>
                        <rich-text-input
                            name="description"
                            formControlName="description"
                            placeholder="URL description..."
                        ></rich-text-input>
                    </div>
                }
                @if (form.controls.enabled) {
                    <div class="item-center flex space-x-4 py-4">
                        <settings-toggle
                            class="flex-1"
                            [name]="'APP.CONCIERGE.URLS_ENABLED' | translate"
                            formControlName="enabled"
                        >
                        </settings-toggle>
                        <div class="flex-1"></div>
                    </div>
                }
                <!-- <div class="flex flex-col" *ngIf="form.controls.valid_from">
            <label for="uri" >{{ 'APP.CONCIERGE.VALID_FROM' | translate }}</label>
            <a-date-field formControlName="valid_from"></a-date-field>
          </div>
          <div class="flex flex-col" *ngIf="form.controls.valid_to">
            <label for="uri" >
              {{'APP.CONCIERGE.VALID_UNTIL' | translate}}<span>*</span>
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
        ReactiveFormsModule,
    ],
})
export class ShortUrlModalComponent extends AsyncHandler {
    private _data = inject<ShortURL | undefined>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<ShortUrlModalComponent>>(MatDialogRef);

    public readonly loading = signal(false);

    public readonly form = new FormGroup({
        id: new FormControl(this._data?.id || ''),
        name: new FormControl(this._data?.name || '', [Validators.required]),
        description: new FormControl(this._data?.description || '', []),
        uri: new FormControl(this._data?.uri || '', [Validators.required]),
        enabled: new FormControl(this._data?.enabled ?? true, []),
        // valid_from: new FormControl(
        //     this._data?.valid_from || startOfDay(Date.now()).valueOf(),
        //     []
        // ),
        // valid_to: new FormControl(
        //     this._data?.valid_to ||
        //         addYears(startOfDay(Date.now()).valueOf(), 10),
        //     []
        // ),
    });

    public async save() {
        if (!this.form.valid) {
            return notifyError(
                `Some form fields are invalid. [${getInvalidFields(
                    this.form,
                ).join(', ')}]`,
            );
        }
        const data: any = this.form.getRawValue();
        this.loading.set(true);
        const resp = await saveShortURL(data)
            .toPromise()
            .catch((e) => notifyError(`Error saving Short URL: ${e.message}`));
        if ((resp as any).id) this._dialog_ref.close(resp);
        this.loading.set(false);
    }
}
