import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    AsyncHandler,
    ShortURL,
    getInvalidFields,
    notifyError,
    saveShortURL,
} from '@placeos/common';

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
            [loading]="loading ? ('APP.CONCIERGE.URLS_SAVING' | translate) : ''"
        >
            <form [formGroup]="form">
                <div class="flex flex-col" *ngIf="form.controls.name">
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
                <div class="flex flex-col" *ngIf="form.controls.uri">
                    <label for="uri">
                        {{ 'APP.CONCIERGE.URLS_URI' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="uri"
                            [placeholder]="'APP.CONCIERGE.URLS_URI' | translate"
                            formControlName="uri"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col" *ngIf="form.controls.description">
                    <label for="description">
                        {{ 'COMMON.DESCRIPTION' | translate }}
                    </label>
                    <rich-text-input
                        name="description"
                        formControlName="description"
                    ></rich-text-input>
                </div>
                <div
                    class="flex item-center space-x-4 pb-4"
                    *ngIf="form.controls.enabled"
                >
                    <settings-toggle
                        class="flex-1"
                        [name]="'APP.CONCIERGE.URLS_ENABLED' | translate"
                        formControlName="enabled"
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
})
export class ShortUrlModalComponent extends AsyncHandler {
    public loading = false;

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

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: ShortURL | undefined,
        private _dialog_ref: MatDialogRef<ShortUrlModalComponent>,
    ) {
        super();
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
        this.loading = true;
        const resp = await saveShortURL(data)
            .toPromise()
            .catch((e) => notifyError(`Error saving Short URL: ${e.message}`));
        if ((resp as any).id) this._dialog_ref.close(resp);
        this.loading = false;
    }
}
