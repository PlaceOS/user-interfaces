import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { LockerBank } from '@placeos/bookings';
import {
    DialogEvent,
    OrganisationService,
    SettingsService,
    unique,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    addChipItem,
    CounterComponent,
    removeChipItem,
} from '@placeos/form-fields';
import { map } from 'rxjs/operators';

@Component({
    selector: 'locker-bank-modal',
    template: `
        <div class="w-[32rem]">
            <header
                class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        (id
                            ? 'APP.CONCIERGE.LOCKERS_BANK_EDIT'
                            : 'APP.CONCIERGE.LOCKERS_BANK_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading) {
                <main
                    class="flex max-h-[65vh] flex-col overflow-auto p-4"
                    [formGroup]="form"
                >
                    <label for="name">{{ 'RESOURCE.LEVEL' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            [ngModel]="form.value.zones[0] || ''"
                            (ngModelChange)="
                                form.patchValue({ zones: [$event] })
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            @for (level of levels | async; track level) {
                                <mat-option [value]="level.id">
                                    <div class="flex flex-col-reverse">
                                        @if (use_region) {
                                            <div class="text-xs opacity-30">
                                                {{
                                                    (level.parent_id | building)
                                                        ?.display_name
                                                }}
                                                <span class="opacity-0">
                                                    -
                                                </span>
                                            </div>
                                        }
                                        <div>
                                            {{
                                                level.display_name || level.name
                                            }}
                                        </div>
                                    </div>
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <div class="flex space-x-4">
                        <div class="flex flex-1 flex-col">
                            <label for="name">{{
                                'FORM.NAME' | translate
                            }}</label>
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
                        <div class="flex flex-1 flex-col">
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
                        <mat-chip-grid
                            name="tags"
                            #chipList
                            aria-label="Tag List"
                        >
                            @for (item of tag_list; track item) {
                                <mat-chip-row (removed)="removeTag(item)">
                                    <div class="max-w-md truncate">
                                        {{ item }}
                                    </div>
                                    <button
                                        matChipRemove
                                        [attr.aria-label]="
                                            'COMMON.ITEM_REMOVE' | translate
                                        "
                                    >
                                        <icon>cancel</icon>
                                    </button>
                                </mat-chip-row>
                            }
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
            } @else {
                <main
                    class="flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.LOCKERS_BANK_SAVING' | translate }}</p>
                </main>
            }
            <footer
                class="flex items-center justify-end space-x-2 border-t border-base-300 px-4 py-2"
            >
                <button btn matRipple class="w-32" (click)="postForm()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        </div>
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatRippleModule,
        MatChipsModule,
        IconComponent,
        CounterComponent,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        TranslatePipe,
    ],
})
export class LockerBankModalComponent {
    private _data = inject<LockerBank>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<LockerBankModalComponent>>(MatDialogRef);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

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

    constructor() {
        const _data = this._data;

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
