import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    AsyncHandler,
    TIMEZONES_IANA,
    getInvalidFields,
    notifyError,
} from '@placeos/common';
import { Region, OrganisationService } from '@placeos/organisation';
import { addZone, authority, updateZone } from '@placeos/ts-client';

@Component({
    selector: 'region-modal',
    template: `
        <header>
            <h2>{{ form.value.id ? 'Edit' : 'Add' }} Region</h2>
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
                <div class="flex flex-col" *ngIf="form.controls.display_name">
                    <label for="display-name" i18n="@@displayNameLabel">
                        Display Name:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="display-name"
                            placeholder="Display Name"
                            i18n-placeholder="@@displayNamePlaceholder"
                            formControlName="display_name"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="display-name" i18n="@@displayNameLabel">
                        Timezone:
                    </label>
                    <mat-form-field appearance="outline">
                        <app-icon matPrefix class="text-2xl">search</app-icon>
                        <input
                            matInput
                            formControlName="timezone"
                            placeholder="Building timezone"
                            [matAutocomplete]="auto"
                        />
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        <mat-option
                            *ngFor="let tz of filtered_timezones"
                            [value]="tz"
                            >{{ tz }}</mat-option
                        >
                        <mat-option *ngIf="!timezones.length" [disabled]="true">
                            No matching timezones
                        </mat-option>
                    </mat-autocomplete>
                </div>
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
                <p class="mt-4">Saving region...</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class RegionModalComponent extends AsyncHandler {
    public loading = false;
    public readonly building_list = this._org.building_list;

    public timezones: string[] = [];
    public filtered_timezones: string[] = [];

    public readonly form = new FormGroup({
        id: new FormControl(this._data?.id || ''),
        display_name: new FormControl(this._data?.display_name || '', [
            Validators.required,
        ]),
        timezone: new FormControl(
            Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || ''
        ),
        parent_id: new FormControl(this._org.organisation.id),
    });

    constructor(
        private _org: OrganisationService,
        @Inject(MAT_DIALOG_DATA) private _data: Region | undefined,
        private _dialog_ref: MatDialogRef<RegionModalComponent>
    ) {
        super();
    }

    public ngOnInit() {
        this._updateTimezoneList();
        this.subscription(
            'tz-change',
            this.form.valueChanges.subscribe(
                ({ timezone }) =>
                    (this.filtered_timezones = this.timezones.filter((_) =>
                        _.toLowerCase().includes(timezone.toLowerCase())
                    ))
            )
        );
    }

    public async save() {
        if (!this.form.valid) {
            return notifyError(
                `Some form fields are invalid. [${getInvalidFields(
                    this.form
                ).join(', ')}]`
            );
        }
        const data: any = this.form.getRawValue();
        data.tags = ['region'];
        this.loading = true;
        const resp = await (data.id
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
        this.loading = false;
    }

    private _updateTimezoneList() {
        const timezone = this.form?.value?.timezone || '';
        this.timezones = TIMEZONES_IANA;
        this.filtered_timezones = this.timezones.filter((_) =>
            _.toLowerCase().includes(timezone.toLowerCase())
        );
    }
}
