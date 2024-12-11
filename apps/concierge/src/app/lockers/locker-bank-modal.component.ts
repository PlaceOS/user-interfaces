import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LockerBank } from '@placeos/bookings';
import { DialogEvent, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { map } from 'rxjs/operators';

@Component({
    selector: 'locker-bank-modal',
    template: `
        <div class="w-[28rem]">
            <header class="flex items-center justify-between px-2 w-full">
                <h2 class="px-2">{{ id ? 'Edit' : 'New' }} Locker Bank</h2>
                <button *ngIf="!loading" icon matRipple mat-dialog-close>
                    <app-icon>close</app-icon>
                </button>
            </header>
            <main
                *ngIf="!loading; else load_state"
                class="p-4 flex flex-col"
                [formGroup]="form"
            >
                <label for="name">Level</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-select
                        [ngModel]="form.value.zones[0]"
                        (ngModelChange)="form.patchValue({ zones: [$event] })"
                        [ngModelOptions]="{ standalone: true }"
                    >
                        <mat-option
                            *ngFor="let level of levels | async"
                            [value]="level.id"
                        >
                            <div class="flex flex-col-reverse">
                                <div
                                    class="text-xs opacity-30"
                                    *ngIf="use_region"
                                >
                                    {{
                                        (level.parent_id | building)
                                            ?.display_name
                                    }}
                                    <span class="opacity-0"> - </span>
                                </div>
                                <div>
                                    {{ level.display_name || level.name }}
                                </div>
                            </div>
                        </mat-option>
                    </mat-select>
                </mat-form-field>
                <label for="name">Locker Bank Name</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="name"
                        formControlName="name"
                        placeholder="Name"
                    />
                    <mat-error>A name is required for a locker bank</mat-error>
                </mat-form-field>
                <label for="map-id">Map ID</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="map-id"
                        formControlName="map_id"
                        placeholder="Map ID"
                    />
                    <mat-error>
                        A map ID is required for a locker bank
                    </mat-error>
                </mat-form-field>
                <label for="notes">Notes</label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="notes"
                        placeholder="Locker Bank Notes"
                        formControlName="notes"
                    ></textarea>
                </mat-form-field>
                <div class="flex items-center justify-center space-x-2">
                    <button btn matRipple class="w-32 inverse" mat-dialog-close>
                        Cancel
                    </button>
                    <button btn matRipple class="w-32" (click)="postForm()">
                        Save
                    </button>
                </div>
            </main>
        </div>
        <ng-template #load_state>
            <main
                class="p-8 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>Saving locker bank details...</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class LockerBankModalComponent {
    @Output() public readonly event = new EventEmitter<DialogEvent>();
    public loading: boolean;
    /** List of available locker levels for the current building */
    public levels = this._org.level_list.pipe(
        map((_) => {
            if (!this._settings.get('app.use_region')) {
                const blds = this._org.buildingsForRegion();
                const bld_ids = blds.map((bld) => bld.id);
                const list = _.filter((lvl) => bld_ids.includes(lvl.parent_id));
                list.map((lvl) => ({
                    ...lvl,
                    display_name: `${
                        blds.find((_) => _.id === lvl.parent_id)?.display_name
                    } - ${lvl.display_name}`,
                }));
                if (!this.form.value.zones?.length) {
                    this.form.patchValue({ zones: [list[0].id] });
                }
                return list;
            }
            return _.filter((lvl) => lvl.parent_id === this._org.building.id);
        }),
    );

    public get id() {
        return this._data?.id || '';
    }

    public readonly form = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        map_id: new FormControl('', [Validators.required]),
        notes: new FormControl(''),
        height: new FormControl(3),
        zones: new FormControl([]),
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: LockerBank,
        private _dialog_ref: MatDialogRef<LockerBankModalComponent>,
        private _org: OrganisationService,
        private _settings: SettingsService,
    ) {
        if (_data) this.form.patchValue(_data);
    }

    public postForm() {
        if (!this.form.valid) return;
        this.loading = true;
        const value = { ...this.form.getRawValue() };
        this._dialog_ref.disableClose = true;
        this.event.emit({ reason: 'done', metadata: value });
    }
}
