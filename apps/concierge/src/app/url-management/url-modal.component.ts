import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    AsyncHandler,
    ShortURL,
    getInvalidFields,
    notifyError,
    randomString,
    saveShortURL,
} from '@placeos/common';
import { OrganisationService, Building } from '@placeos/organisation';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { addYears, startOfDay } from 'date-fns';
import { take } from 'rxjs/operators';

@Component({
    selector: 'short-url-modal',
    template: `
        <header>
            <h2>{{ form.value.id ? 'Edit' : 'Add' }} Short URL</h2>
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
                class="flex flex-col w-[28rem] max-w-[calc(100vw-4rem)]"
                *ngIf="form"
                [formGroup]="form"
            >
                <div class="flex flex-col" *ngIf="form.controls.name">
                    <label for="name" i18n="@@nameLabel">
                        Name<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            placeholder="Name"
                            i18n-placeholder="@@namePlaceholder"
                            formControlName="name"
                        />
                    </mat-form-field>
                </div>
                <div
                    class="flex flex-col pb-4"
                    *ngIf="form.controls.description"
                >
                    <label for="description" i18n="@@nameLabel">
                        Description:
                    </label>
                    <rich-text-input
                        name="description"
                        formControlName="description"
                    ></rich-text-input>
                </div>
                <div class="flex flex-col" *ngIf="form.controls.uri">
                    <label for="uri" i18n="@@nameLabel">
                        URI<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="uri"
                            placeholder="URI"
                            i18n-placeholder="@@uriPlaceholder"
                            formControlName="uri"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col pb-4" *ngIf="form.controls.enabled">
                    <mat-checkbox formControlName="enabled">
                        Enabled
                    </mat-checkbox>
                </div>
                <!-- <div class="flex flex-col" *ngIf="form.controls.valid_from">
                    <label for="uri" i18n="@@nameLabel"> Valid From: </label>
                    <a-date-field formControlName="valid_from"></a-date-field>
                </div>
                <div class="flex flex-col" *ngIf="form.controls.valid_to">
                    <label for="uri" i18n="@@nameLabel">
                        Valid Until<span>*</span>:
                    </label>
                    <a-date-field
                        formControlName="valid_from"
                        [from]="form.value.valid_from"
                    ></a-date-field>
                </div> -->
            </form>
        </main>
        <footer
            class="p-2 flex justify-end border-t border-base-200"
            *ngIf="!loading"
        >
            <button btn class="w-32" (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <div class="flex flex-col items-center justify-center w-64 h-64">
                <mat-spinner diameter="32"></mat-spinner>
                <p class="mt-4">Saving Short URL...</p>
            </div>
        </ng-template>
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
        private _dialog_ref: MatDialogRef<ShortUrlModalComponent>
    ) {
        super();
    }

    public async ngOnInit() {}

    public async save() {
        if (!this.form.valid) {
            return notifyError(
                `Some form fields are invalid. [${getInvalidFields(
                    this.form
                ).join(', ')}]`
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
