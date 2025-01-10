import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LockerBank } from '@placeos/bookings';
import { DialogEvent, SettingsService, unique } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import {
    addChipItem,
    removeChipItem,
} from 'libs/form-fields/src/lib/item-list-field.component';
import { map } from 'rxjs/operators';

@Component({
    selector: 'locker-bank-modal',
    template: `
        <div class="w-[32rem]">
            <header
                class="sticky top-0 p-2 m-2 w-[calc(100%-1rem)] border-none z-10 bg-base-200 rounded"
            >
                <h2 class="text-xl font-medium px-2">
                    {{
                        (id
                            ? 'APP.CONCIERGE.LOCKERS_BANK_EDIT'
                            : 'APP.CONCIERGE.LOCKERS_BANK_NEW'
                        ) | translate
                    }}
                </h2>
                <button icon matRipple mat-dialog-close *ngIf="!loading">
                    <app-icon>close</app-icon>
                </button>
            </header>
            <main
                *ngIf="!loading; else load_state"
                class="p-4 flex flex-col max-h-[65vh] overflow-auto"
                [formGroup]="form"
            >
                <label for="name">{{ 'RESOURCE.LEVEL' | translate }}</label>
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
                <div class="flex space-x-4">
                    <div class="flex-1 flex flex-col">
                        <label for="name">{{ 'FORM.NAME' | translate }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="name"
                                formControlName="name"
                                [placeholder]="'FORM.NAME' | translate"
                            />
                            <mat-error>{{
                                'FORM.NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex-1 flex flex-col">
                        <label for="map-id">{{
                            'EXPLORE.MAP_ID' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="map-id"
                                formControlName="map_id"
                                [placeholder]="'EXPLORE.MAP_ID' | translate"
                            />
                            <mat-error>
                                {{ 'EXPLORE.MAP_ID_REQUIRED' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <label for="row">{{ 'COMMON.HEIGHT' | translate }}</label>
                <a-counter
                    formControlName="height"
                    class="mb-4"
                    [min]="1"
                    [max]="16"
                    [render_fn]="render_fn"
                ></a-counter>
                <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="notes"
                        [placeholder]="'FORM.NOTES' | translate"
                        formControlName="notes"
                    ></textarea>
                </mat-form-field>
                <label for="tags"> {{ 'COMMON.TAGS' | translate }} </label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-chip-grid name="tags" #chipList aria-label="Tag List">
                        <mat-chip-row
                            *ngFor="let item of tag_list"
                            (removed)="removeTag(item)"
                        >
                            <div class="truncate max-w-md">{{ item }}</div>
                            <button
                                matChipRemove
                                [attr.aria-label]="
                                    'COMMON.ITEM_REMOVE' | translate
                                "
                            >
                                <app-icon>cancel</app-icon>
                            </button>
                        </mat-chip-row>
                    </mat-chip-grid>
                    <input
                        placeholder="Tags..."
                        [matChipInputFor]="chipList"
                        [matChipInputSeparatorKeyCodes]="separators"
                        [matChipInputAddOnBlur]="true"
                        (matChipInputTokenEnd)="addTag($event)"
                    />
                </mat-form-field>
            </main>
            <footer
                class="flex items-center justify-end space-x-2 px-4 py-2 border-t border-base-300"
            >
                <button btn matRipple class="w-32" (click)="postForm()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        </div>
        <ng-template #load_state>
            <main
                class="p-8 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.LOCKERS_BANK_SAVING' | translate }}</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class LockerBankModalComponent {
    @Output() public readonly event = new EventEmitter<DialogEvent>();
    public loading: boolean;
    public readonly render_fn = (v) => `${v}u`;
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];
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

    public readonly addTag = (e) =>
        addChipItem(this.form.controls.tags as any, e);
    public readonly removeTag = (i) =>
        removeChipItem(this.form.controls.tags as any, i);

    public get tag_list(): string[] {
        return this.form.controls.tags.value;
    }

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
        tags: new FormControl([]),
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
        const level = this._org.levelWithID(value.zones);
        value.zones = unique(
            [
                level.id,
                this._org.organisation.id,
                this._org.region.id,
                level.parent_id,
            ].filter((_) => _),
        );
        this._dialog_ref.disableClose = true;
        this.event.emit({ reason: 'done', metadata: value });
    }
}
