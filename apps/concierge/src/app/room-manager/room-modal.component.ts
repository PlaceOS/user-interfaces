import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    computed,
    inject,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import {
    EncryptionLevel,
    addSystem,
    queryZones,
    showMetadata,
    updateMetadata,
    updateSystem,
} from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AsyncHandler,
    OrganisationService,
    Space,
    TIMEZONES_IANA,
    getInvalidFields,
    getItemWithKeys,
    i18n,
    notifyError,
    notifyWarn,
    unique,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { generateSystemsFormFields } from '@placeos/events';
import {
    CounterComponent,
    DurationFieldComponent,
    ImageListFieldComponent,
} from '@placeos/form-fields';
import { from } from 'rxjs';
import { SelectMapItemModalComponent } from '../ui/select-map-item-modal.component';

@Component({
    selector: 'room-form-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.ROOMS_EDIT'
                    : 'APP.CONCIERGE.ROOMS_NEW'
                ) | translate
            "
            [loading]="
                loading ? ('APP.CONCIERGE.ROOMS_SAVING' | translate) : ''
            "
            (confirm)="save()"
        >
            <form system [formGroup]="form">
                @if (form.controls.zone) {
                    <div class="flex flex-col">
                        <label
                            for="zone"
                            [class.error]="
                                form.controls.zone.invalid &&
                                form.controls.zone.touched
                            "
                        >
                            {{ 'RESOURCE.LEVEL' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                formControlName="zone"
                                [placeholder]="
                                    'APP.CONCIERGE.ROOMS_SELECT_LEVEL'
                                        | translate
                                "
                            >
                                @for (level of levels(); track level) {
                                    <mat-option [value]="level.id">
                                        {{ level.display_name || level.name }}
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-error>{{
                                'APP.CONCIERGE.ROOMS_LEVEL_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                <div class="flex space-x-2">
                    @if (form.controls.name) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="system-name"
                                [class.error]="
                                    form.controls.name.invalid &&
                                    form.controls.name.touched
                                "
                            >
                                {{ 'FORM.NAME' | translate }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="system-name"
                                    [placeholder]="'FORM.NAME' | translate"
                                    formControlName="name"
                                    required
                                />
                                @if (form.controls.name.invalid) {
                                    <mat-error>
                                        {{ 'FORM.NAME_REQUIRED' | translate }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.email) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="system-email"
                                [class.error]="
                                    form.controls.email.invalid &&
                                    form.controls.email.touched
                                "
                            >
                                {{ 'FORM.EMAIL' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="system-email"
                                    [placeholder]="'FORM.EMAIL' | translate"
                                    formControlName="email"
                                />
                                @if (form.controls.email.invalid) {
                                    <mat-error>
                                        {{ 'FORM.EMAIL_REQUIRED' | translate }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="flex space-x-2">
                    @if (form.controls.display_name) {
                        <div class="flex flex-1 flex-col">
                            <label for="display-name">{{
                                'FORM.DISPLAY_NAME' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="display-name"
                                    [placeholder]="
                                        'FORM.DISPLAY_NAME' | translate
                                    "
                                    formControlName="display_name"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.display_name) {
                        <div class="flex flex-1 flex-col">
                            <label for="code-name">{{
                                'APP.CONCIERGE.ROOMS_CODE' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="code-name"
                                    [placeholder]="
                                        'APP.CONCIERGE.ROOMS_CODE' | translate
                                    "
                                    formControlName="code"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="flex space-x-2" [formGroup]="settings_form">
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="setup" class="flex items-center">
                            {{
                                'APP.CONCIERGE.ROOMS_DEFAULT_SETUP' | translate
                            }}
                            <icon
                                class="ml-2 text-base"
                                [matTooltip]="
                                    'APP.CONCIERGE.ROOMS_SETUP_INFO' | translate
                                "
                            >
                                info
                            </icon>
                        </label>
                        <a-duration-field
                            name="setup"
                            formControlName="setup"
                            [min]="0"
                        ></a-duration-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="breakdown" class="flex items-center">
                            {{
                                'APP.CONCIERGE.ROOMS_DEFAULT_BREAKDOWN'
                                    | translate
                            }}
                            <icon
                                class="ml-2 text-base"
                                [matTooltip]="
                                    'APP.CONCIERGE.ROOMS_BREAKDOWN_INFO'
                                        | translate
                                "
                            >
                                info
                            </icon>
                        </label>
                        <a-duration-field
                            name="breakdown"
                            [min]="0"
                            formControlName="breakdown"
                        ></a-duration-field>
                    </div>
                </div>
                <div class="mb-4 flex space-x-2">
                    @if (form.controls.approval) {
                        <div class="flex flex-1 flex-col pt-4">
                            <settings-toggle
                                [name]="'COMMON.REQUIRE_APPROVAL' | translate"
                                formControlName="approval"
                            >
                            </settings-toggle>
                        </div>
                    }
                    @if (form.controls.bookable) {
                        <div class="flex flex-1 flex-col pt-4">
                            <settings-toggle
                                [name]="'COMMON.BOOKABLE' | translate"
                                formControlName="bookable"
                            >
                            </settings-toggle>
                        </div>
                    }
                </div>
                @if (form.controls.capacity) {
                    <div class="mb-4 flex flex-col">
                        <label
                            for="capacity"
                            [class.error]="
                                form.controls.capacity.invalid &&
                                form.controls.capacity.touched
                            "
                        >
                            {{ 'COMMON.CAPACITY' | translate }}
                        </label>
                        <a-counter
                            name="capacity"
                            class="w-full"
                            formControlName="capacity"
                            [min]="0"
                            [max]="256"
                        ></a-counter>
                    </div>
                }
                @if (form.controls.description) {
                    <div class="flex flex-col">
                        <label for="description">{{
                            'COMMON.DESCRIPTION' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                [placeholder]="'COMMON.DESCRIPTION' | translate"
                                formControlName="description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.features) {
                    <div class="flex flex-col">
                        <label
                            [class.error]="
                                form.controls.features.invalid &&
                                form.controls.features.touched
                            "
                        >
                            {{ 'COMMON.FEATURES' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-chip-grid
                                #chipList
                                [attr.aria-label]="
                                    'COMMON.FEATURES' | translate
                                "
                            >
                                @for (feature of feature_list; track feature) {
                                    <mat-chip-row
                                        [removable]="true"
                                        (removed)="removeFeature(feature)"
                                    >
                                        {{ feature }}
                                        <icon matChipRemove>close</icon>
                                    </mat-chip-row>
                                }
                                <input
                                    [placeholder]="
                                        'COMMON.FEATURES' | translate
                                    "
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="addFeature($event)"
                                />
                            </mat-chip-grid>
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.map_id) {
                    <div class="flex flex-col">
                        <label for="map_id">{{
                            'EXPLORE.MAP_ID' | translate
                        }}</label>
                        <div class="flex space-x-2">
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="map_id"
                                    [placeholder]="
                                        'EXPLORE.MAP_ID_PLACEHOLDER' | translate
                                    "
                                    formControlName="map_id"
                                />
                            </mat-form-field>
                            <button
                                icon
                                matRipple
                                class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                                [matTooltip]="
                                    'APP.CONCIERGE.POI_MAP_SELECT' | translate
                                "
                                (click)="selectItemfromMap()"
                            >
                                <icon>place</icon>
                            </button>
                        </div>
                    </div>
                }
                <div class="flex flex-col">
                    <label for="timezone">{{
                        'COMMON.TIMEZONE' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <icon matPrefix class="text-2xl">search</icon>
                        <input
                            matInput
                            formControlName="timezone"
                            [placeholder]="'COMMON.TIMEZONE' | translate"
                            [matAutocomplete]="auto"
                        />
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        @for (tz of filtered_timezones(); track tz) {
                            <mat-option [value]="tz">
                                {{ tz }}
                            </mat-option>
                        }
                        @if (!timezones().length) {
                            <mat-option [disabled]="true">
                                {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                            </mat-option>
                        }
                    </mat-autocomplete>
                </div>
                @if (form.controls.images) {
                    <div class="flex flex-col">
                        <label for="images">{{
                            'COMMON.IMAGE' | translate
                        }}</label>
                        <image-list-field
                            name="images"
                            formControlName="images"
                        ></image-list-field>
                    </div>
                }
                @if (form.controls.timetable_url) {
                    <div class="flex flex-col">
                        <label
                            for="timetable-url"
                            [class.error]="
                                form.controls.timetable_url.invalid &&
                                form.controls.timetable_url.touched
                            "
                        >
                            {{ 'COMMON.TIMETABLE_URL' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="timetable-url"
                                [placeholder]="
                                    'COMMON.TIMETABLE_URL' | translate
                                "
                                formControlName="timetable_url"
                            />
                            <mat-error>
                                {{ 'SYSTEMS.URL_VALID' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.room_booking_url) {
                    <div class="flex flex-col">
                        <label
                            for="room-booking-url"
                            [class.error]="
                                form.controls.room_booking_url.invalid &&
                                form.controls.room_booking_url.touched
                            "
                        >
                            {{ 'COMMON.ROOM_BOOKING_URL' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="room-booking-url"
                                [placeholder]="
                                    'COMMON.ROOM_BOOKING_URL' | translate
                                "
                                formControlName="room_booking_url"
                            />
                            <mat-error>
                                {{ 'COMMON.URL_VALID' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                }
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [
        `
            mat-checkbox {
                margin-top: 2.5em;
                margin-bottom: 1.5em;
            }

            @media screen and (max-width: 640px) {
                mat-checkbox {
                    margin-top: 0;
                }
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        FullscreenModalShellComponent,
        ImageListFieldComponent,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        CounterComponent,
        SettingsToggleComponent,
        MatSelectModule,
        DurationFieldComponent,
        MatTooltipModule,
    ],
})
export class RoomModalComponent extends AsyncHandler implements OnInit {
    private _data = inject<{
        room: Space;
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<RoomModalComponent>>(MatDialogRef);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    public loading = false;
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;
    /** Group of form fields used for creating the system */
    public form = generateSystemsFormFields(this._data.room as any);
    public readonly timezones = signal(TIMEZONES_IANA);
    private readonly _timezone_query = toSignal(
        this.form.controls.timezone.valueChanges,
        { initialValue: this.form.controls.timezone.value || '' },
    );
    public readonly filtered_timezones = computed(() => {
        const timezone = `${this._timezone_query() || ''}`.toLowerCase();
        return this.timezones().filter((item) =>
            item.toLowerCase().includes(timezone),
        );
    });
    public settings_form = new FormGroup({
        setup: new FormControl(0),
        breakdown: new FormControl(0),
    });
    /** Levels of encyption available for the system's settings */
    public encryption_levels: any[] = [
        { id: EncryptionLevel.None, name: 'None' },
        { id: EncryptionLevel.Support, name: 'Support' },
        { id: EncryptionLevel.Admin, name: 'Admin' },
        { id: EncryptionLevel.NeverDisplay, name: 'Never Display' },
    ];
    /** Function for querying zones */
    public readonly query_fn = (_: string) =>
        from(queryZones({ q: _ })).pipe(map((resp) => resp.data));
    /** List of separator characters for features */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public get feature_list(): string[] {
        return this.form.controls.features.value || [];
    }

    public async ngOnInit() {
        const { details } = await showMetadata(
            this._org.organisation.id,
            'settings',
        );
        const overflow = getItemWithKeys(['events', 'overflow'], details) || {};
        if (this._data.room.id && overflow[this._data.room.id]) {
            this.settings_form.patchValue(overflow[this._data.room.id]);
        }
    }

    /**
     * Add a feature to the list of features for the item
     * @param event Input event
     */
    public addFeature(event: MatChipInputEvent): void {
        if (!this.form || !this.form.controls.features) return;
        const input = event.input;
        const value = event.value;
        const feature_list = [...this.feature_list];
        if ((value || '').trim()) {
            feature_list.push(value.trim());
            this.form.controls.features.setValue(feature_list);
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    /**
     * Remove feature from the list
     * @param existing_feature Feature to remove
     */
    public removeFeature(existing_feature: string): void {
        if (!this.form || !this.form.controls.features) return;
        const feature_list = [...this.feature_list];
        const index = feature_list.indexOf(existing_feature);

        if (index >= 0) {
            feature_list.splice(index, 1);
            this.form.controls.features.setValue(feature_list);
        }
    }

    public async save() {
        if (!this.form.valid)
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        if (!this.form.value.id) {
            this.form.patchValue({
                display_name:
                    this.form.value.display_name || this.form.value.name,
                zones: unique([
                    this._org.organisation.id,
                    this._org.building.parent_id,
                    this._org.building.id,
                    `${this.form.value.zone?.id || this.form.value.zone || ''}`,
                ]).filter((_) => _),
            });
        }
        this.loading = true;
        this._dialog_ref.disableClose = true;
        const data = this.form.getRawValue();
        const { details } = (await showMetadata(
            this._org.organisation.id,
            'settings',
        )) as any;
        const overflow = getItemWithKeys(['events', 'overflow'], details) || {};
        overflow[data.id] = this.settings_form.value;
        await updateMetadata(this._org.organisation.id, {
            name: 'settings',
            details: {
                ...details,
                events: { ...(details.events || {}), overflow },
            },
            description: '',
        }).catch((e) =>
            notifyWarn('Unable to save room setup and breakdown times'),
        );
        await (data.id ? updateSystem(data.id, data) : addSystem(data));
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close(true);
        this.loading = false;
    }

    public selectItemfromMap() {
        let level = this._org.levelWithID(this.form.value.zones as any);
        const ref = this._dialog.open(SelectMapItemModalComponent, {
            data: {
                location: this.form.value.map_id,
                level_id: this.form,
            },
        });
        ref.afterClosed().subscribe((d) => {
            if (!d) return;
            level = ref.componentInstance.level() || level;
            const zones = unique([
                this._org.organisation.id,
                this._org.building.parent_id,
                this._org.building.id,
                level?.id,
            ]);
            this.form.patchValue({ map_id: d, zones });
        });
    }
}
